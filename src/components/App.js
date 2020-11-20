import './App.css';
import logo from '../assets/images/Magiczna.png';

const App = () => (
  <div className="App">
    <div className="container">
      <header>
        <nav>
          <div>
            <img src={logo} alt="" />
          </div>
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
        <div>jakiscontent</div>
        <div>jakiscontent</div>
        <div>jakiscontent</div>
        <div>jakiscontent</div>
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

export default App;
