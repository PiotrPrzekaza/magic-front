import React from 'react';
import Card from 'components/molecules/Card/Card';
import Heading from 'components/atoms/Heading/Heading';
import ListItem from 'components/atoms/ListItem/ListItem';
import MenuBar from 'components/organizms/MenuBar/MenuBar';
import ImageItem from 'components/atoms/ImageItem/ImageItem';
import GlobalStyle from 'assets/styles/GlobalStyle';
import theme from 'assets/styles/theme';
import logo from 'assets/images/Magiczna.png';
import { ThemeProvider } from 'styled-components';

const Root = () => (
  <div className="App">
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <div className="container">
        <header>
          <MenuBar>
            <ImageItem src={logo} alt="" />
            <nav>
              <ListItem>o mnie</ListItem>
              <ListItem>szydelko</ListItem>
              <ListItem>druty</ListItem>
              <ListItem>projecty</ListItem>
              <ListItem>kontakt</ListItem>
            </nav>
          </MenuBar>
          <Heading> magia szydełka</Heading>
        </header>
        <main>
          <section>
            <Card />
          </section>
          <section>
            <Card />
          </section>
          <section>
            <Card />
          </section>
          <section>
            <Card />
          </section>
        </main>
        <footer>
          <div>
            <p>sociale: </p>
            <ul>
              <li>Insta</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div>
            <p>magiczna-petelka.io</p>
            <p>powered by Pepe-dev &copy;</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  </div>
);

export default Root;
