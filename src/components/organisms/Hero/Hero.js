import React from 'react';
import styled from 'styled-components';
import hero from 'assets/images/szydelko2.jpg';
import logo from 'assets/icon/Magiczna.png';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { Heading } from 'components/atoms/Heading/Heading';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
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
  margin: 200px;
  width: 400px;
  border: 2px solid white;
  border-radius: 10px;
  :hover {
    --webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    background-color: ${({ theme }) => theme.grey300};
    color: ${({ theme }) => theme.gray1};
    border: 2px solid ${({ theme }) => theme.grey1};
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
    position: absolute;
    left: -22vw;
    top: -18vh;
    width: 50vw;
    height: 50vh;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const StyledBlock = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vh;
  bottom: -10vh;
  right: -20vw;
  transform: rotate(-45deg);
  background-color: ${({ theme }) => theme.thirdColor};
`;

export const Hero = () => (
  <>
    <StyledWrapper>
      <StyledBlock />
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
