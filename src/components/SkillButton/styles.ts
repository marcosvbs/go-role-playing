import styled from "styled-components";

export const SkillButtonContainer = styled.div`
  .openSkillDetailsButton {
    text-transform: none;
    text-decoration: underline;
    background: red;
    border: none;

    cursor: pointer;

    padding: 0.5rem;

    color: ${(props) => props.theme.white};

    &:hover {
      color: ${(props) => props.theme["green-300"]};
    }
  }
`;
