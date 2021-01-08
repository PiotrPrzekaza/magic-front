import React from 'react';
import { pluszaki as data } from 'data/data';
import { PageTemplate } from 'templates/PageTemplate';
import { Card } from 'components/molecules/Card/Card';

export const Mascots = () => (
  <PageTemplate pageType="pluszaki">
    {data.map((item) => (
      <Card
        typeOfCard="pluszaki"
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
