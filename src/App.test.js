import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // If using React Router
import BookingPage from './components/BookingPage';

test('Renders the BookingPage heading', () => {
  render(
    <MemoryRouter> {/* If your component uses React Router */}
      <BookingPage />
    </MemoryRouter>
  );
  const headingElement = screen.getByText('Reserve a table at Little Lemon'); 
  expect(headingElement).toBeInTheDocument();
});




