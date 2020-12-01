import React from 'react';
import ImageItem from 'components/atoms/ImageItem/ImageItem';
import ListItem from 'components/atoms/ListItem/ListItem';
import styled, { css } from 'styled-components';
import logo from 'assets/icon/Magiczna.png';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  padding: 10px 0;
  width: 100vw;
  height: 200px;
  background-color: ${({ theme }) => theme.secondaryBg};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const StyledListItem = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledImageItem = styled(ImageItem)`
  margin-right: auto;
  position: relative;
  top: 30px;
  left: 0;
  width: 350px;
  height: 350px;
  overflow: visible;
`;

const MenuBar = () => (
  <Wrapper>
    <StyledImageItem src={logo} alt="Logo magiczna pętelka" />
    <StyledListItem>
      <li>
        <ListItem as={NavLink} to="/" activeclass="active">
          Strona Domowa
        </ListItem>
      </li>
      <li>
        <ListItem as={NavLink} to="/products" activeclass="active">
          Produkty
        </ListItem>
      </li>
      <li>
        <ListItem as={NavLink} to="/knitting" activeclass="active">
          Druty
        </ListItem>
      </li>
      <li>
        <ListItem as={NavLink} to="/contact" activeclass="active">
          Kontakt
        </ListItem>
      </li>
    </StyledListItem>
  </Wrapper>
);

export default MenuBar;
