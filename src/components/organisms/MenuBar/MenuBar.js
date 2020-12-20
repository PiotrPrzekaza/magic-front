import React from 'react';
import styled, { css } from 'styled-components';
import { ImageItem } from 'components/atoms/ImageItem/ImageItem';
import { ListItem } from 'components/atoms/ListItem/ListItem';
import logo from 'assets/icon/Magiczna.png';

const Wrapper = styled.header`
  display: flex;
  height: 150px;
  margin-bottom: 50px;
  -webkit-transition: ease 0.3s;
  transition: ease 0.3s;
`;

const StyledMenu = styled.ul`
  display: flex;
  height: 150px;
  margin: 0 auto;
  width: 95vw;
  list-style: none;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom: 1px solid grey;
`;

const StyledImageItem = styled(ImageItem)`
  position: relative;
  top: 30px;
  left: 0;
  width: 250px;
  height: 250px;
  overflow: visible;
`;

export const MenuBar = () => (
  <Wrapper>
    <StyledMenu>
      <li>
        <ListItem nav exact to="/" activeClassName="active">
          <StyledImageItem src={logo} alt="Logo magiczna pętelka" />
        </ListItem>
      </li>
      <li>
        <ListItem nav to="/products" activeClassName="active">
          Produkty
        </ListItem>
      </li>
      <li>
        <ListItem nav to="/knitting" activeClassName="active">
          Druty
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
