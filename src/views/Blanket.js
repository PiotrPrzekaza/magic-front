import React from 'react';
import { kocyki as data } from 'data/data';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

export const Blanket = () => (
  <PageTemplate pageType="kocyki">
    {data.map((item) => (
      <Card
        typeOfCard="kocyki"
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
