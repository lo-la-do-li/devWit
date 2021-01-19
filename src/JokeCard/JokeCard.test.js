import React from "react";
import JokeCard from "./index.js";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";
import mockData from "../mockData.js";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

let joke,
  mockRemoveJoke,
  mockAddJoke,
  setup,
  punchline,
  removeButton,
  addButton;

describe("JokeCard", () => {
  it("should render a joke card", () => {
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
          isFavorite={false}
          addJoke={mockAddJoke}
          removeJoke={mockRemoveJoke}
        />
      </MemoryRouter>
    );
    setup = screen.getByText(
      "A SQL query walks into a bar, walks up to two tables and asks..."
    );
    punchline = screen.getByText("'Can I join you?'");
    addButton = screen.getByRole("button", {
      name: /add\-joke\-24\-to\-set/i,
    });

    expect(setup).toBeInTheDocument();
    expect(punchline).toBeInTheDocument();
  });

  it("renders removeButton if isFavorite=false and passes the correct joke object to the removeJoke function on button click", async () => {
    joke = mockData.joke;
    mockRemoveJoke = jest.fn();
    render(
      <MemoryRouter>
        <JokeCard
          joke={joke}
          id={joke.id}
          type={joke.type}
          setup={joke.setup}
          punchline={joke.punchline}
          isFavorite={(joke.isFavorite = true)}
          addJoke={mockAddJoke}
          removeJoke={mockRemoveJoke}
        />
      </MemoryRouter>
    );
    removeButton = screen.getByRole("button", {
      name: /remove\-joke\-24\-from\-set/i,
    });
    expect(removeButton).toBeInTheDocument();

    fireEvent.click(removeButton);

    expect(mockRemoveJoke).toHaveBeenCalledWith(joke);
  });

  it("renders addButton if joke isFavorite=true, and passes the correct joke object to the addJoke function on click", () => {
    joke = mockData.joke;
    mockAddJoke = jest.fn();
    render(
      <MemoryRouter>
        <JokeCard
          joke={joke}
          id={joke.id}
          type={joke.type}
          setup={joke.setup}
          punchline={joke.punchline}
          isFavorite={false}
          addJoke={mockAddJoke}
          removeJoke={mockRemoveJoke}
        />
      </MemoryRouter>
    );
    addButton = screen.getByRole("button", {
      name: /add\-joke\-24\-to\-set/i,
    });
    expect(addButton).toBeInTheDocument();

    fireEvent.click(addButton);

    expect(mockAddJoke).toHaveBeenCalledWith(joke);
  });
});
