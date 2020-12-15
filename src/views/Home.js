import React from 'react';
import styled from 'styled-components';
import hero from 'assets/images/szydelko2.jpg';
import logo from 'assets/icon/Magiczna.png';
import { Button } from 'components/atoms/Button/Button';
import { NavLink } from 'react-router-dom';
import { Heading } from 'components/atoms/Heading/Heading';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { ImageItem } from 'components/atoms/ImageItem/ImageItem';

const StyledWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  overflow: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const HeroButton = styled.button`
  width: 300px;
  margin: 200px 100px 0 0;
  padding: 20px 50px;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 1.6rem;
  transition: ease 0.2s;
  border: 2px solid white;
  border-radius: 30px;
  background-color: transparent;
  :hover {
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledHeading = styled(Heading)`
  font-size: 7rem;
  margin-right: 50px;
  font-weight: ${({ theme }) => theme.regular};
  text-transform: uppercase;
`;

const StyledImageItem = styled(ImageItem)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 400px;
  height: 400px;
`;

export const Home = () => (
  <>
    <StyledWrapper>
      <StyledImageItem src={logo} />
      <StyledHeading as="h1">Szydełko to sposób na życie!</StyledHeading>
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ducimus minima voluptate
        architecto aut pariatur quae accusantium eaque, iste animi voluptatibus facere. Possimus
        cumque rem sint ab maiores cupiditate assumenda.
      </StyledParagraph>
      <HeroButton as={NavLink} to="/products">
        Zobacz Moje projecty
      </HeroButton>
    </StyledWrapper>
  </>
);
