import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('IO landing experience', () => {
  it('renders Spanish content by default and switches to English', async () => {
    render(<App />);

    expect(screen.getByText(/La capa de decisión/i)).toBeInTheDocument();

    const englishToggle = screen.getByRole('button', { name: 'EN' });
    await userEvent.click(englishToggle);

    expect(screen.getByText(/The decision layer/i)).toBeInTheDocument();
  });

  it('displays the lead capture form CTA', () => {
    render(<App />);

    expect(screen.getByRole('button', { name: /Agendar discovery call/i })).toBeInTheDocument();
    expect(screen.getByText(/política de privacidad/i)).toBeInTheDocument();
  });
});
