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
import { skills } from "../../data/skills.json";
import { SkillCard } from "../../components/SkillCard";
import { useCallback, useContext, useEffect, useState } from "react";
import { CharacterSheetContext } from "../../contexts/CharacterSheetContext";

interface Skill {
  name: string;
  type: string;
  category: string | null;
  requirement: string | null;
  mana: string | number | null;
  difficulty: string | number | null;
  description: string;
}
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
  automaticSkill: Skill;
}

export function RaceSelection() {
  const avaliableRaces = races;
  const racesAutomaticSkills = skills.filter(
    (skill) => skill.associations.raceId !== null
  );

  const { updateCharacterSheetRace } = useContext(CharacterSheetContext);

  const defaultSelectedRaceId = 0;

  const selectRace = useCallback(
    (raceId: number) => {
      const [race] = avaliableRaces.filter((race) => race.id === raceId);
      const [raceAutomaticSkill] = racesAutomaticSkills.filter(
        (skill) => race.id === skill.associations.raceId
      );

      return {
        id: race.id,
        name: race.name,
        biology: race.biology,
        culture: race.culture,
        attributes: {
          strength: race.attributes.strength,
          agility: race.attributes.agility,
          intelligence: race.attributes.intelligence,
          will: race.attributes.will,
        },
        automaticSkill: {
          name: raceAutomaticSkill.name,
          type: raceAutomaticSkill.type,
          category: raceAutomaticSkill.category,
          requirement: raceAutomaticSkill.requirement,
          mana: raceAutomaticSkill.mana,
          difficulty: raceAutomaticSkill.difficulty,
          description: raceAutomaticSkill.description,
        },
      };
    },
    [avaliableRaces, racesAutomaticSkills]
  );

  const [selectedRace, setSelectedRace] = useState<Race>(
    selectRace(defaultSelectedRaceId)
  );

  function handleSelectRace(raceId: number) {
    setSelectedRace(selectRace(raceId));
  }

  useEffect(() => {
    updateCharacterSheetRace({
      name: selectedRace.name,
      attributes: {
        strength: selectedRace.attributes.strength,
        agility: selectedRace.attributes.agility,
        intelligence: selectedRace.attributes.intelligence,
        will: selectedRace.attributes.will,
      },
      automaticSkill: selectedRace.automaticSkill,
    });
  }, [selectedRace, updateCharacterSheetRace]);

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
                        checked={race.id === selectedRace.id}
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
                  name={selectedRace.automaticSkill.name}
                  description={selectedRace.automaticSkill.description}
                  category={selectedRace.automaticSkill.category}
                  type={selectedRace.automaticSkill.type}
                  mana={selectedRace.automaticSkill.mana}
                  difficulty={selectedRace.automaticSkill.difficulty}
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
