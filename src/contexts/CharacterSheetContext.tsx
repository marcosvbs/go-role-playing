import { createContext, useCallback, useState } from "react";

interface Equipment {
  name: string;
  cost: number;
  weight: number;
  description: string;
  quantity: number;
}

interface Skill {
  name: string;
  type: string;
  category: string | number | null;
  requirement: string | number | null;
  mana: string | number | null;
  difficulty: string | number | null;
  description: string;
}

interface Consumable {
  name: string;
  weight: number;
  cost: number;
  aura: string;
  quantity: number;
}

interface Armor {
  name: string;
  cost: number;
  defense: number;
  strengthRequired: number;
  observation: string;
}

interface Weapon {
  name: string;
  type: string;
  cost: number;
  damage: string;
  attackType: string;
  strengthRequired: number;
  weight: number;
  range: string;
  observation: string;
}

interface CharacterSheetType {
  name: string;
  race: string;
  vocation: string;
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
  defense: {
    block: number;
    dodge: number;
    determination: number;
  };
  skills: Skill[];
  armor: Armor | null;
  weapons: Weapon[];
  equipments: Equipment[];
  consumables: Consumable[];
}

interface Race {
  name: string;
  attributes: {
    strength: number;
    agility: number;
    intelligence: number;
    will: number;
  };
  automaticSkill: Skill;
}

interface CharacterSheetContextType {
  characterSheet: CharacterSheetType;
  updateCharacterSheetRace: (race: Race) => void;
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
    race: "",
    vocation: "",
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
    defense: {
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

  const updateCharacterSheetRace = useCallback((race: Race) => {
    setCharacterSheet({
      ...characterSheet,
      race: race.name,
      attributes: {
        strength: race.attributes.strength,
        agility: race.attributes.agility,
        intelligence: race.attributes.intelligence,
        will: race.attributes.will,
      },
      skills: [race.automaticSkill],
    });
  }, []);

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
