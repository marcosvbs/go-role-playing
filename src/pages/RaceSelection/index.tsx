import { CharacterSheet } from "../../components/CharacterSheet";
import { Header } from "../../components/Header";
import { NavigationBar } from "../../components/NavigationBar";
import {
  RaceOptions,
  RaceSelectionBody,
  RaceSelectionContainer,
  RaceSelectionForm,
  SelectedRaceInfo,
} from "./styles";
import { races } from "../../data/races.json";
import { SkillCard } from "../../components/SkillCard";
import { useCallback, useContext, useEffect, useState } from "react";
import { CharacterSheetContext } from "../../contexts/CharacterSheetContext";

interface Race {
  id: number;
  name: string;
  biology: string;
  culture: string;
  attributes: {
    strength: number;
    agility: number;
    intelligence: number;
    will: number;
  };
  automaticSkillId: number;
}

export function RaceSelection() {
  const avaliableRaces = races;
  const defaultSelectedRaceId = 0;

  const { characterSheet, updateCharacterSheetRace } = useContext(
    CharacterSheetContext
  );

  const [selectedRaceId, setSelectedRaceId] = useState(0);

  const getSelectedRace = useCallback(
    (raceId: number) => {
      const selectedRace = avaliableRaces.filter((race) => race.id === raceId);
      return selectedRace[0];
    },
    [avaliableRaces]
  );

  const [selectedRace, setSelectedRace] = useState<Race>(
    getSelectedRace(defaultSelectedRaceId)
  );

  function handleSelectRace(raceId: number) {
    setSelectedRaceId(raceId);

    updateCharacterSheetRace({
      name: selectedRace.name,
      attributes: {
        strength: selectedRace.attributes.strength,
        agility: selectedRace.attributes.agility,
        intelligence: selectedRace.attributes.intelligence,
        will: selectedRace.attributes.will,
      },
      automaticSkillId: selectedRace.automaticSkillId,
    });
  }

  useEffect(() => {
    setSelectedRace(() => getSelectedRace(selectedRaceId));
  }, [selectedRaceId, getSelectedRace]);

  return (
    <>
      <Header />

      <RaceSelectionContainer>
        <h3>Passo 1: Escolha sua raça</h3>

        <RaceSelectionBody>
          <RaceSelectionForm>
            <RaceOptions>
              {avaliableRaces ? (
                avaliableRaces.map((race) => {
                  return (
                    <div className={"option"} key={race.id}>
                      <input
                        type={"radio"}
                        id={race.name}
                        name={"races"}
                        value={race.name}
                        checked={race.id === selectedRaceId}
                        onChange={() => {
                          handleSelectRace(race.id);
                        }}
                      />
                      <label htmlFor={race.name}>{race.name}</label>
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </RaceOptions>

            <SelectedRaceInfo>
              <div className={"titleSection"}>
                <h4>{selectedRace.name}</h4>
              </div>

              <section className={"infoSection"}>
                <h5>Biologia</h5>
                <p>{selectedRace.biology}</p>
              </section>

              <section className={"infoSection"}>
                <h5>Cultura</h5>
                <p>{selectedRace.culture}</p>
              </section>

              <section className={"infoSection"}>
                <h5>Habilidade Automática</h5>
                <SkillCard
                  name={"Tanto faz 1"}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit quis diam pulvinar malesuada. Vivamus hendrerit luctus gravida. Pellentesque non sapien nibh. Duis sodales ultricies turpis nec egestas."
                  }
                  category={"nenhuma"}
                  type={"nenhuma"}
                  mana={0}
                  difficulty={0}
                />
              </section>
            </SelectedRaceInfo>
          </RaceSelectionForm>

          <CharacterSheet />
        </RaceSelectionBody>
      </RaceSelectionContainer>

      <NavigationBar previousPage={"/"} nextPage={"/vocation-selection"} />
    </>
  );
}
