import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  min-width: 50%;
  min-height: 30vh;
  text-align: center;
  border-radius: 20px;
  background-color: #819700;
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContactForm = ({ typeOfCard }) => (
  <StyledWrapper as="form" typeOfCard={typeOfCard}>
    <Heading>Wypełnij i prześlij do mnie</Heading>
    <form>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea type="text" name="message" placeholder="Message" />
      <button type="submit">Wyślij</button>
    </form>
  </StyledWrapper>
);

ContactForm.propTypes = {
  typeOfCard: PropTypes.string.isRequired,
};

export default ContactForm;
