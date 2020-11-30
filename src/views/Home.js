import React from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import hero from 'assets/images/szydelko2.jpg';

const StyledImageItem = styled.img`
  width: 40%;
  height: 40%;
`;

const Home = () => (
  <>
    <Heading>Strona domowa</Heading>
    <StyledImageItem src={hero} alt="szydełko" />
  </>
);

export default Home;
