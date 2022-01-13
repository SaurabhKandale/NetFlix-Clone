import './App.css';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Navbar/Nav';
import Row from './Components/Row/Row';
import requests from './reqsender';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} isLarge={true} />
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} /> 
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} /> 
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} /> 
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} /> 
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} /> 
      <div className="footer">
        <span>Powered By </span><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="" className="footer_img" />
      </div> 
    </div>
  );
}

export default App;
