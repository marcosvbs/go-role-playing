import { Header } from "../../components/Header";
import { NavigationBar } from "../../components/NavigationBar";
import { VocationSelectionContainer } from "./styles";

export function VocationSelection() {
  return (
    <>
      <Header />
      <VocationSelectionContainer>
        <h3>Passo 1: Escolha sua classe</h3>
        <NavigationBar previousPage={"/race-selection"} nextPage={"/"} />
      </VocationSelectionContainer>
    </>
  );
}
