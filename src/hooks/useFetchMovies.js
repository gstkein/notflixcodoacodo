import React, {useState, useEffect} from 'react';
import axios from '../utils/axios';

const useFetchMovies = (fetchUrl) => {

    const [movies,setMovies] = useState([])

    useEffect(() => {   
        fetchRowData();
      }, [fetchUrl]);  
          
      const fetchRowData = async () => {
        try {
            const response = await axios.get(fetchUrl);
            console.log(response);
            setMovies(response.data.results);
       //     return response;
          } catch (error) {
            console.log("error: " + error);
        }
      };

  return [movies]
}

export default useFetchMovies