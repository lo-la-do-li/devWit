import React from "react";
import GetMaterial from "./index";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import { fetchRandomJoke, fetchTenJokes } from "../apiCalls";
import mockData from "../mockData";
import { addToMySet } from "../actions";

jest.mock("../apiCalls");
jest.mock("../actions");

let getAJokeButton, getTenJokesButton;

describe("GetMaterial", () => {
  beforeEach(() => {
    fetchRandomJoke.mockResolvedValueOnce([mockData.joke]);
    fetchTenJokes.mockResolvedValueOnce(mockData.jokes);
    addToMySet.mockResolvedValue(mockData.mySet);

    render(
      <MemoryRouter>
        <GetMaterial />
      </MemoryRouter>
    );
    getAJokeButton = screen.getByRole("button", {
      name: "Get A Joke",
    });
    getTenJokesButton = screen.getByRole("button", {
      name: "Get 10 Jokes",
    });
  });

  it("should display a title", () => {
    const title = screen.getByText("Need Some New Material?");
    expect(title).toBeInTheDocument();
  });

  it("should render two buttons", () => {
    expect(getAJokeButton).toBeInTheDocument();
    expect(getTenJokesButton).toBeInTheDocument();
  });

  it("should make API call for one random joke and render it when Get A Joke button is clicked", async () => {
    userEvent.click(getAJokeButton);

    const randomJoke = await waitFor(() =>
      screen.getByText("'Can I join you?'")
    );
    expect(fetchRandomJoke).toHaveBeenCalledTimes(1);
    expect(randomJoke).toBeInTheDocument();
  });

  it("should make API call for 10 random jokes and render them when Get Ten Jokes button is clicked", async () => {
    userEvent.click(getTenJokesButton);

    const oneOfTen = await waitFor(() =>
      screen.getByText("What's the object-oriented way to become wealthy?")
    );
    expect(fetchTenJokes).toHaveBeenCalledTimes(1);
    expect(oneOfTen).toBeInTheDocument();
  });

  it("should call a global action that adds a user's joke to My Set when '+' button is clicked", async () => {
    userEvent.click(getTenJokesButton);

    const funnyJokePunchline1 = await waitFor(() =>
      screen.getByText("['hip', 'hip']")
    );

    expect(funnyJokePunchline1).toBeInTheDocument();

    const addButton = screen.getByRole("button", {
      name: /add\-joke\-27\-to\-set/i,
    });

    userEvent.click(addButton);

    expect(addToMySet).toHaveBeenCalledTimes(1);
  });
});
