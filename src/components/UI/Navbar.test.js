import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  test("renders Genre of Cat", () => {
    render(<Navbar />);

    const genreLinkElement = screen.getByRole("link", {
      name: /kind of cat/i,
    });

    expect(genreLinkElement).toBeInTheDocument();
  });
});
