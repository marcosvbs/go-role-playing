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
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-end;

  .closeButton {
    background-color: red;
    color: red;
  }
`;
