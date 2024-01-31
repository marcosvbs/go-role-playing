import styled from "styled-components";

export const HeaderContainer = styled.header`
  h4 {
    padding: 1.5rem 0rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .separator {
    border-bottom: 1px solid ${(props) => props.theme["low-opacity-gray"]};
  }
`;
