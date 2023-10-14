import { FC } from 'react';

interface Props {
  currency: string;
  num: number;
  numSize: string;
  discount: string;
  numOriginal: number;
}

export const DiscountPrice: FC<Props> = ({ currency, num, numSize, numOriginal, discount }) => {
  return (
    <>
      {currency}
      <span className={numSize}>{num}</span>
      <span className="text-rose-800 ml-3 text-lg">{discount}</span>

      <p className="line-through">{numOriginal}</p>
    </>
  );
};
