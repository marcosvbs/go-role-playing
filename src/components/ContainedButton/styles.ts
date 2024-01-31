import styled from "styled-components";

export const ButtonContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 1.5rem;

  border-radius: 4px;

  background-color: ${(props) => props.theme["green-400"]};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["green-300"]};
  }
`;
