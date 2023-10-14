import { productsApi } from '@/apis';
import { ProductList } from '@/components/products';
import { PageTitle } from '@/components/ui';
import { Product, ProductResponse } from '@/interfaces';
import { GetStaticProps, NextPage } from 'next';

interface Props {
  products: Product[];
}

const HomePage: NextPage<Props> = ({ products }) => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-12">
        <PageTitle text="¡Bienvenido al mundo de las zapatillas!" />
        <p className="max-w-xl text-center px-2 mx-auto text-base text-gray-600">
          Compra hoy tus productos favoritos de forma fácil y segura en nuestra tienda online.
        </p>
      </div>

      <ProductList products={products} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await productsApi.get<ProductResponse>('/products');

  return {
    props: {
      products: data.data,
    },
  };
};

export default HomePage;
