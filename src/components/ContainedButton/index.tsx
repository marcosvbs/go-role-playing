import { ButtonContainer } from "./styles";

interface ContainedButtonProps {
  label: string;
}

export function ContainedButton({ label }: ContainedButtonProps) {
  return <ButtonContainer>{label}</ButtonContainer>;
}
