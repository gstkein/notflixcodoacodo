import React, {useState, useEffect} from 'react';
import useFetchMovies from '../hooks/useFetchMovies';
import './Row.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function Row({title,fetchUrl,isLargeRow}) {


  const POSTER_SIZE = 'w200';
  const BASE_POSTER_URL = "https://image.tmdb.org/t/p/";

  const [movies] = useFetchMovies(fetchUrl);

 // console.table(movies);
 
 const handleDragStart = (e) => e.preventDefault();

 let items = [];
 movies.map(movie => (
  (movie.poster_path  &&  movie.backdrop_path) && (
 items.push(<img 
 className={`row_poster ${isLargeRow && "row_poster_large"}`} 
 key={movie.id} 
 src={`${BASE_POSTER_URL}${POSTER_SIZE}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
 alt={movie.name}
 onDragStart={handleDragStart} 
 role="presentation"
  />))
))

 let responsive = {
  0: { items: 9 },
  568: { items: 9},
  1024: { items: 9 },
};


  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
        {}
        <AliceCarousel mouseTracking items={items}  disableDotsControls  responsive={responsive} disableSlideInfo />
        </div>
    </div>
  )
}

export default Row