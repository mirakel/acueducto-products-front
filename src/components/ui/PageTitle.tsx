import React, { FC } from 'react';

interface Props {
  text: string;
}

export const PageTitle: FC<Props> = ({ text }) => {
  return (
    <h1 className="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">
      {text}
    </h1>
  );
};
