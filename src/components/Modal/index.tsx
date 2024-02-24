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
          <button onClick={close} className={"closeButton"}>
            Fechar
          </button>

          <SkillCard skill={skill} />
        </ModalContent>
      </ModalOverlay>
    );
  } else {
    return null;
  }
}
