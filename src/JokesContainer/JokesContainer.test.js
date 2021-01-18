import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import JokesContainer from "./index.js";
import mockData from "../mockData";

let randomTenJokes, randomJoke, mockAddJoke, mockRemoveJoke, mySetJokes;

describe("JokesContainer", () => {
  beforeEach(() => {
    randomJoke = [mockData.joke];
    randomTenJokes = mockData.jokes;
    mySetJokes = mockData.mySet;
    mockAddJoke = jest.fn();
    mockRemoveJoke = jest.fn();
  });
  it("should display 1 random joke when passed randomJoke object and addJoke props from parent node GetMaterial", () => {
    render(<JokesContainer jokes={randomJoke} addJoke={mockAddJoke} />);

    const randomSetup = screen.getByText(
      "A SQL query walks into a bar, walks up to two tables and asks..."
    );
    const randomPunchline = screen.getByText("'Can I join you?'");

    expect(randomSetup).toBeInTheDocument();
    expect(randomPunchline).toBeInTheDocument();
  });

  it("should display 10 jokes when passed jokes array and addJoke props from parent node GetMaterial", () => {
    render(<JokesContainer jokes={randomTenJokes} addJoke={mockAddJoke} />);
    const setup1 = screen.getByText("['hip', 'hip']");
    const punchline1 = screen.getByText("(hip hip array)");

    const setup2 = screen.getByText(
      "What's the object-oriented way to become wealthy?"
    );
    const punchline2 = screen.getByText("Inheritance");

    expect(setup1).toBeInTheDocument();
    expect(punchline1).toBeInTheDocument();
    expect(setup2).toBeInTheDocument();
    expect(punchline2).toBeInTheDocument();
  });

  it("should display liked jokes when passed myJokes array and removeJoke props from parent node MySet", () => {
    render(<JokesContainer jokes={mySetJokes} removeJoke={mockRemoveJoke} />);
    const myJokeSetup = screen.getByText(
      "A programmer puts two glasses on his bedside table before going to sleep."
    );
    const myJokePunchline = screen.getByText(
      "A full one, in case he gets thirsty, and an empty one, in case he doesn’t."
    );

    expect(myJokeSetup).toBeInTheDocument();
    expect(myJokePunchline).toBeInTheDocument();
  });
});
