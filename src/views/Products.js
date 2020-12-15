import React from 'react';
import { productsData as data } from 'data/productsData';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

export const Products = () => (
  <PageTemplate pageType="products">
    {data.map((item) => (
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
