import { FC } from 'react';

interface Props {
  currency: string;
  num: number;
  numSize: string;
}

export const Price: FC<Props> = ({ currency, num, numSize }) => {
  return (
    <>
      {currency}
      <span className={numSize}>{num}</span>
    </>
  );
};
