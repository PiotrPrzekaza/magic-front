import React from 'react';
import AboutPageTemplate from 'templates/AboutPageTemplate';
import ContactForm from 'components/organisms/ContactForm/ConatctForm';

const Contact = () => (
  <AboutPageTemplate pageType="contact">
    <ContactForm typeOfCard="contact" />
  </AboutPageTemplate>
);
export default Contact;
