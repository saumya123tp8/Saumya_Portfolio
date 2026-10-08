import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hero name and contact section", () => {
  render(<App />);
  expect(screen.getAllByText(/Keservani/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Let's build something/i)).toBeInTheDocument();
});
