import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 10rem);

  div {
    display: flex;
    flex-direction: column;

    max-width: 480px;

    padding: 1rem;

    background-color: ${(props) => props.theme["gray-600"]};

    border: 1px solid ${(props) => props.theme["low-opacity-gray"]};
    border-radius: 4px;
  }

  h5 {
    padding-bottom: 1rem;
  }

  p {
    padding-bottom: 1.5rem;
  }
`;
