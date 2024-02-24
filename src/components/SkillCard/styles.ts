import styled from "styled-components";

export const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 30rem;
  padding: 1rem;

  border: 1px solid ${(props) => props.theme["low-opacity-gray"]};
  border-radius: 4px;
  background-color: ${(props) => props.theme["gray-600"]};

  p {
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const SkillCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 0.625rem;
  text-transform: uppercase;

  .skillCategoryAndType {
    display: flex;
    flex-direction: row;
  }

  .skillInfo {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: row;
      gap: 0.25rem;
    }
  }
`;

export const SkillCardBody = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    text-align: left;
  }
`;
