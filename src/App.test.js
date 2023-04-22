import { render, fireEvent, screen } from "@testing-library/react";

import Booking from './pages/Booking';
import BookingForm from './components/BookingForm';


test("Adds one", () => {
  // render the App component
  render(<Booking />); 
  
  // save the heading in a variable
  const heading = screen.getByTestId("table-reservation"); 
  
  // save the button in a variable
  const btn = screen.getByTestId("booking-submit"); 
  
  // click the btn
  fireEvent.click(btn); 
  
  // test assumption
  expect(heading).toHaveTextContent("Table Reservation");
});


test('Renders the BookingForm heading', () => {
    render(<Booking />);
    const headingElement = screen.getByText("Table Reservation");
    expect(headingElement).toBeInTheDocument();
})

