import React from 'react';
import styled, { keyframes } from 'styled-components';
import hero from 'assets/images/szydelko2.jpg';
import logo from 'assets/icon/Magiczna.png';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { Heading } from 'components/atoms/Heading/Heading';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

const appear = keyframes`
0% {
  opacity: 0;
 transform: translateX(-22vw);
}
100% {
  opacity: 1;
  transform: translateX(0vw);
}
`;

const sized = keyframes`
0%{
  transform: scale(1);
}

100%{
transform: scale(1.2);
}
`;

const StyledWrapper = styled.div`
  position: relative;
  left: -5vw;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  color: white;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    center center / cover no-repeat url(${hero});
`;

const HeroButton = styled(Button)`
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin-top: 5vh;
  width: 15vw;
  color: ${({ theme }) => theme.white};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.l};

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.grey300};
    top: 0;
    left: -100%;
    transition: transform 0.3s ease-in;
  }

  :hover::after {
    transform: translateX(100%);
  }
  :hover {
    animation-name: ${sized};
    animation-duration: 1s;
    animation-delay: 0;
    animation-fill-mode: both;
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
  width: 50%;
`;

const StyledHeading = styled(Heading)`
  position: relative;
  margin: 30vh;
  font-size: 6rem;
  font-weight: ${({ theme }) => theme.regular};
  &:before {
    content: '';
    animation-name: ${appear};
    animation-duration: 2s;
    animation-delay: 1s;
    position: absolute;
    animation-fill-mode: both;
    left: -22vw;
    top: -18vh;
    width: 50vw;
    height: 50vh;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const Hero = () => (
  <>
    <StyledWrapper>
      <StyledHeading as="h1">Szydełko to sposób na życie!</StyledHeading>
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ducimus minima voluptate
        architecto aut pariatur quae accusantium eaque, iste animi voluptatibus facere. Possimus
        cumque rem sint ab maiores cupiditate assumenda. //{' '}
      </StyledParagraph>
      <HeroButton as={Link} to="/category">
        Zobacz Moje projekty
      </HeroButton>
    </StyledWrapper>
  </>
);
