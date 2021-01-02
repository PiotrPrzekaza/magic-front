import React from 'react';
import { shawlData as data } from 'data/shawlData';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

export const Shawl = () => (
  <PageTemplate pageType="shawl">
    {data.map((item) => (
      <Card
        typeOfCard="shawl"
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
