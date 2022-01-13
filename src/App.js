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
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} /> 
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} /> 
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} /> 
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} /> 
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} /> 
    </div>
  );
}

export default App;
