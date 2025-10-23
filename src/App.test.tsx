import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders Resonance AI hero copy", () => {
    render(<App />);
    expect(screen.getByText(/Resonance AI/i)).toBeInTheDocument();
  });
});
