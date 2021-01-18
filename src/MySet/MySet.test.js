import React from "react";
import MySet from "./index";
import JokesContainer from "../JokesContainer";
import JokeCard from "../JokeCard";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import mockData from "../mockData";
import { deleteFromMySet } from "../actions";

// jest.mock("../actions");
// let myJokes, mockRemoveJoke;
describe("MySet", () => {
  beforeEach(() => {
    const myJokes = mockData.mySet;
    // const mockRemoveJoke = jest.fn().mockImplementation(() => funnyJoke);
    mockRemoveJoke.mockResolvedValueOnce(mockData.myNewSet);

    render(
      <MemoryRouter>
        <section className="my-set">
          <h2>This is My Set</h2>
          <JokesContainer jokes={myJokes} removeJoke={mockRemoveJoke} />
        </section>
      </MemoryRouter>
    );
    console.log(myJokes);
  });

  it("should display a title", () => {
    const header = screen.getByText("This is My Set");
    expect(header).toBeInTheDocument();
  });
  it("should render a jokes container with liked jokes", () => {
    const joke1 = screen.getByText("['hip', 'hip']");
    expect(joke1).toBeInTheDocument();
  });
  it("should remove a joke from the container when button is clicked", async () => {
    const mockRemoveJoke = jest.fn().mockImplementation(() => funnyJoke);
    const notFunnyJoke = await waitFor(() =>
      screen.getByText("['hip', 'hip']")
    );

    // const joke1 = screen.getByText("['hip', 'hip']");
    // expect(notFunnyJoke).toBeInTheDocument();
    //  const funnyJoke = {
    //   id: 27,
    //   type: "programming",
    //   setup: "['hip', 'hip']",
    //   punchline: "(hip hip array)",
    // }
    const removeButton = screen.getByRole("button", {
      name: /remove\-joke\-27\-from\-set/i,
    });
    act(() => userEvent.click(removeButton));
    // console.log(myJokes);
    // const notFunnyJoke = await waitFor(() => screen.getByText("['hip', 'hip']"));
    expect(notFunnyJoke).not.toBeInTheDocument();
  });
});
