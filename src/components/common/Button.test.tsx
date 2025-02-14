import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders primary correctly', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByText('Click me')).toHaveStyle(`background: #2563eb`);
  });

  it('renders secondary correctly', () => {
    render(<Button variant="secondary">Click me</Button>);
    expect(screen.getByText('Click me')).toHaveStyle(`background: #e2e8f0`);
  });
});
