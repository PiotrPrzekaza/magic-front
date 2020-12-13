import React from 'react';
import styled, { css } from 'styled-components';
import imgIcon from 'assets/images/chusta_bg.png';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import ImageItem from 'components/atoms/ImageItem/ImageItem';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  min-height: 400px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.secondaryBg};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
  position: relative;
  overflow: hidden;
  display: grid;
`;

const StyledButton = styled(Button)`
  border-radius: 30px;
  width: 50%;
  background-color: ${({ theme }) => theme.primaryButton};
  :hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const AboutStyledWrapper = styled.div`
  min-height: 50vh;
  max-width: 50vw;
  border-radius: 20px;
  display: flex;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: -5px 3px 42px -16px rgba(0, 0, 0, 1);
`;

const AboutInnerWrapper = styled.div`
  position: relative;
  justify-content: space-around;
  padding: 17px 30px;
`;

const AboutStyledImage = styled(ImageItem)`
  width: 200px;
  height: 200px;
`;

const AboutStyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const AboutStyledHeading = styled(Heading)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const InnerWrapper = styled.div`
  position: relative;
  justify-content: space-around;
  padding: 17px 30px;
  ${({ flex }) =>
    flex &&
    css`
      align-items: center;
      margin: 30px 0 0 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const StyledImage = styled.img`
  position: absolute;
  border-radius: 10px;
  margin-top: 20px;
  width: 150px;
  height: 150px;
  left: 5%;
  top: 2%;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Card = ({ typeOfCard, title, price, desc, imageUrl, color, createdTime }) => (
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
          <StyledParagraph>Kolor: {color}</StyledParagraph>
          <StyledParagraph>Czas realizacji: {createdTime}</StyledParagraph>
          <StyledButton>Zamów</StyledButton>
        </InnerWrapper>
      </Wrapper>
    )}
    {typeOfCard === 'knitting' && (
      <Wrapper typeOfCard={typeOfCard}>
        <InnerWrapper>
          <StyledImage src={imageUrl} alt="me" />
          <StyledHeading>{title}</StyledHeading>
        </InnerWrapper>
        <InnerWrapper flex>
          <AboutStyledParagraph>Cena {price}</AboutStyledParagraph>
          <AboutStyledParagraph>{desc}</AboutStyledParagraph>
          <AboutStyledParagraph>{color}</AboutStyledParagraph>
          <AboutStyledParagraph>{createdTime}</AboutStyledParagraph>
          <StyledButton>Zamów</StyledButton>
        </InnerWrapper>
      </Wrapper>
    )}
    {typeOfCard === 'about' && (
      <AboutStyledWrapper typeOfCard={typeOfCard}>
        <AboutInnerWrapper>
          {/* <AboutStyledImage src={imgIcon} /> */}
          <AboutStyledHeading>O Mnie</AboutStyledHeading>
          <StyledParagraph>
            Szydełko to maja pasja. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo facere fuga harum minus? Eum vel, autem aliquam temporibus, eius natus in
            voluptas provident laudantium placeat rem sunt quam nostrum at? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Explicabo facere fuga harum minus? Eum vel, autem
            aliquam temporibus, eius natus in voluptas provident laudantium placeat rem sunt quam
            nostrum at?
          </StyledParagraph>
        </AboutInnerWrapper>
      </AboutStyledWrapper>
    )}
  </>
);
Card.propTypes = {
  typeOfCard: PropTypes.oneOf(['products', 'knitting', 'about']),
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  color: PropTypes.string,
  createdTime: PropTypes.string,
};

Card.defaultProps = {
  typeOfCard: 'products',
  imageUrl: null,
  color: null,
  createdTime: null,
};

export default Card;
