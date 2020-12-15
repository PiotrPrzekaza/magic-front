import React from 'react';
import { AboutPageTemplate } from 'templates/AboutPageTemplate';
import { Card } from 'components/molecules/Card/Card';

export const About = () => (
  <AboutPageTemplate pageType="about">
    <Card typeOfCard="about" />
  </AboutPageTemplate>
);
