import React from "react";
import Home from "./index.js";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";

describe("Home", () => {
  it("It should display a welcome message and brief description of the app", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const welcomeMsg = screen.getByRole("heading", { name: /welcome, dev\./i });

    const descriptionP1 = screen.getByText(
      "So, a colleague said you were witty during yesterday morning's stand-up..."
    );
    const descriptionP2 = screen.getByText(
      'And you thought, "Hey, why not try moonlighting as a comedian?"'
    );
    const descriptionP3 = screen.getByText("You've come to the right place.");

    const descriptionP4 = screen.getByText(
      /devwit allows you to generate random programming\-related jokes and add them to your "set" so that you can impressive your colleagues with your hilarious comedy \./i
    );

    expect(welcomeMsg).toBeInTheDocument();
    expect(descriptionP1).toBeInTheDocument();
    expect(descriptionP2).toBeInTheDocument();
    expect(descriptionP3).toBeInTheDocument();
    expect(descriptionP4).toBeInTheDocument();
  });
});
