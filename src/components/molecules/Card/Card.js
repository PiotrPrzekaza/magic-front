import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Heading } from 'components/atoms/Heading/Heading';
import { Button } from 'components/atoms/Button/Button';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  min-height: 400px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.white};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  position: relative;
  overflow: hidden;
  display: grid;
`;

const StyledButton = styled(Button)`
  border-radius: 5px;
  width: 33%;
  margin-top: 10px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.grey1};
  background-color: transparent;
  color: ${({ theme }) => theme.grey1};
  :hover {
    border: 2px solid ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.black};
  }
`;

const StyledImage = styled.img`
  border-radius: 10px;
  margin: 30px 20px;
  width: 150px;
  height: 150px;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin: 30px;
  color: ${({ theme }) => theme.grey1};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const AboutStyledWrapper = styled.div`
  height: 50vh;
  width: 50vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.grey1};
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
`;

const AboutStyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const AboutInnerWrapper = styled.article`
  width: 80%;
  height: 50%;
`;

const AboutStyledHeading = styled(Heading)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  width: 90%;
  text-align: center;
  color: ${({ theme }) => theme.grey1};
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.grey1};
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

export const Card = ({
  typeOfCard,
  id,
  title,
  price,
  desc,
  imageUrl,
  category,
  type,
  createdTime,
}) => (
  <>
    {typeOfCard === 'products' && (
      <Wrapper typeOfCard={typeOfCard}>
        <InnerWrapper>
          <StyledImage src={imageUrl} alt="" />
          <StyledHeading>{title}</StyledHeading>
        </InnerWrapper>
        <InnerWrapper flex>
          <StyledParagraph>Cena: {price}</StyledParagraph>
          <StyledParagraph>{desc}</StyledParagraph>
          <StyledParagraph>Rodzaj: {category}</StyledParagraph>
          <StyledParagraph> {type}</StyledParagraph>
          <StyledParagraph>Czas realizacji: {createdTime}</StyledParagraph>
          <StyledButton>Zamów</StyledButton>
        </InnerWrapper>
      </Wrapper>
    )}
    {typeOfCard === 'about' && (
      <AboutStyledWrapper typeOfCard={typeOfCard}>
        <AboutStyledHeading>O Mnie</AboutStyledHeading>
        <AboutInnerWrapper>
          <AboutStyledParagraph>
            Szydełko to maja pasja. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo facere fuga harum minus? Eum vel, autem aliquam temporibus, eius natus in
            voluptas provident laudantium placeat rem sunt quam nostrum at? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Explicabo facere fuga harum minus? Eum vel, autem
            aliquam temporibus, eius natus in voluptas provident laudantium placeat rem sunt quam
            nostrum at?
          </AboutStyledParagraph>
        </AboutInnerWrapper>
      </AboutStyledWrapper>
    )}
  </>
);

Card.propTypes = {
  typeOfCard: PropTypes.oneOf(['products', 'about']),
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  createdTime: PropTypes.string,
  id: PropTypes.number.isRequired,
};

Card.defaultProps = {
  typeOfCard: 'products',
  imageUrl: null,
  category: null,
  type: null,
  createdTime: null,
};
