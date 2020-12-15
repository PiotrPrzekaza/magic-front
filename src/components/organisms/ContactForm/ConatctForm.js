import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Heading } from 'components/atoms/Heading/Heading';
import { Form } from 'components/molecules/Form/Form';

const StyledWrapper = styled.div`
  min-width: 50%;
  min-height: 40vh;
  text-align: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.thirdColorBg};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContactForm = ({ typeOfCard }) => (
  <StyledWrapper as="form" typeOfCard={typeOfCard}>
    <Heading>Wypełnij i prześlij do mnie</Heading>
    <Form />
  </StyledWrapper>
);

ContactForm.propTypes = {
  typeOfCard: PropTypes.string.isRequired,
};
