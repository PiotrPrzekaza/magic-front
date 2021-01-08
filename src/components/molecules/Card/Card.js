import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Heading } from 'components/atoms/Heading/Heading';
import { Button } from 'components/atoms/Button/Button';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  min-height: 400px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  position: relative;
  display: grid;
  transition: transform 0.5s ease-in;
  :hover {
    transform: scale(1.1);
  }
`;

const StyledButton = styled(Button)`
  border-radius: 5px;
  width: 33%;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.grey1};
  background-color: transparent;
  color: ${({ theme }) => theme.grey1};
  transition: all 0.3s ease;
  :hover {
    border: 1px solid ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.primary};
  }
`;

const StyledImage = styled.img`
  border-radius: 10px;
  margin: 10px;
  width: 150px;
  height: 150px;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  color: ${({ theme }) => theme.grey1};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const InnerWrapper = styled.div`
  position: relative;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.gray1};
  width: 90%;
  margin: 0 auto;

  ${({ flex }) =>
    flex &&
    css`
      border-bottom: none;
      align-items: center;
      display: flex;
      margin-bottom: 30px;
      flex-direction: column;
      justify-content: space-between;
    `};
`;

export const Card = ({ typeOfCard, id, title, price, desc, imageUrl, type, createdTime }) => (
  <>
    <Wrapper typeOfCard={typeOfCard}>
      <InnerWrapper>
        <StyledImage src={imageUrl} alt="" />
        <StyledHeading>{title}</StyledHeading>
      </InnerWrapper>
      <InnerWrapper flex>
        <StyledParagraph>Cena: {price}</StyledParagraph>
        <StyledParagraph>{desc}</StyledParagraph>
        <StyledParagraph> {type}</StyledParagraph>
        <StyledParagraph>Czas realizacji: {createdTime}</StyledParagraph>
        <StyledButton>Zamów</StyledButton>
      </InnerWrapper>
    </Wrapper>
  </>
);

Card.propTypes = {
  typeOfCard: PropTypes.oneOf(['torebki', 'ubrania', 'kocyki', 'pluszaki', 'chusty']),
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  type: PropTypes.string,
  createdTime: PropTypes.string,
  id: PropTypes.number,
};

Card.defaultProps = {
  typeOfCard: 'torebki',
  imageUrl: null,
  id: null,
  type: null,
  createdTime: null,
};
