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
            <span>{characterSheet.defence.block}</span>
            <span>Bloqueio</span>
          </li>
          <li>
            <span>{characterSheet.defence.dodge}</span>
            <span>Esquiva</span>
          </li>
          <li>
            <span>{characterSheet.defence.determination}</span>
            <span>Determinação</span>
          </li>
        </ul>
      </section>

      <section className={"SkillsSection"}>
        <h5>Habilidades</h5>
        <table>
          <tr>
            <th>Nome</th>
            <th>Tipo - Categoria</th>
            <th>Requer</th>
            <th>Mana</th>
            <th>Dificuldade</th>
            {/* <th>Descrição</th> */}
          </tr>
          <tr>
            <td>Coração da Montanha</td>
            <td>Suporte - Habilidade (Característica)</td>
            <td>nenhum</td>
            <td>0</td>
            <td>nenhuma</td>
            {/* <td>
              Sua constituição foi forjada nos subterrâneos agrestes e
              impiedosos, onde apenas os mais resistentes conseguem sobreviver.
              Você é imune a todos os venenos naturais e mágicos e rola +1d6 em
              testes para resistir à fadiga, doenças e quaisquer outros efeitos
              físicos. Além disso, sua Carga é calculada como se você tivesse
              Força +2.
            </td> */}
          </tr>
        </table>
      </section>

      <section className={"EquipmentSection"}>
        <h5>Equipamentos</h5>
        <table>
          <tr>
            <th>Nome</th>
            <th>Custo</th>
            <th>Peso</th>
            <th>Descrição</th>
          </tr>
          <tr>
            <td>Alforge</td>
            <td>50</td>
            <td>1</td>
            <td>
              Mochila acoplada na parte de traz na sela da montaria. Comporta
              até 40 quilos de equipamento.
            </td>
          </tr>
        </table>
      </section>

      <section className={"ClassSection"}>
        <h5>Armadura</h5>
        <table>
          <tr>
            <th>Nome</th>
            <th>Custo</th>
            <th>Defesa</th>
            <th>Força necessária</th>
            <th>Observações</th>
          </tr>
          <tr>
            <td>Armadura de Couro</td>
            <td>100</td>
            <td>2</td>
            <td>2</td>
            <td>Pesada</td>
          </tr>
        </table>
      </section>

      <section className={"WeaponsSection"}>
        <h5>Armas</h5>
        <table>
          <tr>
            <th>Nome</th>
            <th>Custo</th>
            <th>Força necessária</th>
            <th>Peso</th>
            <th>Observações</th>
          </tr>
          <tr>
            <td>Cetro</td>
            <td>75</td>
            <td>3</td>
            <td>1.5</td>
            <td>
              Cetros são simplesmente clavas sintonizadas a um conjurador
              através de sua runa pessoal. Canalizador, Cerne Arcano, Cerne
              Místico, Registro
            </td>
          </tr>
        </table>
      </section>
    </CharacterSheetContainer>
  );
}
