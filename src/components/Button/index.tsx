import { ContainedButton, OutlinedButton } from "./styles";

interface ContainedButtonProps {
  label: string;
  type: "contained" | "outlined";
}

export function Button({ label, type }: ContainedButtonProps) {
  switch (type) {
    case "contained":
      return <ContainedButton>{label}</ContainedButton>;
    case "outlined":
      return <OutlinedButton>{label}</OutlinedButton>;
  }
}
