import { createContext, useState } from "react";

interface Equipment {
  id: number;
  quantity: number;
}

interface Consumable {
  id: number;
  quantity: number;
}

interface CharacterSheetType {
  name: string | null;
  race: string | null | undefined;
  vocation: string | null | undefined;
  level: number;
  basicStatus: {
    life: number;
    mana: number;
    capacity: number;
  };
  attributes: {
    strength: number;
    agility: number;
    intelligence: number;
    will: number;
  };
  defence: {
    block: number;
    dodge: number;
    determination: number;
  };
  skills: number[] | null;
  armor: number | null;
  weapons: number[] | null;
  equipments: Equipment[] | null;
  consumables: Consumable[] | null;
}

interface CharacterSheetContextType {
  characterSheet: CharacterSheetType;
  updateCharacterSheetRace: (updatedCharacterSheet: CharacterSheetType) => void;
}

export const CharacterSheetContext = createContext(
  {} as CharacterSheetContextType
);

export function CharacterSheetContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [characterSheet, setCharacterSheet] = useState<CharacterSheetType>({
    name: "",
    race: null,
    vocation: null,
    level: 1,
    basicStatus: {
      life: 60,
      mana: 60,
      capacity: 100,
    },
    attributes: {
      strength: 0,
      agility: 0,
      intelligence: 0,
      will: 0,
    },
    defence: {
      block: 0,
      dodge: 0,
      determination: 0,
    },
    skills: [],
    armor: null,
    weapons: [],
    equipments: [],
    consumables: [],
  });

  function updateCharacterSheetRace(updatedCharacterSheet: CharacterSheetType) {
    setCharacterSheet({
      ...updatedCharacterSheet,
    });
  }

  return (
    <CharacterSheetContext.Provider
      value={{
        characterSheet,
        updateCharacterSheetRace,
      }}
    >
      {children}
    </CharacterSheetContext.Provider>
  );
}
