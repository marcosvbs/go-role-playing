import { useState } from "react";
import { SkillButtonContainer } from "./styles";
import { Modal } from "../Modal";

interface SkillButtonProps {
  skill: {
    name: string;
    description: string;
    category: string | null;
    type: string;
    mana: string | number | null;
    difficulty: string | number | null;
    requirement: string | null;
  };
  altLabel?: string;
}

export function SkillButton({ skill, altLabel }: SkillButtonProps) {
  const [openDetails, setOpenDetails] = useState(false);

  function handleOpenModal() {
    setOpenDetails(true);
  }

  function handleCloseModal() {
    setOpenDetails(false);
  }

  return (
    <SkillButtonContainer>
      <button
        type={"button"}
        className={"openSkillDetailsButton"}
        onClick={handleOpenModal}
      >
        {altLabel ? altLabel : skill.name}
      </button>

      <Modal isOpen={openDetails} skill={skill} close={handleCloseModal} />
    </SkillButtonContainer>
  );
}
