import React from "react";
import NavBar from "./index";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Router, MemoryRouter } from "react-router";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

describe("NavBar", () => {
  it("should render navbar with Home, Get Some New Material, and My Set", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const homeTab = screen.getByText("Home");
    const getMaterialTab = screen.getByText("Get Some New Material");

    expect(homeTab).toBeInTheDocument();
    expect(getMaterialTab).toBeInTheDocument();
  });

  it("should route user to Home page when Home tab is clicked", async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavBar />
      </Router>
    );

    const homeTab = await waitFor(() => screen.getByText("Home"));
    userEvent.click(homeTab);

    expect(history.location.pathname).toBe("/home");
  });

  it("should route user to Get Material page when Get Material tab is clicked", async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavBar />
      </Router>
    );

    const getMaterialTab = await waitFor(() =>
      screen.getByRole("button", { name: /get some new material/i })
    );
    userEvent.click(getMaterialTab);

    expect(history.location.pathname).toBe("/get-material");
  });
  it("should route user to My Set page when My Set tab is clicked", async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavBar />
      </Router>
    );

    const mySetTab = await waitFor(() =>
      screen.getByRole("button", { name: /my set/i })
    );
    userEvent.click(mySetTab);

    expect(history.location.pathname).toBe("/my-set");
  });
});
