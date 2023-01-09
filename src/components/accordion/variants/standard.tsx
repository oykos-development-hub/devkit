import React, { useRef, useState } from "react";
import { AccordionProps } from "../types";
import { StyledMainWrapper } from "../styles/variants/standard";

export const Standard = ({ variant, collapsed, scrollHeight, ...props }: AccordionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [height, setHeight] = useState(0);

  const contentEl = useRef<HTMLDivElement>(null);

  return (
    <StyledMainWrapper variant="standard" collapsed={isCollapsed || collapsed} scrollHeight={height} {...props}>
      <div
        id="accordion-header"
        onClick={() => {
          setHeight(contentEl.current!.scrollHeight);
          setIsCollapsed(!isCollapsed);
        }}
      >
        <div>
          {props.iconLeft && <div id="accordion-icon-wrapper">{props.iconLeft}</div>}
          <p>{props.title}</p>
        </div>

        {props.iconRight && <div id="arrow-wrapper">{props.iconRight}</div>}
      </div>

      {(props.contentText || props.contentElement) && (
        <div id="accordion-content" ref={contentEl}>
          {!props.contentElement ? <p>{props.contentText}</p> : props.contentElement}
        </div>
      )}
    </StyledMainWrapper>
  );
};
