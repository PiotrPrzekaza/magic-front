import React from 'react';
import styled, { css } from 'styled-components';
import { ImageItem } from 'components/atoms/ImageItem/ImageItem';
import { ListItem } from 'components/atoms/ListItem/ListItem';
import logo from 'assets/icon/Magiczna.png';

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: repeat(2, 250px 1fr);
  border-bottom: 1px solid grey;
  width: 95vw;
  margin: 0 auto;
  position: relative;
`;

const StyledMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 20px;
  list-style: none;
  height: 100px;
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
        <ListItem nav to="/products" activeClassName="active">
          Produkty
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
