import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import { Form } from 'components/molecules/Form/Form';

const StyledWrapper = styled.div`
  min-width: 50%;
  min-height: 50vh;
  text-align: center;
  border-radius: 20px;
  background-color: #abcaca;
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContactForm = ({ typeOfCard }) => (
  <StyledWrapper as="form" typeOfCard={typeOfCard}>
    <Heading>Wypełnij i prześlij do mnie</Heading>
    <Form />
  </StyledWrapper>
);

ContactForm.propTypes = {
  typeOfCard: PropTypes.string.isRequired,
};

export default ContactForm;
