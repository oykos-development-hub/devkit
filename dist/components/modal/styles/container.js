import { ModalBox, ModalHeader } from "@oykos-development/devkit-react-ts-styled-components";
import styled from "styled-components";
const Container = styled.div `
  position: relative;
  z-index: 10;
  ${ModalBox} {
    /* min-height: 350px; */
    max-height: 80vh;
    padding: 14px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    filter: drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.1)) drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.06));

    transition: opacity 0.2s;

    ${({ open }) => (open ? "visibility: visible; opacity: 1;" : "visibility: hidden; opacity: 0;")}
  }

  ${ModalHeader} {
    padding-inline: 10px;

    & > h6 {
      font-family: "Source Sans Pro", sans-serif;
      font-size: 16px;
    }
  }
`;
export default Container;
//# sourceMappingURL=container.js.map