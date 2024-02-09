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
            <span>{characterSheet.attributes.strength}</span>
            <span>Força</span>
          </li>
          <li>
            <span>{characterSheet.attributes.agility}</span>
            <span>Agilidade</span>
          </li>
          <li>
            <span>{characterSheet.attributes.intelligence}</span>
            <span>Inteligencia</span>
          </li>
          <li>
            <span>{characterSheet.attributes.will}</span>
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
            {characterSheet.skills ? (
              characterSheet.skills?.map((skill) => (
                <tr key={skill.name}>
                  <td>{skill.name}</td>
                  <td>
                    {skill.type} - {skill.category}
                  </td>
                  <td>{skill.requirement}</td>
                  <td>{skill.mana}</td>
                  <td>{skill.difficulty}</td>
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
              <tr>
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
