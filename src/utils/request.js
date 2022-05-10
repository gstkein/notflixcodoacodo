const TMDB_API_KEY = "b85515ea81311d976469ce7367295c6e";

const requests = {
fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&1anguage=en—US`,
fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
fetchTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&1anguage=en—US`,
fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with__genres=35`,
fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
fetchDocumentaries: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`,
};

export default requests;