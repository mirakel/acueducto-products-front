import { FC } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '@/interfaces';

interface Props {
  products: Product[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};
