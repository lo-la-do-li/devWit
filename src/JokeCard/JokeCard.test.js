import React from "react";
import JokeCard from "./index.js";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";
import mockData from "../mockData.js";

let joke, mockRemoveJoke, mockAddJoke, setup, punchline, deleteBtn, addButton;

describe("JokeCard", () => {
  beforeEach(() => {
    joke = mockData.joke;
    mockRemoveJoke = jest.fn();
    mockAddJoke = jest.fn();

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
    setup = screen.getByText(
      "A SQL query walks into a bar, walks up to two tables and asks..."
    );
    punchline = screen.getByText("'Can I join you?'");
    deleteBtn = screen.getByRole("button", {
      name: /remove\-joke\-24\-from\-set/i,
    });
    addButton = screen.getByRole("button", {
      name: /add\-joke\-24\-to\-set/i,
    });
  });
  it("should render a joke card", () => {
    expect(addButton).toBeInTheDocument();
    expect(setup).toBeInTheDocument();
    expect(punchline).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
  });
  it("passes the correct joke object to the removeJoke function on button click", () => {
    fireEvent.click(deleteBtn);

    expect(mockRemoveJoke).toHaveBeenCalledWith(joke);
  });
  it("passes the correct joke object to the addJoke function on button click", () => {
    fireEvent.click(addButton);

    expect(mockAddJoke).toHaveBeenCalledWith(joke);
  });
});
