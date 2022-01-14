import { StyledButton } from './Button.styled';

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <StyledButton>{label}</StyledButton>;
};

export default Button;
