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
import { StepsSelectionContext } from "../../contexts/StepsSelectionContext";
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

  const { selectedVocationId, updateSelectedVocationId } = useContext(
    StepsSelectionContext
  );

  function getVocation(vocationId: number) {
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
    getVocation(selectedVocationId)
  );

  function handleSelectVocation(vocationId: number) {
    const vocation = getVocation(vocationId);
    setSelectedVocation(vocation);

    updateCharacterSheetVocation({
      name: vocation.name,
      attributes: {
        strength: vocation.attributesBonus.strength,
        agility: vocation.attributesBonus.agility,
        intelligence: vocation.attributesBonus.intelligence,
        will: vocation.attributesBonus.will,
      },
      automaticSkill: vocation.automaticSkill,
    });

    updateSelectedVocationId(vocationId);
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    handleSelectVocation(selectedVocationId);
  }, []);

  return (
    <>
      <Header />

      <VocationSelectionContainer>
        <h3>Passo 2: Escolha sua classe</h3>

        <VocationSelectionBody>
          <VocationSelectionForm>
            <VocationOptions>
              {avaliableVocations ? (
                avaliableVocations.map((vocation) => {
                  return (
                    <div className={"optionContainer"} key={vocation.id}>
                      <div className={"option"}>
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

                {selectedVocation.attributesBonus.strength !== 0 ? (
                  <p>{"Força +" + selectedVocation.attributesBonus.strength}</p>
                ) : (
                  <></>
                )}

                {selectedVocation.attributesBonus.agility !== 0 ? (
                  <p>
                    {"Agilidade +" + selectedVocation.attributesBonus.agility}
                  </p>
                ) : (
                  <></>
                )}

                {selectedVocation.attributesBonus.intelligence !== 0 ? (
                  <p>
                    {"Inteligencia +" +
                      selectedVocation.attributesBonus.intelligence}
                  </p>
                ) : (
                  <></>
                )}

                {selectedVocation.attributesBonus.will !== 0 ? (
                  <p>{"Vontade +" + selectedVocation.attributesBonus.will}</p>
                ) : (
                  <></>
                )}
              </section>

              <section className={"infoSection"}>
                <h5>Habilidade Automática</h5>
                <SkillCard skill={selectedVocation.automaticSkill} />
              </section>
            </SelectedVocationInfo>
          </VocationSelectionForm>

          <div className="characterSheetContainer">
            <CharacterSheet />
          </div>
        </VocationSelectionBody>
      </VocationSelectionContainer>

      <NavigationBar
        previousPage={"/race-selection"}
        nextPage={"/skills-selection"}
      />
    </>
  );
}
