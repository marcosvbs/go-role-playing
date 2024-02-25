import styled from "styled-components";

export const NavigationBarContainer = styled.nav`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin: 4rem auto;
  padding: 0 1rem;

  max-width: 880px;

  @media (max-width: 425px) {
    margin: 2rem 0;

    width: 100vw;
  }
`;
