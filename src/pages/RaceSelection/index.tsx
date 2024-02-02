// import { useContext } from "react";
import { CharacterSheet } from "../../components/CharacterSheet";
import { Header } from "../../components/Header";
import { NavigationBar } from "../../components/NavigationBar";
import { RaceSelectionContainer } from "./styles";
import { races } from "../../data/races.json";

export function RaceSelection() {
  const avaliableRaces = races;

  return (
    <>
      <Header />
      <RaceSelectionContainer>
        <h3>Passo 1: Escolha sua raça</h3>
        <div>
          <ul>
            {avaliableRaces.map((race) => {
              return <li>{race.name}</li>;
            })}
          </ul>
        </div>
        <CharacterSheet />
        <NavigationBar previousPage={"/"} nextPage={"/vocation-selection"} />
      </RaceSelectionContainer>
    </>
  );
}
