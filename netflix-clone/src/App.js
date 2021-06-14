import logo from './logo.svg';
import './App.css';
import Row from './Row';
import request from './request';

function App() {
  return (
    <div className="App">
      <h1>hello prashant</h1>
      <Row title= "NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginal} />
      <Row title= "Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title= "Top Rated" fetchUrl={request.fetchTrending}/>
      <Row title= "Action Movies" fetchUrl={request.fetchTrending}/>
      <Row title= "Comedy Movies" fetchUrl={request.fetchTrending}/>
      <Row title= "Horror Movies" fetchUrl={request.fetchTrending}/>
      <Row title= "Romance Movies" fetchUrl={request.fetchTrending}/>
      <Row title= "Documentaries" fetchUrl={request.fetchTrending}/>
    </div>
  );
}

export default App;
