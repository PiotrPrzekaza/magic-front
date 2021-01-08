import React from 'react';
import { torebki as data } from 'data/data';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

export const Bags = () => (
  <PageTemplate pageType="torebki">
    {data.map((item) => (
      <Card
        typeOfCard="torebki"
        title={item.title}
        price={item.price}
        desc={item.desc}
        color={item.category}
        type={item.type}
        imageUrl={item.imageUrl}
        createdTime={item.createdTime}
        key={item.id}
      />
    ))}
  </PageTemplate>
);
