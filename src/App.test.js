import "@testing-library/react/cleanup-after-each";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Passes
it("calls onSubmit when the button is clicked", () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<App onSubmit={onSubmit} />);

  fireEvent.click(getByTestId("submit-button"));

  expect(onSubmit).toHaveBeenCalled();
});

// Fails
it("calls onSubmit when the span inside the button is clicked", () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<App onSubmit={onSubmit} />);

  fireEvent.click(getByTestId("submit-button-span"));

  expect(onSubmit).toHaveBeenCalled();
});
