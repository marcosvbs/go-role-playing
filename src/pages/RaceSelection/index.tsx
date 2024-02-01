import { Header } from "../../components/Header";
import { NavigationBar } from "../../components/NavigationBar";
import { RaceSelectionContainer } from "./styles";

export function RaceSelection() {
  return (
    <>
      <Header />
      <RaceSelectionContainer>
        <h3>Passo 1: Escolha sua raça</h3>
        <NavigationBar previousPage={"/"} nextPage={"/vocation-selection"} />
      </RaceSelectionContainer>
    </>
  );
}
