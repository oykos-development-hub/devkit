import styled from "styled-components";

export const FileItem = styled.div`
  background-color: ${({ theme }) => theme.palette.gray50};
  padding: 0 30px 0 10px;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;
