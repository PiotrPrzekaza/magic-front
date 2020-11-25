import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import ListItem from 'components/atoms/ListItem/ListItem';
import MenuBar from 'components/organizms/MenuBar/MenuBar';
import NavBar from 'components/molecules/NavBar/NavBar';
import GlobalStyle from 'assets/styles/GlobalStyle';
import logo from 'assets/images/Magiczna.png';

const Root = () => (
  <div className="App">
    <GlobalStyle />
    <div className="container">
      <header>
        <MenuBar>
          <div>
            <img src={logo} alt="" />
          </div>
          <Button> Sprawdź</Button>
          <NavBar>
            <ListItem>o mnie</ListItem>
            <ListItem>szydelko</ListItem>
            <ListItem>druty</ListItem>
            <ListItem>projecty</ListItem>
            <ListItem>kontakt</ListItem>
          </NavBar>
        </MenuBar>
        <Heading> magia szydełka</Heading>
      </header>
      <main>
        <section>
          <Heading>nagłówek</Heading>
        </section>
        <section>
          <Heading>jakiscontent</Heading>
        </section>
        <section>
          <Heading>jakiscontent</Heading>
        </section>
        <section>
          <Heading>jakiscontent</Heading>
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
  </div>
);

export default Root;
