import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Heading } from 'components/atoms/Heading/Heading';
import { Form } from 'components/molecules/Form/Form';

const StyledWrapper = styled.div`
  width: 50%;
  height: 90%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.thirdColorBg};
  border: 1px solid ${({ theme }) => theme.grey1};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  display: flex;
  color: ${({ theme }) => theme.grey1};
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const ContactForm = ({ typeOfCard }) => (
  <StyledWrapper typeOfCard={typeOfCard}>
    <Heading>Wypełnij i prześlij do mnie</Heading>
    <Form />
  </StyledWrapper>
);

ContactForm.propTypes = {
  typeOfCard: PropTypes.string.isRequired,
};
