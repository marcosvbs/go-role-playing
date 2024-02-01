import { Link } from "../Link";
import { NavigationBarContainer } from "./styles";

interface NavigationBarProps {
  previousPage: string;
  nextPage: string;
}

export function NavigationBar({ previousPage, nextPage }: NavigationBarProps) {
  return (
    <NavigationBarContainer>
      <Link label={"Voltar"} type={"outlined"} destination={previousPage} />
      <Link label={"Continuar"} type={"contained"} destination={nextPage} />
    </NavigationBarContainer>
  );
}
