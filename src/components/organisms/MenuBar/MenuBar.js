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
  grid-template-columns: repeat(3, 150px);
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

const StyledNavItem = styled(NavItem)`
  border-bottom: 1px solid ${({ theme }) => theme.grey1};

  &.active {
    color: ${({ theme }) => theme.grey1};
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.m};
    background-color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.grey1};
    border-radius: 5px;
  }
  :hover {
    color: ${({ theme }) => theme.grey1};
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.m};
    background-color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.grey1};
    border-radius: 5px;
  }
`;

export const MenuBar = () => (
  <Wrapper>
    <NavItem exact to="/" activeClassName="active">
      <StyledImageItem src={logo} alt="Logo magiczna pętelka" />
    </NavItem>
    <StyledMenu>
      <li>
        <StyledNavItem to="/category" activeClassName="active">
          Kategorie
        </StyledNavItem>
      </li>
      <li>
        <StyledNavItem to="/contact" activeClassName="active">
          Kontakt
        </StyledNavItem>
      </li>
      <li>
        <StyledNavItem to="/about" activeClassName="active">
          O Mnie
        </StyledNavItem>
      </li>
    </StyledMenu>
  </Wrapper>
);
