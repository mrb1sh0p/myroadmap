import styled from 'styled-components';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background: ${({ variant }) => (variant === 'primary' ? '#2563eb' : '#e2e8f0')};
  color: ${({ variant }) => (variant === 'primary' ? 'white' : '#1e293b')};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};