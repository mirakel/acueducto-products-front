import { Product } from '@/interfaces';
import { NextPage } from 'next';

interface Props {
  products: Product[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <>
      <h1>search page</h1>
    </>
  );
};

export default SearchPage;
