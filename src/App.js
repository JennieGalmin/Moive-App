
import './App.css';
import SearchMovie from './Components/SearchMovie';
import {DiscoverMovie, PopularMovies, TrendingAll} from './Service/MovieService.js';


function App (){


  return (
    <div>

<SearchMovie />


<h1>Trending</h1>
<TrendingAll/>

<h1>Discover Movie</h1>
  <DiscoverMovie/>

<h1>Popular movies</h1>
  <PopularMovies/>
</div>
  );
}


export default App;
