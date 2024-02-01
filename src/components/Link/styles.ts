import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 1.5rem;

  border-radius: 4px;

  cursor: pointer;

  text-decoration: none;

  color: ${(props) => props.theme.white};
`;

export const ContainedLink = styled(Link)`
  background-color: ${(props) => props.theme["green-400"]};
  border: 1px solid transparent;

  &:hover {
    background-color: ${(props) => props.theme["green-300"]};
  }
`;

export const OutlinedLink = styled(Link)`
  background-color: ${(props) => props.theme.black};
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${(props) => props.theme["green-300"]};
  }
`;
