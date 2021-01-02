import React from 'react';
import { mascotsData as data } from 'data/mascotsData';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

export const Mascots = () => (
  <PageTemplate pageType="mascots">
    {data.map((item) => (
      <Card
        typeOfCard="mascots"
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
