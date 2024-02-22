import styled from "styled-components";

export const CharacterSheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 50%;

  max-width: 50%;

  padding: 1.5rem;

  border: 1px solid ${(props) => props.theme["low-opacity-gray"]};
  border-radius: 4px;

  background-color: ${(props) => props.theme["gray-600"]};

  h5 {
    padding-bottom: 1rem;
    text-align: center;
  }

  .BasicInfoSection {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .BasicInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      gap: 1rem;

      margin: 0 0 1rem 0;
      padding: 1rem;
      background-color: ${(props) => props.theme.black};

      border-radius: 4px;
    }

    .Status ul {
      display: flex;
      flex-direction: row;

      justify-content: space-evenly;

      list-style: none;

      background-color: ${(props) => props.theme.black};
    }

    .Status ul li {
      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 0.5rem;
    }
  }

  .AttributesSection ul,
  .DefenceSection ul {
    display: flex;
    flex-direction: row;

    justify-content: space-evenly;

    list-style: none;
  }

  .AttributesSection li,
  .DefenceSection li {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 0.5rem;
  }

  .BasicInfo,
  .Status,
  .AttributesSection,
  .DefenceSection,
  .SkillsSection,
  .EquipmentSection,
  .armorSection,
  .WeaponsSection {
    width: 100%;

    padding: 1rem;

    background-color: ${(props) => props.theme.black};
    border-radius: 4px;
  }

  .SkillsSection {
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      padding: 0.5rem;
      color: ${(props) => props.theme.white};
    }

    ul li {
      list-style: none;
    }

    ul li button {
      text-transform: none;
      text-decoration: underline;
      background: none;
      border: none;

      cursor: pointer;

      padding: 0.5rem;

      color: ${(props) => props.theme.white};

      &:hover {
        color: ${(props) => props.theme["green-300"]};
      }
    }
  }

  .EquipmentSection,
  .armorSection,
  .WeaponsSection {
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      padding: 0.5rem;
      color: ${(props) => props.theme.white};
    }

    ul li {
      list-style: none;
    }

    ul li span {
      color: ${(props) => props.theme.white};
    }
  }
`;
