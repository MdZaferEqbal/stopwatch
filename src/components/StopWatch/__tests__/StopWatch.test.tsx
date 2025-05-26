import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StopWatch from "../index";

test("starts and stops the stopwatch", async () => {
  render(<StopWatch />);

  const startButton = screen.getByText("Start");
  fireEvent.click(startButton);

  const stopButton = await screen.findByText("Stop");
  fireEvent.click(stopButton);

  expect(screen.getByText("Start")).toBeInTheDocument();
});
