
import { MemoryRouter } from 'react-router-dom'; // If using React Router
import BookingPage from './components/BookingPage';
import Main from './components/Main';
import { render, screen, act } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

import userEvent from '@testing-library/user-event';


test('Renders the BookingPage heading', () => {
  render(
    <MemoryRouter> 
      <BookingPage />
    </MemoryRouter>
  );
  const headingElement = screen.getByText('Reserve a table at Little Lemon'); 
  expect(headingElement).toBeInTheDocument();
});



test('initializeTimes should initialize availableTimes to an empty array', () => {
  render(
    <MemoryRouter initialEntries={["/booking-page"]}>
      <Main />
    </MemoryRouter>
  );
  

  const timeSlots = screen.queryAllByTestId('time-slot'); // Replace 'time-slot' with whatever you use to identify these elements
  expect(timeSlots.length).toBe(0);
});

describe('<BookingPage />', () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router history={history}>
        <BookingPage dispatch={mockDispatch} />
      </Router>
    );
  });

  it('initial form field should be empty', () => {
    expect(screen.getByLabelText(/Date/i).value).toBe('');
    expect(screen.getByLabelText(/Time/i).value).toBe('');
    expect(screen.getByLabelText(/Number of guests/i).value).toBe('');
    expect(screen.getByLabelText(/Occasion/i).value).toBe('');
  });

  it('changes in date field should dispatch an action', async () => {
    await act(async () => {
      userEvent.type(screen.getByLabelText(/Date/i), '2023-09-10');
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', date: '2023-09-10' });
  });

  it('form submission should trigger navigation', async () => {
    // Fill out the form
    userEvent.type(screen.getByLabelText(/Date/i), '2023-09-10');
    userEvent.type(screen.getByLabelText(/Time/i), '18:00');
    userEvent.type(screen.getByLabelText(/Number of guests/i), '3');
    userEvent.selectOptions(screen.getByLabelText(/Occasion/i), ['Birthday']);

    // Click the submit button
    await act(async () => {
      userEvent.click(screen.getByText(/Submit Reservation/i));
    });

   
  });

 
});