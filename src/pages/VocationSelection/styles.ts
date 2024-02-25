import styled from "styled-components";

export const VocationSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  max-width: 880px;

  margin-top: 4rem;

  h3 {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 425px) {
    margin: 0;
    padding: 0 1rem;
    max-width: 100%;
    width: 100vw;

    h3 {
      margin: 2rem 0 1rem;
    }
  }
`;

export const VocationSelectionBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 1rem;

  .characterSheetContainer {
    width: 50%;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;

    .characterSheetContainer {
      display: none;
    }
  }
`;

export const VocationSelectionForm = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 425px) {
    max-width: 100%;
  }
`;

export const VocationOptions = styled.div`
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
export const SelectedVocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem;

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
