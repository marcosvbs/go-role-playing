import { CharacterSheet } from "../../components/CharacterSheet";
import { Header } from "../../components/Header";
import { NavigationBar } from "../../components/NavigationBar";
import {
  SkillsOptions,
  SkillsSelectionBody,
  SkillsSelectionContainer,
  SkillsSelectionForm,
} from "./styles";

import { skills } from "../../data/skills.json";
import { useContext, useEffect, useState } from "react";
import { StepsSelectionContext } from "../../contexts/StepsSelectionContext";
import { CharacterSheetContext } from "../../contexts/CharacterSheetContext";
import { SkillButton } from "../../components/SkillButton";

interface Skill {
  id: number;
  name: string;
  type: string;
  category: string | null;
  requirement: string | null;
  mana: string | number | null;
  difficulty: string | number | null;
  description: string;
}

export function SkillsSelection() {
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);

  const maxNumberOfSelectedSkills = 3;

  const { selectedVocationId } = useContext(StepsSelectionContext);
  const { updateCharacterSheetSkills } = useContext(CharacterSheetContext);

  const vocationSkills = skills.filter(
    (vocationSkills) =>
      vocationSkills.associations.vocationId === selectedVocationId &&
      vocationSkills.id > 11
  );

  function checkIfSkillIsSelected(skillId: number) {
    const isSelected = selectedSkills.some((skill) => skill.id === skillId);

    return isSelected;
  }

  function handleSelectSkill(skillId: number) {
    if (!checkIfSkillIsSelected(skillId)) {
      if (selectedSkills.length < maxNumberOfSelectedSkills) {
        const [newSelectedSkill] = vocationSkills.filter(
          (vocationSkill) => vocationSkill.id === skillId
        );

        const updatedSelectedSkills = [...selectedSkills, newSelectedSkill];

        setSelectedSkills(updatedSelectedSkills);

        updateCharacterSheetSkills(
          updatedSelectedSkills.filter((updatedSelectedSkill) => {
            return {
              name: updatedSelectedSkill.name,
              type: updatedSelectedSkill.type,
              category: updatedSelectedSkill.category,
              requirement: updatedSelectedSkill.requirement,
              mana: updatedSelectedSkill.mana,
              difficulty: updatedSelectedSkill.difficulty,
              description: updatedSelectedSkill.description,
            };
          })
        );
      }
    } else {
      const updatedSelectedSkills = selectedSkills.filter(
        (selectedSkill) => selectedSkill.id != skillId
      );

      setSelectedSkills(updatedSelectedSkills);

      updateCharacterSheetSkills(
        updatedSelectedSkills.filter((updatedSelectedSkill) => {
          return {
            name: updatedSelectedSkill.name,
            type: updatedSelectedSkill.type,
            category: updatedSelectedSkill.category,
            requirement: updatedSelectedSkill.requirement,
            mana: updatedSelectedSkill.mana,
            difficulty: updatedSelectedSkill.difficulty,
            description: updatedSelectedSkill.description,
          };
        })
      );
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <SkillsSelectionContainer>
        <h3>Passo 3: Escolha suas habilidades</h3>

        <SkillsSelectionBody>
          <SkillsSelectionForm>
            <SkillsOptions>
              <h5>Escolha até 3 habilidades:</h5>

              {vocationSkills.map((skill) => (
                <div className={"optionContainer"} key={skill.id}>
                  <div className={"option"}>
                    <input
                      type={"checkbox"}
                      id={skill.name}
                      name={"skill"}
                      value={skill.name}
                      checked={checkIfSkillIsSelected(skill.id)}
                      disabled={
                        !checkIfSkillIsSelected(skill.id) &&
                        selectedSkills.length >= maxNumberOfSelectedSkills
                      }
                      onChange={() => {
                        handleSelectSkill(skill.id);
                      }}
                    />
                    <label htmlFor={skill.name}>{skill.name}</label>
                  </div>

                  <SkillButton skill={skill} altLabel={"Ver detalhes"} />
                </div>
              ))}
            </SkillsOptions>
          </SkillsSelectionForm>

          <div className="characterSheetContainer">
            <CharacterSheet />
          </div>
        </SkillsSelectionBody>
      </SkillsSelectionContainer>

      <NavigationBar
        previousPage={"/vocation-selection"}
        nextPage={"/vocation-selection"}
      />
    </>
  );
}
