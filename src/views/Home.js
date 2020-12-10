import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import hero from 'assets/images/szydelko2.jpg';
import Button from 'components/atoms/Button/Button';

const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  /* box-shadow: -8px 1px 42px -16px rgba(0, 0, 0, 1); */
  box-shadow: -18px 2px 64px -20px rgba(122, 115, 33, 1);
  right: 0;
  background-image: url(${hero});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  height: 100vh;
  padding: 50px;
`;

const HeroWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 50vw;
  height: 100vh;
  flex-direction: column;
  background-color: #f7f0d8;
  justify-content: space-around;
  align-items: stretch;
`;

const HeroButton = styled(Button)`
  border-radius: 20px;
  padding: 10px 20px;
  color: #1b1515;
  background-color: #f5a9dc;
  text-align: center;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0 auto 100px;
  :hover {
    background-color: #f82f72;
    color: white;
  }
`;

const StyledHeading = styled(Heading)`
  text-align: center;
  text-transform: uppercase;
`;

const Home = () => (
  <>
    <HeroWrapper>
      <StyledHeading>Magiczna Pętelka</StyledHeading>
      <HeroButton>Zobacz Moje projecty</HeroButton>
    </HeroWrapper>
    <ImgWrapper />
  </>
);

export default Home;
