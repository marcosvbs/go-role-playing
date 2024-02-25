import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(30, 30, 30, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  display: grid;
  gap: 0.5rem;

  grid-template-columns: max-content max-content;

  .closeButton {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;

    cursor: pointer;

    text-decoration: none;

    border: 1px solid ${(props) => props.theme["low-opacity-gray"]};
    border-radius: 4px;
    background-color: ${(props) => props.theme["gray-600"]};

    color: ${(props) => props.theme.white};
  }

  .closeButton:hover {
    color: ${(props) => props.theme["green-300"]};
  }

  @media (max-width: 425px) {
    width: 100vw;
    padding: 0 1rem;

    grid-template-columns: 100%;
    justify-items: end;
  }
`;
