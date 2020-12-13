import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import hero from 'assets/images/szydelko2.jpg';
import logo from 'assets/icon/Magiczna.png';
import Button from 'components/atoms/Button/Button';
import { NavLink } from 'react-router-dom';
import ImageItem from 'components/atoms/ImageItem/ImageItem';

const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  /* box-shadow: -8px 1px 42px -16px rgba(0, 0, 0, 1); */
  box-shadow: -18px 2px 64px -20px #242422;
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
  background-color: ${({ theme }) => theme.primaryBg};
  justify-content: space-around;
  align-items: center;
`;

const HeroButton = styled(Button)`
  border-radius: 30px;
  padding: 10px 20px;
  color: #1b1515;
  background-color: ${({ theme }) => theme.primaryButton};
  text-align: center;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  margin: 0 auto 100px;
  transition: ease 0.3s;
  :hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const StyledImageItem = styled(ImageItem)`
  width: 61%;
  height: 61%;
`;

const Home = () => (
  <>
    <HeroWrapper>
      <StyledImageItem src={logo} />
      <HeroButton as={NavLink} to="/products">
        Zobacz Moje projecty
      </HeroButton>
    </HeroWrapper>
    <ImgWrapper />
  </>
);

export default Home;
