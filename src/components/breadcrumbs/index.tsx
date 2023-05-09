import React, { MouseEvent } from "react";
import { BreadcrumbsProps } from "./types";
import { Theme } from "../../shared/theme";
import { Container } from "./style/container";
import { Link } from "./style/link";

export const Breadcrumbs = ({ theme = Theme, onClick, items, separator, style, className }: BreadcrumbsProps) => {
  return (
    <Container style={style} className={className}>
      {items?.map((item) => {
        const isLastItem = items.indexOf(item) === items.length - 1;

        const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();

          if (onClick) onClick(e);
        };

        return (
          <li key={item.name}>
            <Link href={item.to} theme={theme} className={isLastItem ? "active" : ""} onClick={handleLinkClick}>
              {item.icon}
              {item.name}
            </Link>

            {!isLastItem && separator}
          </li>
        );
      })}
    </Container>
  );
};
