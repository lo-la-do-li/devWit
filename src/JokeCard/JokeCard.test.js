import React from "react";
import JokeCard from "./JokeCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";
import mockData from "../mockData.js";

describe("JokeCard", () => {
  it("should render a joke card", () => {
    const joke = mockData.joke;
    const { mockAddJoke, mockRemoveJoke } = jest.fn();

    render(
      <MemoryRouter>
        <JokeCard
          joke={joke}
          id={joke.id}
          type={joke.type}
          setup={joke.setup}
          punchline={joke.punchline}
          addJoke={mockAddJoke}
          removeJoke={mockRemoveJoke}
        />
      </MemoryRouter>
    );
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  });
});
