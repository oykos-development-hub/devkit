import styled from "styled-components";
import { sharedPath, sharedSvg } from "./shared";

export const Svg = styled.svg.attrs({ xmlns: "http://www.w3.org/2000/svg" })`
  ${sharedSvg}
`;

export const Path = styled.path.attrs({})`
  ${sharedPath}
`;
