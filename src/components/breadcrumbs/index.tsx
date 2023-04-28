import React, { useState, MouseEvent } from "react";
import { BreadcrumbsProps } from "./types";
import { Theme } from "../../shared/theme";
import { Container } from "./style/container";
import { Link } from "./style/link";

export const Breadcrumbs = ({ theme = Theme, onClick, items, separator, style, className }: BreadcrumbsProps) => {
  const [links, setLinks] = useState(items);

  return (
    <Container theme={theme} style={style} className={className}>
      {links?.map((item) => {
        const isLastItem = links.indexOf(item) === links.length - 1;

        const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();

          const newLinks = links?.splice(0, links.indexOf(item) + 1);
          setLinks(newLinks);

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
