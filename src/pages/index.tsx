import { ProductList } from '@/components/products';
import { PageTitle } from '@/components/ui';
import { Product } from '@/interfaces';
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
  const products: Product[] = [
    {
      id: '1',
      title: 'Zapatillas Dropset 2',
      brand: 'Training',
      price: 549,
      image:
        'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/2aa2f742c84a4bda9a228360a592a29c_9366/zapatillas-dropset-2.jpg',
    },
    {
      id: '2',
      title: 'Zapatillas Dropset 2',
      brand: 'Training',
      price: 549,
      image:
        'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/3854671cfc4441b4a2fcc3b6872830f0_9366/zapatillas-dropset-2.jpg',
    },
    {
      id: '3',
      title: 'Zapatillas Dropset 2',
      brand: 'Training',
      price: 549,
      image:
        'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb4cbeab34f147aea15f411837534479_9366/zapatillas-court-adidas-by-stella-mccartney.jpg',
    },
  ];

  return {
    props: {
      products,
    },
  };
};

export default HomePage;
