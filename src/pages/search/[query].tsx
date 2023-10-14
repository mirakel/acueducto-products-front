import { productsApi } from '@/apis';
import { ProductList } from '@/components/products';
import { Product } from '@/interfaces';
import { ProductResponse } from '@/interfaces';
import { GetServerSideProps, NextPage } from 'next';

interface Props {
  products: Product[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <div className="mx-auto max-w-6xl">
      <p className="max-w-xl mx-auto text-base text-gray-600 mt-10">
        Resultados para <span className="font-bold">{query}</span>:
      </p>

      <ProductList products={products} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query } = params as { query: string };

  const { data } = await productsApi.get<ProductResponse>(`/search/${query}`);

  return {
    props: {
      products: data.data,
      query,
      foundProducts: data.data.length === 0 ? false : true,
    },
  };
};

export default SearchPage;
