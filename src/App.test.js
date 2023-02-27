import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./pages/Home";

// test('renders learn react link', () => {
// En home buscamos por text que es el title
test("renders without crashing", async () => {
  render(<App />);
  const title = await screen.findByText('Última busqueda');
  expect(title).toBeInTheDocument();
});
// Al final, lo que quiere decir es, espero que el texto Última busqueda esté en el documento
