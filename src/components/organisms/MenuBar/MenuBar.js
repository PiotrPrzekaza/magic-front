import React from 'react';
import ImageItem from 'components/atoms/ImageItem/ImageItem';
import ListItem from 'components/atoms/ListItem/ListItem';
import styled, { css } from 'styled-components';
import logo from 'assets/icon/Magiczna.png';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  padding: 10px 0;
  width: 100vw;
  height: 200px;
  /* background-color: ${({ theme }) => theme.secondaryBg}; */
  background: rgba(179, 220, 237, 1);
  background: -moz-linear-gradient(
    top,
    rgba(179, 220, 237, 1) 0%,
    rgba(41, 184, 229, 1) 50%,
    rgba(188, 224, 238, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(179, 220, 237, 1)),
    color-stop(50%, rgba(41, 184, 229, 1)),
    color-stop(100%, rgba(188, 224, 238, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(179, 220, 237, 1) 0%,
    rgba(41, 184, 229, 1) 50%,
    rgba(188, 224, 238, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(179, 220, 237, 1) 0%,
    rgba(41, 184, 229, 1) 50%,
    rgba(188, 224, 238, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(179, 220, 237, 1) 0%,
    rgba(41, 184, 229, 1) 50%,
    rgba(188, 224, 238, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(179, 220, 237, 1) 0%,
    rgba(41, 184, 229, 1) 50%,
    rgba(188, 224, 238, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b3dced', endColorstr='#bce0ee', GradientType=0 );
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 9999;
  box-shadow: -8px 14px 64px 8px rgba(155, 161, 168, 1);
  margin-bottom: 50px;
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
