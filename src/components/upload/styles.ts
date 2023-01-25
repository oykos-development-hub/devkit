import styled from "styled-components";
import { Theme } from "../../shared/theme";
import { UploadProps } from "./types";

const borderColor = (props: UploadProps) =>
  props.style?.borderColor || props.theme?.palette?.light?.four || Theme.palette.light.four;

export const Uploader = styled.div<UploadProps>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.hasList ? "1em" : 0)};

  & svg path {
    fill: ${borderColor};
  }

  & > * {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  & > div:first-child {
    align-items: center;
    justify-content: center;
    gap: 1em;
    position: relative;

    & input {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      &:focus {
        outline: none;
      }
    }

    &.upload-drop-zone {
      border: 2px dashed ${borderColor};
      width: 100%;
      padding: ${(props) => props.style?.padding || "2em 3em"};
      box-sizing: border-box;
      border-radius: ${(props) =>
        props.style?.borderRadius || props.theme?.borderRadius?.xl || Theme?.borderRadius?.xl || 0};
    }
  }

  & > #upload-list {
    gap: 0.5em;
    & div,
    & span {
      display: flex;
      align-items: center;
      gap: 1em;
    }

    & > div {
      justify-content: space-between;
    }

    .action-buttons {
      span:last-child svg path {
        fill: ${(props) => props.theme?.palette?.important?.two || Theme.palette.important.two};
      }

      & > *:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }
`;
