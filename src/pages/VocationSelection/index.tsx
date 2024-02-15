import { CharacterSheet } from "../../components/CharacterSheet";
import { Header } from "../../components/Header";
import { NavigationBar } from "../../components/NavigationBar";
import {
  SelectedVocationInfo,
  VocationOptions,
  VocationSelectionBody,
  VocationSelectionContainer,
  VocationSelectionForm,
} from "./styles";
import { vocations } from "../../data/vocations.json";
import { skills } from "../../data/skills.json";
import { useContext, useEffect, useState } from "react";
import { SkillCard } from "../../components/SkillCard";
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

interface Vocation {
  id: number;
  name: string;
  description: string;
  attributesBonus: {
    strength: number;
    agility: number;
    intelligence: number;
    will: number;
  };
  automaticSkill: Skill;
}

export function VocationSelection() {
  const avaliableVocations = vocations;
  const vocationsAutomaticSkills = skills.filter(
    (skill) => skill.associations.vocationId !== null
  );

  const { updateCharacterSheetVocation } = useContext(CharacterSheetContext);

  const defaultSelectedVocationId = 0;

  function selectVocation(vocationId: number) {
    const [vocation] = avaliableVocations.filter(
      (vocation) => vocation.id === vocationId
    );
    const [vocationAutomaticSkill] = vocationsAutomaticSkills.filter(
      (skill) => vocation.id === skill.associations.vocationId
    );

    return {
      id: vocation.id,
      name: vocation.name,
      description: vocation.description,
      attributesBonus: {
        strength: vocation.attributeBonus.strength,
        agility: vocation.attributeBonus.agility,
        intelligence: vocation.attributeBonus.intelligence,
        will: vocation.attributeBonus.will,
      },
      automaticSkill: {
        name: vocationAutomaticSkill.name,
        type: vocationAutomaticSkill.type,
        category: vocationAutomaticSkill.category,
        requirement: vocationAutomaticSkill.requirement,
        mana: vocationAutomaticSkill.mana,
        difficulty: vocationAutomaticSkill.difficulty,
        description: vocationAutomaticSkill.description,
      },
    };
  }

  const [selectedVocation, setSelectedVocation] = useState<Vocation>(
    selectVocation(defaultSelectedVocationId)
  );

  function handleSelectVocation(vocationId: number) {
    setSelectedVocation(selectVocation(vocationId));
  }

  useEffect(() => {
    updateCharacterSheetVocation({
      name: selectedVocation.name,
      attributes: {
        strength: selectedVocation.attributesBonus.strength,
        agility: selectedVocation.attributesBonus.agility,
        intelligence: selectedVocation.attributesBonus.intelligence,
        will: selectedVocation.attributesBonus.will,
      },
      automaticSkill: selectedVocation.automaticSkill,
    });
  }, [selectedVocation]);

  return (
    <>
      <Header />

      <VocationSelectionContainer>
        <h3>Passo 1: Escolha sua classe</h3>

        <VocationSelectionBody>
          <VocationSelectionForm>
            <VocationOptions>
              {avaliableVocations ? (
                avaliableVocations.map((vocation) => {
                  return (
                    <div className={"option"} key={vocation.id}>
                      <input
                        type={"radio"}
                        id={vocation.name}
                        name={"vocations"}
                        value={vocation.name}
                        checked={vocation.id === selectedVocation.id}
                        onChange={() => {
                          handleSelectVocation(vocation.id);
                        }}
                      />
                      <label htmlFor={vocation.name}>{vocation.name}</label>
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </VocationOptions>

            <SelectedVocationInfo>
              <div className={"titleSection"}>
                <h4>{selectedVocation.name}</h4>
              </div>

              <section className={"infoSection"}>
                <h5>Descrição</h5>
                <p>{selectedVocation.description}</p>
              </section>

              <section className={"infoSection"}>
                <h5>Bonus de atributos</h5>
                <p>Força +{selectedVocation.attributesBonus.strength}</p>
                <p>Agilidade +{selectedVocation.attributesBonus.agility}</p>
                <p>
                  Inteligencia +{selectedVocation.attributesBonus.intelligence}
                </p>
                <p>Vontade +{selectedVocation.attributesBonus.will}</p>
              </section>

              <section className={"infoSection"}>
                <h5>Habilidade Automática</h5>
                <SkillCard
                  name={selectedVocation.automaticSkill.name}
                  description={selectedVocation.automaticSkill.description}
                  category={selectedVocation.automaticSkill.category}
                  type={selectedVocation.automaticSkill.type}
                  mana={selectedVocation.automaticSkill.mana}
                  difficulty={selectedVocation.automaticSkill.difficulty}
                />
              </section>
            </SelectedVocationInfo>
          </VocationSelectionForm>

          <CharacterSheet />
        </VocationSelectionBody>
      </VocationSelectionContainer>

      <NavigationBar previousPage={"/race-selection"} nextPage={"/"} />
    </>
  );
}
