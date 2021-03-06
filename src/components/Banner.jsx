import React, {useState, useEffect} from 'react'
import requests from '../utils/request';
import useFetchRandomMovie from '../hooks/useFetchRandomMovie';
import styles from './Banner.component.css';



const Banner = () => {

    const [movie] = useFetchRandomMovie(requests.fetchNetflixOriginals);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
    <header 
    className="banner"
    style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: 'center center',
        }}
        >
        <div className="banner_contents">
         
            <h1 className="banner_title">
                {movie?.name || movie?.title || movie?.original_name}
            </h1>

            <div className='banner_buttons'>
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>

            <h1 className="banner_description">
                {movie && truncate(movie?.overview, 150)}
            </h1>           
        </div>
        <div className="banner_fadeBottom"></div>
    </header>
  )
}

export default Banner
