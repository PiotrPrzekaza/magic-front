import React from 'react';
import styled, { css } from 'styled-components';
import { ImageItem } from 'components/atoms/ImageItem/ImageItem';
import { ListItem } from 'components/atoms/ListItem/ListItem';
import logo from 'assets/icon/Magiczna.png';

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 250px 1fr);
  border-bottom: 1px solid grey;
  margin: 0 auto;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: start;
  background-color: #f5f5f5;
`;

const StyledMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-gap: 10px;
  list-style: none;
  height: 100px;
  width: 100%;
  justify-content: start;
  align-items: center;
`;

const StyledImageItem = styled(ImageItem)`
  position: absolute;
  top: -20px;
  left: 0;
  width: 250px;
  height: 250px;
  overflow: visible;
`;

export const MenuBar = () => (
  <Wrapper>
    <ListItem nav exact to="/" activeClassName="active">
      <StyledImageItem src={logo} alt="Logo magiczna pętelka" />
    </ListItem>
    <StyledMenu>
      <li>
        <ListItem nav to="/category" activeClassName="active">
          Kategorie
        </ListItem>
      </li>
      <li>
        <ListItem nav to="/contact" activeClassName="active">
          Kontakt
        </ListItem>
      </li>
      <li>
        <ListItem nav to="/about" activeClassName="active">
          O Mnie
        </ListItem>
      </li>
    </StyledMenu>
  </Wrapper>
);
