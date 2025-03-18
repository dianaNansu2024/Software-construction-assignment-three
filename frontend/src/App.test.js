import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the login form', () => {
  render(<App />);
  
  // Check if the heading exists
  expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
  
  // Check if input fields exist
  expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  
  // Check if the login button exists
  expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
});
