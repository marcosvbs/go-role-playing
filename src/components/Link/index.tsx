import { ContainedLink, OutlinedLink } from "./styles";

interface ContainedButtonProps {
  label: string;
  type: "contained" | "outlined";
  destination: string;
}

export function Link({ label, type, destination }: ContainedButtonProps) {
  switch (type) {
    case "contained":
      return <ContainedLink to={destination}>{label}</ContainedLink>;
    case "outlined":
      return <OutlinedLink to={destination}>{label}</OutlinedLink>;
  }
}
