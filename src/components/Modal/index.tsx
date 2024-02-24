import { SkillCard } from "../SkillCard";
import { ModalContent, ModalOverlay } from "./styles";

interface ModalProps {
  isOpen: boolean;
  skill: {
    name: string;
    description: string;
    category: string | null;
    type: string;
    mana: string | number | null;
    difficulty: string | number | null;
    requirement: string | null;
  };
  close: () => void;
}

export function Modal({ isOpen, skill, close }: ModalProps) {
  if (isOpen) {
    return (
      <ModalOverlay onClick={close}>
        <ModalContent>
          <div></div>

          <button onClick={close} className={"closeButton"}>
            X
          </button>

          <SkillCard skill={skill} />
          <div></div>
        </ModalContent>
      </ModalOverlay>
    );
  } else {
    return null;
  }
}
