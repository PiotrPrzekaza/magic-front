import React from 'react';
import ImageItem from 'components/atoms/ImageItem/ImageItem';
import ListItem from 'components/atoms/ListItem/ListItem';
import styled, { css } from 'styled-components';
import logo from 'assets/icon/Magiczna.png';
import { Link } from 'react-router-dom';

const MenuBar = () => (
  <nav>
    <ImageItem src={logo} alt="Logo magiczna pętelka" />
    <ListItem as={Link} to="/">
      Strona Domowa
    </ListItem>
    <ListItem as={Link} to="/products">
      Produkty
    </ListItem>
    <ListItem as={Link} to="/knitting">
      Druty
    </ListItem>
    <ListItem as={Link} to="/contact">
      Kontakt
    </ListItem>
  </nav>
);

export default MenuBar;
