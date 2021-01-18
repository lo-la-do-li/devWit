import React from "react";
import App from "./index";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Router, MemoryRouter } from "react-router";
import { createMemoryHistory } from "history";
import { addToMySet } from "../actions";
import { fetchTenJokes } from "../apiCalls";
import mockData from "../mockData";
import { act } from "react-dom/test-utils";

jest.mock("../apiCalls");
jest.mock("../actions");

describe("App", () => {
  beforeEach(() => {
    fetchTenJokes.mockResolvedValueOnce(mockData.jokes);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  it("should render the NavBar on load with DevWit App name", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("should redirect URL path to /home on load", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(history.location.pathname).toBe("/home");
  });

  it("should render Home component on load", () => {
    const welcomeMsg = screen.getByRole("heading", { name: /welcome, dev\./i });
    expect(welcomeMsg).toBeInTheDocument();
  });

  it("should render GetMaterial when GetMaterial tab is clicked", () => {
    const getMaterialTab = screen.getByRole("button", {
      name: /get some new material/i,
    });
    userEvent.click(getMaterialTab);

    const getMaterialHeader = screen.getByRole("heading", {
      name: /need some new material\?/i,
    });
    expect(getMaterialHeader).toBeInTheDocument();
  });

  it("should render MySet component when MySet tab is clicked", () => {
    const mySetTab = screen.getByRole("button", { name: /my set/i });
    userEvent.click(mySetTab);

    const mySetHeader = screen.getByRole("heading", {
      name: /this is my set/i,
    });
    expect(mySetHeader).toBeInTheDocument();
  });

  it("should add a joke that the user likes to My Set when '+' button is clicked", async () => {
    const funnyJoke = {
      id: 27,
      type: "programming",
      setup: "['hip', 'hip']",
      punchline: "(hip hip array)",
    };

    addToMySet.mockResolvedValueOnce(funnyJoke);

    const getMaterialTab = screen.getByRole("button", {
      name: /get some new material/i,
    });

    userEvent.click(getMaterialTab);

    const getTenJokesButton = screen.getByRole("button", {
      name: "Get 10 Jokes",
    });

    userEvent.click(getTenJokesButton);

    const funnyJokeSetup = await waitFor(() =>
      screen.getByText("['hip', 'hip']")
    );

    expect(funnyJokeSetup).toBeInTheDocument();

    const addButton = screen.getByRole("button", {
      name: /add\-joke\-27\-to\-set/i,
    });

    act(() => {
      userEvent.click(addButton);
    });

    expect(addToMySet).toHaveBeenCalledTimes(1);

    const mySetTab = screen.getByRole("button", { name: /my set/i });
    fireEvent.click(mySetTab);

    const funnyJokePunchline = await waitFor(() =>
      screen.queryByText("(hip hip array)")
    );
    // expect(funnyJokePunchline).toBeInTheDocument();
  });
});
