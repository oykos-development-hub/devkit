import styled from "styled-components";
export const FileItem = styled.div `
  background-color: ${({ theme }) => theme.palette.gray50};
  padding: 0 30px 0 10px;
  position: relative;
  margin-top: 10px;
  svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
//# sourceMappingURL=fileList.js.map