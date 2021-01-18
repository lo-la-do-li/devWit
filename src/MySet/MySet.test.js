import React from "react";
import JokesContainer from "../JokesContainer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import mockData from "../mockData";

let myJokes, mockRemoveJoke, notFunnyJoke, removeButton, notFunnySetup;

describe("MySet", () => {
  beforeEach(() => {
    myJokes = mockData.mySet;
    mockRemoveJoke = jest.fn();
    notFunnyJoke = mockData.mySet[0];

    render(
      <MemoryRouter>
        <section className="my-set">
          <h2>This is My Set</h2>
          <JokesContainer jokes={myJokes} removeJoke={mockRemoveJoke} />
        </section>
      </MemoryRouter>
    );

    notFunnySetup = screen.getByText("['hip', 'hip']");

    removeButton = screen.getByRole("button", {
      name: /remove\-joke\-27\-from\-set/i,
    });
  });

  it("should display a title", () => {
    const header = screen.getByText("This is My Set");
    expect(header).toBeInTheDocument();
  });

  it("should render a jokes container with liked jokes", () => {
    const likedJoke = screen.getByText("['hip', 'hip']");
    expect(likedJoke).toBeInTheDocument();
    expect(myJokes).toHaveLength(3);
  });

  it("should remove a joke from the container when button is clicked", () => {
    mockRemoveJoke.mockResolvedValueOnce({ myJokes: mockData.myNewSet });
    userEvent.click(removeButton);

    expect(mockRemoveJoke).toHaveBeenCalledTimes(1);
    expect(mockRemoveJoke).toHaveBeenCalledWith(notFunnyJoke);
    expect(screen.queryByText(notFunnyJoke.type)).not.toBeInTheDocument();
  });
});
