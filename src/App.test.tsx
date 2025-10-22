import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders hero content in default language', () => {
    render(<App />);
    expect(screen.getByText(/La capa de decisión/i)).toBeInTheDocument();
  });

  it('switches language when selecting English', () => {
    render(<App />);
    const select = screen.getByLabelText(/language selector/i);
    fireEvent.change(select, { target: { value: 'en' } });
    expect(screen.getByText(/Decision intelligence/i)).toBeInTheDocument();
  });
});
