import styled from "styled-components";

export const Container = styled.input.attrs({ type: "file" })`
  margin: 0.5rem 0;
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #f2f2f2;
  box-shadow: 0 0 0 2px #fff inset;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0077ff inset;
  }

  & svg path {
    stroke: #212121;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;
