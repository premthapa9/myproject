import { render, screen } from "@testing-library/react";
import App from "./App.jsx";
import { expect } from "vitest";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/i)
    ).toBeInTheDocument();
  });
});
