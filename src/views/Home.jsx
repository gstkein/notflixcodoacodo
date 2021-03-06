import './Home.css';
import Row from '../components/Row';
import requests from '../utils/request';
import Banner from '../components/Banner';
import Nav from '../components/Nav';

function Home() {
  return (
      <div className="Home">
        <Nav/>
        <Banner/>
        <Row isLargeRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      </div>
  );
}

export default Home;
