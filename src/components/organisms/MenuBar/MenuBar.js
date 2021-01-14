import React from 'react';
import styled from 'styled-components';

import { NavItem } from 'components/atoms/NavItem/NavItem';
import logo from 'assets/icon/Magiczna.png';

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: 250px 1fr;
  border-bottom: 1px solid ${({ theme }) => theme.grey};
  margin: 0 auto;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: space-between;
  background-color: #f5f5f5;
`;

const StyledMenu = styled.ul`
  display: grid;
  grid-template-columns: 150px 150px 150px;
  grid-gap: 10px;
  list-style: none;
  height: 100px;
  width: 100%;
  justify-content: end;
  align-items: center;
`;

const StyledImageItem = styled.img`
  position: absolute;
  top: -20px;
  left: 0;
  width: 250px;
  height: 250px;
  overflow: visible;
`;

export const MenuBar = () => (
  <Wrapper>
    <NavItem exact to="/" activeClassName="active">
      <StyledImageItem src={logo} alt="Logo magiczna pętelka" />
    </NavItem>
    <StyledMenu>
      <li>
        <NavItem to="/category" activeClassName="active">
          Kategorie
        </NavItem>
      </li>
      <li>
        <NavItem to="/contact" activeClassName="active">
          Kontakt
        </NavItem>
      </li>
      <li>
        <NavItem to="/about" activeClassName="active">
          O Mnie
        </NavItem>
      </li>
    </StyledMenu>
  </Wrapper>
);
