import styled from "styled-components";

export const RaceSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  max-width: 880px;

  margin-top: 4rem;

  h3 {
    margin-bottom: 2.5rem;
  }
`;

export const RaceSelectionBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 1rem;
`;

export const RaceSelectionForm = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RaceOptions = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;

  padding: 2rem;

  border: 1px solid ${(props) => props.theme["low-opacity-gray"]};
  border-radius: 4px;
  background-color: ${(props) => props.theme["gray-600"]};

  .option {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    cursor: pointer;

    input {
      padding: 0.5rem;
      cursor: pointer;
    }

    label {
      padding: 0.5rem;
      cursor: pointer;
    }
  }
`;
export const SelectedRaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem;

  border: 1px solid ${(props) => props.theme["low-opacity-gray"]};
  border-radius: 4px;
  background-color: ${(props) => props.theme["gray-600"]};

  .titleSection {
    display: flex;
  }

  .infoSection {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  p {
    color: ${(props) => props.theme["gray-400"]};
  }
`;
