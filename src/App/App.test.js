import { render, screen } from "@testing-library/react";
import App from "./index";

//  it("should add a joke that the user likes to My Set when '+' button is clicked", async () => {
//    userEvent.click(getTenJokesButton);
//    const funnyJokePunchline1 = await waitFor(() =>
//      screen.getByText("['hip', 'hip']")
//    );
//    const funnyJokePunchline2 = await waitFor(() =>
//      screen.getByText("one that's a hardware problem")
//    );
//    render(<MySet />);
//    expect(funnyJokePunchline1).toBeInTheDocument();
//    expect(funnyJokePunchline2).toBeInTheDocument();

//    const addButton = screen.getByRole("button", {
//      name: /add\-joke\-27\-to\-set/i,
//    });
//    userEvent.click(addButton);
//    expect(addToMySet).toHaveBeenCalledTimes(1);

//    render(<MySet />);
//    expect(funnyJokePunchline1).toBeInTheDocument();
//    expect(funnyJokePunchline2).toBeInTheDocument();
//  });
