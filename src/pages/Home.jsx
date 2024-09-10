import React from 'react'
import { useProducts } from '../hooks'
import { ItemListContainer } from '../components';

export const Home = () => {

  const {products,loading} = useProducts();
  return <ItemListContainer products={products} />;
};
