import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import JokesContainer from "./index.js";
import JokeCard from "../JokeCard/";
import mockData from "../mockData";

beforeEach(() => {
  const getMaterialJokes = mockData.jokes;
  const mySetJokes = mockData.mySet;
  const { mockAddJoke, mockRemoveJoke } = jest.fn();
});
describe("JokesContainer", () => {
  it("should display 10 jokes with addJoke prop if rendered by GetMaterial", () => {
    render(<JokesContainer jokes={getMaterialJokes} addJoke={mockAddJoke} />);
  });
});
