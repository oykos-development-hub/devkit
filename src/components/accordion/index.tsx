import React, { useRef, useState } from "react";
import { AccordionProps } from "./types";
import { StyledMainWrapper as Filled } from "./styles/variants/filled";
import { StyledMainWrapper as Standard } from "./styles/variants/standard";

export const Wrapper = (props: AccordionProps): React.ReactElement => {
  const variant = props.variant ?? "standard";

  if (variant === "filled") return <Filled {...props} />;
  else return <Standard {...props} />;
};

export const Accordion = ({ variant, collapsed, scrollHeight, ...props }: AccordionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [height, setHeight] = useState(0);

  const contentEl = useRef<HTMLDivElement>(null);

  return (
    <Wrapper variant={variant} collapsed={isCollapsed || collapsed} scrollHeight={height} {...props}>
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
    </Wrapper>
  );
};
