import React from 'react';
import knittingData from 'data/knittingData/knittingData';
import PageTemplate from 'templates/PageTemplate';
import Card from 'components/molecules/Card/Card';

const Knitting = () => (
  <PageTemplate pageType="knitting">
    {knittingData.map((item) => (
      <Card
        typeOfCard="knitting"
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
export default Knitting;
