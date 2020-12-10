import React from 'react';
import AboutPageTemplate from 'templates/AboutPageTemplate';

import ContactForm from 'components/organisms/ContactForm/ConatctForm';

const Contact = () => (
  <AboutPageTemplate>
    <ContactForm typeOfCard="contact" />
  </AboutPageTemplate>
);
export default Contact;
