import React from 'react';
import { LoaderOneProps } from "./types";
//import "./_style.scss";

export const Loader = ({ className }: LoaderOneProps) => {
  const classBase = 'loader';

  const classes: string[] = [
    classBase,
    `${ className || '' }`,
  ];

  return (
    <div
      className={ classes.join(' ') }
      data-testid={ classBase }
    />
  );
};
