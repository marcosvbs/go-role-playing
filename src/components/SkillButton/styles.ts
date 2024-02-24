import styled from "styled-components";

export const SkillButtonContainer = styled.div`
  .openSkillDetailsButton {
    text-transform: none;
    text-decoration: underline;
    border: none;

    cursor: pointer;

    padding: 0.5rem;

    background: none;
    color: ${(props) => props.theme.white};

    &:hover {
      color: ${(props) => props.theme["green-300"]};
    }
  }
`;
