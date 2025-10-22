 transformia/convert-react-code-to-modern-landing-page/2025-10-22-00-22-49
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
=======
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
 main
  });
});
