import React, {useState, useEffect} from 'react';
import axios from '../utils/axios';


const useFetchRandomMovie = (fetchUrl) => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {  
        fetchData();
    }, [])
    
    async function fetchData() {
        try {
            const response = await axios.get(fetchUrl);
            let r = Math.floor(Math.random() * (response.data.results.length - 1));
            setMovie(response.data.results[r]);
        } catch (error) {
            console.log("error: " + error);
        }
    }
    console.log(movie);

 
  return [movie];
    
};

export default useFetchRandomMovie