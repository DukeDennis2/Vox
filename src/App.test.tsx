import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders input with placeholder', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/type something.../i);
  expect(inputElement).toBeInTheDocument();
});