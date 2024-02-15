import { useContext } from "react";
import { CharacterSheetContainer } from "./styles";
import { CharacterSheetContext } from "../../contexts/CharacterSheetContext";

export function CharacterSheet() {
  const { characterSheet } = useContext(CharacterSheetContext);

  return (
    <CharacterSheetContainer>
      <h4>Ficha do personagem</h4>

      <section className={"BasicInfoSection"}>
        <div className="BasicInfo">
          <span>
            {characterSheet.race} - {characterSheet.vocation}
          </span>
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
            <span>
              {characterSheet.raceAttributes.strength +
                characterSheet.vocationAttributes.strength}
            </span>
            <span>
              {"(" +
                characterSheet.raceAttributes.strength +
                "+" +
                characterSheet.vocationAttributes.strength +
                ")"}
            </span>
            <span>Força</span>
          </li>
          <li>
            <span>
              {characterSheet.raceAttributes.agility +
                characterSheet.vocationAttributes.agility}
            </span>
            <span>
              {"(" +
                characterSheet.raceAttributes.agility +
                "+" +
                characterSheet.vocationAttributes.agility +
                ")"}
            </span>
            <span>Agilidade</span>
          </li>
          <li>
            <span>
              {characterSheet.raceAttributes.intelligence +
                characterSheet.vocationAttributes.intelligence}
            </span>
            <span>
              {"(" +
                characterSheet.raceAttributes.intelligence +
                "+" +
                characterSheet.vocationAttributes.intelligence +
                ")"}
            </span>
            <span>Inteligencia</span>
          </li>
          <li>
            <span>
              {characterSheet.raceAttributes.will +
                characterSheet.vocationAttributes.will}
            </span>
            <span>
              {"(" +
                characterSheet.raceAttributes.will +
                "+" +
                characterSheet.vocationAttributes.will +
                ")"}
            </span>
            <span>Vontade</span>
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
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo - Categoria</th>
              <th>Requer</th>
              <th>Mana</th>
              <th>Dificuldade</th>
            </tr>
          </thead>
          <tbody>
            {characterSheet.skills.raceAutomaticSkill ? (
              <tr key={characterSheet.skills.raceAutomaticSkill.name}>
                <td>{characterSheet.skills.raceAutomaticSkill.name}</td>
                <td>
                  {characterSheet.skills.raceAutomaticSkill.type} -{" "}
                  {characterSheet.skills.raceAutomaticSkill.category}
                </td>
                <td>
                  {characterSheet.skills.raceAutomaticSkill.requirement
                    ? characterSheet.skills.raceAutomaticSkill.requirement
                    : "-"}
                </td>
                <td>
                  {characterSheet.skills.raceAutomaticSkill.mana
                    ? characterSheet.skills.raceAutomaticSkill.mana
                    : "-"}
                </td>
                <td>
                  {characterSheet.skills.raceAutomaticSkill.difficulty
                    ? characterSheet.skills.raceAutomaticSkill.difficulty
                    : "-"}
                </td>
              </tr>
            ) : (
              <></>
            )}
            {characterSheet.skills.vocationAutomaticSkill ? (
              <tr key={characterSheet.skills.vocationAutomaticSkill.name}>
                <td>{characterSheet.skills.vocationAutomaticSkill.name}</td>
                <td>
                  {characterSheet.skills.vocationAutomaticSkill.type} -{" "}
                  {characterSheet.skills.vocationAutomaticSkill.category}
                </td>
                <td>
                  {characterSheet.skills.vocationAutomaticSkill.requirement
                    ? characterSheet.skills.vocationAutomaticSkill.requirement
                    : "-"}
                </td>
                <td>
                  {characterSheet.skills.vocationAutomaticSkill.mana
                    ? characterSheet.skills.vocationAutomaticSkill.mana
                    : "-"}
                </td>
                <td>
                  {characterSheet.skills.vocationAutomaticSkill.difficulty
                    ? characterSheet.skills.vocationAutomaticSkill.difficulty
                    : "-"}
                </td>
              </tr>
            ) : (
              <></>
            )}
            {characterSheet.skills.vocationSkills ? (
              characterSheet.skills.vocationSkills?.map((skill) => (
                <tr key={skill.name}>
                  <td>{skill.name}</td>
                  <td>
                    {skill.type} - {skill.category}
                  </td>
                  <td>{skill.requirement ? skill.requirement : "-"}</td>
                  <td>{skill.mana ? skill.mana : "-"}</td>
                  <td>{skill.difficulty ? skill.difficulty : "-"}</td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </section>

      <section className={"EquipmentSection"}>
        <h5>Equipamentos</h5>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Custo</th>
              <th>Peso</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {characterSheet.equipments ? (
              characterSheet.equipments?.map((equipment) => (
                <tr key={equipment.name}>
                  <td>{equipment.name}</td>
                  <td>{equipment.cost}</td>
                  <td>{equipment.weight}</td>
                  <td>{equipment.description}</td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </section>

      <section className={"ClassSection"}>
        <h5>Armadura</h5>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Custo</th>
              <th>Defesa</th>
              <th>Força necessária</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            {characterSheet.armor ? (
              <tr key={characterSheet.armor.name}>
                <td>{characterSheet.armor.name}</td>
                <td>{characterSheet.armor.cost}</td>
                <td>{characterSheet.armor.defense}</td>
                <td>{characterSheet.armor.strengthRequired}</td>
                <td>{characterSheet.armor.observation}</td>
              </tr>
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </section>

      <section className={"WeaponsSection"}>
        <h5>Armas</h5>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Custo</th>
              <th>Força necessária</th>
              <th>Peso</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            {characterSheet.weapons ? (
              characterSheet.weapons?.map((weapon) => (
                <tr key={weapon.name}>
                  <td>{weapon.name}</td>
                  <td>{weapon.cost}</td>
                  <td>{weapon.strengthRequired}</td>
                  <td>{weapon.weight}</td>
                  <td>{weapon.observation}</td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </section>
    </CharacterSheetContainer>
  );
}
