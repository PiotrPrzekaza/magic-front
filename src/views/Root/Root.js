import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'assets/styles/GlobalStyle';
import logo from 'assets/images/Magiczna.png';

const Root = () => (
  <div className="App">
    <GlobalStyle />
    <div className="container">
      <header>
        <nav>
          <div>
            <img src={logo} alt="" />
          </div>
          <Button> Sprawdź</Button>
          <Button small> Zamów</Button>
          <ul>
            <li>o mnie</li>
            <li>szydelko</li>
            <li>druty</li>
            <li>projecty</li>
            <li>kontakt</li>
          </ul>
        </nav>
        <h1> magia szydełka</h1>
      </header>
      <main>
        <div>
          <h2>jakiscontent</h2>
        </div>
        <div>
          <h2>jakiscontent</h2>
        </div>
        <div>
          <h2>jakiscontent</h2>
        </div>
        <div>
          <h2>jakiscontent</h2>
        </div>
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
