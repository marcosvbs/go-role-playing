import styled from "styled-components";

export const CharacterSheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 50%;

  padding: 1.5rem;

  border: 1px solid ${(props) => props.theme["low-opacity-gray"]};
  border-radius: 4px;

  background-color: ${(props) => props.theme["gray-600"]};

  h5 {
    padding-bottom: 1rem;
  }

  .BasicInfoSection {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .BasicInfo {
      display: flex;
      flex-direction: row;
      justify-content: center;

      gap: 1rem;

      margin: 1rem 0;
      padding: 0.5rem;
      background-color: ${(props) => props.theme.black};

      border-radius: 4px;
    }

    .Status ul {
      display: flex;
      flex-direction: row;

      justify-content: space-evenly;

      list-style: none;
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

  .SkillsSection,
  .EquipmentSection,
  .ClassSection,
  .WeaponsSection {
    padding: 1rem;

    background-color: ${(props) => props.theme.black};

    border-radius: 4px;

    table {
      border-collapse: collapse;

      width: 100%;
    }

    th {
      padding: 0.5rem;

      font-size: 0.625rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.white};

      border: 1px solid;
    }

    td {
      max-width: 24px;

      padding: 0.5rem;

      font-size: 0.625rem;
      color: ${(props) => props.theme.white};

      border: 1px solid;

      overflow: hidden;

      height: 24px;

      /* overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis; */
    }
  }
`;
