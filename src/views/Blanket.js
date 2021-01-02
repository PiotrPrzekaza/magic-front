import React from 'react';
import { blanketsData as data } from 'data/blanketsData';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

export const Blanket = () => (
  <PageTemplate pageType="blanket">
    {data.map((item) => (
      <Card
        typeOfCard="blanket"
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
