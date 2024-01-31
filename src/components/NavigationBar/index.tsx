import { Button } from "../Button";
import { NavigationBarContainer } from "./styles";

export function NavigationBar() {
  return (
    <NavigationBarContainer>
      <Button label={"Voltar"} type={"outlined"} />
      <Button label={"Continuar"} type={"contained"} />
    </NavigationBarContainer>
  );
}
