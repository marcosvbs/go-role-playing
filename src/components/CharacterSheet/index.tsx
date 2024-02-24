import { useContext } from "react";
import { CharacterSheetContainer } from "./styles";
import { CharacterSheetContext } from "../../contexts/CharacterSheetContext";
import { SkillButton } from "../SkillButton";

export function CharacterSheet() {
  const { characterSheet } = useContext(CharacterSheetContext);

  return (
    <CharacterSheetContainer>
      <h4>Ficha do personagem</h4>

      <section className={"BasicInfoSection"}>
        <div className="BasicInfo">
          <span>{characterSheet.race + " " + characterSheet.vocation}</span>
          <span>Nível {characterSheet.level}</span>
        </div>
        <div className="Status">
          <ul>
            <li>
              <span>{characterSheet.basicStatus.life}</span>
              <span>Vida</span>
            </li>
            <li>
              <span>{characterSheet.basicStatus.mana}</span>
              <span>Mana</span>
            </li>
            <li>
              <span>{characterSheet.basicStatus.capacity}</span>
              <span>Capacidade</span>
            </li>
          </ul>
        </div>
      </section>

      <section className={"AttributesSection"}>
        <h5>Atributos</h5>
        <ul>
          <li>
            <span>For</span>
            <span>
              {characterSheet.raceAttributes.strength +
                characterSheet.vocationAttributes.strength}
            </span>

            {characterSheet.vocationAttributes.strength !== 0 ? (
              <span>
                {"(" +
                  characterSheet.raceAttributes.strength +
                  "+" +
                  characterSheet.vocationAttributes.strength +
                  ")"}
              </span>
            ) : (
              <br />
            )}
          </li>
          <li>
            <span>Agi</span>
            <span>
              {characterSheet.raceAttributes.agility +
                characterSheet.vocationAttributes.agility}
            </span>

            {characterSheet.vocationAttributes.agility !== 0 ? (
              <span>
                {"(" +
                  characterSheet.raceAttributes.agility +
                  "+" +
                  characterSheet.vocationAttributes.agility +
                  ")"}
              </span>
            ) : (
              <br />
            )}
          </li>
          <li>
            <span>Int</span>
            <span>
              {characterSheet.raceAttributes.intelligence +
                characterSheet.vocationAttributes.intelligence}
            </span>

            {characterSheet.vocationAttributes.intelligence !== 0 ? (
              <span>
                {"(" +
                  characterSheet.raceAttributes.intelligence +
                  "+" +
                  characterSheet.vocationAttributes.intelligence +
                  ")"}
              </span>
            ) : (
              <br />
            )}
          </li>
          <li>
            <span>Von</span>
            <span>
              {characterSheet.raceAttributes.will +
                characterSheet.vocationAttributes.will}
            </span>

            {characterSheet.vocationAttributes.will !== 0 ? (
              <span>
                {"(" +
                  characterSheet.raceAttributes.will +
                  "+" +
                  characterSheet.vocationAttributes.will +
                  ")"}
              </span>
            ) : (
              <br />
            )}
          </li>
        </ul>
      </section>

      <section className={"DefenceSection"}>
        <h5>Defesa</h5>
        <ul>
          <li>
            <span>{characterSheet.defense.block}</span>
            <span>Bloqueio</span>
          </li>
          <li>
            <span>{characterSheet.defense.dodge}</span>
            <span>Esquiva</span>
          </li>
          <li>
            <span>{characterSheet.defense.determination}</span>
            <span>Determinação</span>
          </li>
        </ul>
      </section>

      <section className={"SkillsSection"}>
        <h5>Habilidades</h5>
        <ul>
          {characterSheet.skills.raceAutomaticSkill ? (
            <li key={characterSheet.skills.raceAutomaticSkill.name}>
              <SkillButton skill={characterSheet.skills.raceAutomaticSkill} />
            </li>
          ) : (
            <></>
          )}
          {characterSheet.skills.vocationAutomaticSkill ? (
            <li key={characterSheet.skills.vocationAutomaticSkill.name}>
              <SkillButton
                skill={characterSheet.skills.vocationAutomaticSkill}
              />
            </li>
          ) : (
            <></>
          )}
          {characterSheet.skills.vocationSkills ? (
            characterSheet.skills.vocationSkills?.map((skill) => (
              <li key={skill.name}>
                <SkillButton skill={skill} />
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      </section>

      <section className={"EquipmentSection"}>
        <h5>Equipamentos</h5>

        <ul>
          {characterSheet.equipments ? (
            characterSheet.equipments?.map((equipment) => (
              <li key={equipment.name}>
                <span>{equipment.name}</span>
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      </section>

      <section className={"armorSection"}>
        <h5>Armadura</h5>

        <ul>
          {characterSheet.armor ? (
            <li key={characterSheet.armor.name}>
              <span>{characterSheet.armor.name}</span>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </section>

      <section className={"WeaponsSection"}>
        <h5>Armas</h5>

        <ul>
          {characterSheet.weapons ? (
            characterSheet.weapons?.map((weapon) => (
              <li key={weapon.name}>
                <span>{weapon.name}</span>
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      </section>
    </CharacterSheetContainer>
  );
}
