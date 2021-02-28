import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "thyago silva" title', () => {
  render(<App />);
  const title = screen.getByText('thyago silva');
  expect(title).toBeInTheDocument();
})

test('renders "desenvolvedor full-stack" subtitle', () => {
  render(<App />);
  const subtitle = screen.getByText('desenvolvedor full-stack');
  expect(subtitle).toBeInTheDocument();
})

test('renders four links', () => {
  render(<App />);
  const anchors = screen.getAllByTestId('social-anchor');
  expect(anchors.length).toBe(4);
})

test('render four skill cards', () => {
  render(<App />);
  const cards = screen.getAllByTestId('skill-card');
  expect(cards.length).toBe(4);
})
