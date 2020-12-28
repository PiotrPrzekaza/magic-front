import React from 'react';
import { knittingData as data } from 'data/knittingData';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

export const Knitting = () => (
  <PageTemplate pageType="knitting">
    {data.map((item) => (
      <Card
        typeOfCard="knitting"
        title={item.title}
        price={item.price}
        desc={item.desc}
        color={item.color}
        imageUrl={item.imageUrl}
        createdTime={item.createdTime}
        key={item.id}
      />
    ))}
  </PageTemplate>
);
