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
`;

export const VocationSelectionBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 1rem;
`;

export const VocationSelectionForm = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
