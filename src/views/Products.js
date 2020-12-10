import React from 'react';
import productsData from 'data/productsData/productsData';
import PageTemplate from 'templates/PageTemplate';
import Card from 'components/molecules/Card/Card';

const Products = () => (
  <PageTemplate>
    {productsData.map((item) => (
      <Card
        typeOfCard="products"
        title={item.title}
        price={item.price}
        desc={item.desc}
        color={item.color}
        imageUrl={item.imageUrl}
        createdTime={item.createdTime}
        key={item.title}
      />
    ))}
  </PageTemplate>
);

export default Products;
