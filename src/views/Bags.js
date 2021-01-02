import React from 'react';
import { bagsData as data } from 'data/bagsData';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

export const Bags = () => (
  <PageTemplate pageType="bags">
    {data.map((item) => (
      <Card
        typeOfCard="bags"
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
