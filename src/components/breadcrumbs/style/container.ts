import styled from "styled-components";
import { Link } from "./link";

export const Container = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;

  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75em;
    margin: 0 1em 0 0;
  }

  & li:hover {
    & ${Link} {
      text-decoration: underline;
    }

    & ${Link}.active {
      text-decoration: none;
    }
  }
  & li:last-child {
    margin-right: 0;
  }
`;
