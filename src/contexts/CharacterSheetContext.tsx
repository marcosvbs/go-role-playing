import { createContext, useState } from "react";

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
  category: string | null;
  requirement: string | null;
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
  raceAttributes: {
    strength: number;
    agility: number;
    intelligence: number;
    will: number;
  };
  vocationAttributes: {
    strength: number;
    agility: number;
    intelligence: number;
    will: number;
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
  skills: {
    raceAutomaticSkill: Skill | null;
    vocationAutomaticSkill: Skill | null;
    vocationSkills: Skill[];
  };
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

interface Vocation {
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
  updateCharacterSheetVocation: (vocation: Vocation) => void;
  updateCharacterSheetSkills: (skills: Skill[]) => void;
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
    raceAttributes: {
      strength: 0,
      agility: 0,
      intelligence: 0,
      will: 0,
    },
    vocationAttributes: {
      strength: 0,
      agility: 0,
      intelligence: 0,
      will: 0,
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
    skills: {
      raceAutomaticSkill: null,
      vocationAutomaticSkill: null,
      vocationSkills: [],
    },
    armor: null,
    weapons: [],
    equipments: [],
    consumables: [],
  });

  function updateCharacterSheetRace(race: Race) {
    setCharacterSheet((prevCharacterSheet) => ({
      ...prevCharacterSheet,
      race: race.name,
      raceAttributes: {
        strength: race.attributes.strength,
        agility: race.attributes.agility,
        intelligence: race.attributes.intelligence,
        will: race.attributes.will,
      },
      skills: {
        raceAutomaticSkill: race.automaticSkill,
        vocationAutomaticSkill:
          prevCharacterSheet.skills.vocationAutomaticSkill,
        vocationSkills: prevCharacterSheet.skills.vocationSkills,
      },
    }));

    updateCharacterSheetAttributes();
  }

  function updateCharacterSheetVocation(vocation: Vocation) {
    setCharacterSheet((prevCharacterSheet) => ({
      ...prevCharacterSheet,
      vocation: vocation.name,
      vocationAttributes: {
        strength: vocation.attributes.strength,
        agility: vocation.attributes.agility,
        intelligence: vocation.attributes.intelligence,
        will: vocation.attributes.will,
      },
      skills: {
        raceAutomaticSkill: prevCharacterSheet.skills.raceAutomaticSkill,
        vocationAutomaticSkill: vocation.automaticSkill,
        vocationSkills: prevCharacterSheet.skills.vocationSkills,
      },
    }));

    updateCharacterSheetAttributes();
  }

  function updateCharacterSheetAttributes() {
    setCharacterSheet((prevCharacterSheet) => ({
      ...prevCharacterSheet,
      attributes: {
        strength:
          prevCharacterSheet.raceAttributes.strength +
          prevCharacterSheet.vocationAttributes.strength,
        agility:
          prevCharacterSheet.raceAttributes.agility +
          prevCharacterSheet.vocationAttributes.agility,
        intelligence:
          prevCharacterSheet.raceAttributes.intelligence +
          prevCharacterSheet.vocationAttributes.intelligence,
        will:
          prevCharacterSheet.raceAttributes.will +
          prevCharacterSheet.vocationAttributes.will,
      },
    }));
  }

  function updateCharacterSheetSkills(skills: Skill[]) {
    setCharacterSheet((prevCharacterSheet) => ({
      ...prevCharacterSheet,
      skills: {
        ...prevCharacterSheet.skills,
        vocationSkills: skills,
      },
    }));
  }

  return (
    <CharacterSheetContext.Provider
      value={{
        characterSheet,
        updateCharacterSheetRace,
        updateCharacterSheetVocation,
        updateCharacterSheetSkills,
      }}
    >
      {children}
    </CharacterSheetContext.Provider>
  );
}
