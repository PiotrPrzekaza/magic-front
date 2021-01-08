import React from 'react';
import { ubrania as data } from 'data/data';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

export const Clothes = () => (
  <PageTemplate pageType="ubrania">
    {data.map((item) => (
      <Card
        typeOfCard="ubrania"
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
