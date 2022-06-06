import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '33da1ae0687d870981cf19ad4813876b';
const TREND_URL= `${BASE_URL}/trending/movie/day`;
const URL_ID = `${BASE_URL}/movie/`
let allGenres;
const input = document.querySelector(".form__search").elements.search;

export default {
   async fetchTrendData(page = 1){
        const data =await axios.get(`${TREND_URL}?api_key=${API_KEY}&page=${page}`);
          console.log(data.data);
        return data.data;
    },

 async fetchGenresList(){
    const genres = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    allGenres = genres.data;
    return allGenres;
},
async fetchFullMovieInfo(id){
   const movieFullInfo = await axios.get(`${URL_ID}/{id}?api_key=${API_KEY}`);
   movieInfo = movieFullInfo.data;
   console.log(movieInfo);
   return movieInfo;
},
async movieSearch(){
   const foundMovies = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${input.value}`);
   console.log(foundMovies.data);
   return foundMovies.data;
}
};