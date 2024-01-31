import styled from "styled-components";

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 1.5rem;

  border-radius: 4px;

  cursor: pointer;
`;

export const ContainedButton = styled(Button)`
  background-color: ${(props) => props.theme["green-400"]};
  border: 1px solid transparent;

  &:hover {
    background-color: ${(props) => props.theme["green-300"]};
  }
`;

export const OutlinedButton = styled(Button)`
  background-color: ${(props) => props.theme.black};
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${(props) => props.theme["green-300"]};
  }
`;
