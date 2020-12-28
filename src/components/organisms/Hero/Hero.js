import React from 'react';
import styled from 'styled-components';
import hero from 'assets/images/szydelko2.jpg';
import logo from 'assets/icon/Magiczna.png';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
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
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    center center / cover no-repeat url(${hero});
`;

const HeroButton = styled(Button)`
  margin: 200px;
  width: 400px;
  border: 3px solid white;
  border-radius: 30px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  :hover {
    --webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    background-color: ${({ theme }) => theme.grey400};
    color: ${({ theme }) => theme.black};
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.s};
  width: 50%;
`;

const StyledHeading = styled(Heading)`
  margin-top: 200px;
  font-size: 6rem;
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

export const Hero = () => (
  <>
    <StyledWrapper>
      <StyledImageItem src={logo} />
      <StyledHeading as="h1">Szydełko to sposób na życie!</StyledHeading>
      <StyledParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ducimus minima voluptate
        architecto aut pariatur quae accusantium eaque, iste animi voluptatibus facere. Possimus
        cumque rem sint ab maiores cupiditate assumenda.
      </StyledParagraph>
      <HeroButton as={Link} to="/category">
        Zobacz Moje projekty
      </HeroButton>
    </StyledWrapper>
  </>
);
