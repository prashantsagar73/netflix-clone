const API_KEY = "e31b15f6d28db1d6980887321440003a"


const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
    fethTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:  `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default request;