import React from "react";
import JokeCard from "./index.js";
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

    const setup = screen.getByText(
      "A SQL query walks into a bar, walks up to two tables and asks..."
    );
    const punchline = screen.getByText("'Can I join you?'");
    const deleteBtn = screen.getByRole("button", {
      name: /remove\-joke\-24\-from\-set/i,
    });
    const addButton = screen.getByRole("button", {
      name: /add\-joke\-24\-to\-set/i,
    });

    expect(addButton).toBeInTheDocument();
    expect(setup).toBeInTheDocument();
    expect(punchline).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
  });
});
