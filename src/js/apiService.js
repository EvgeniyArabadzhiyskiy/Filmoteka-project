import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '33da1ae0687d870981cf19ad4813876b';
const TREND_URL= `${BASE_URL}/trending/movie/day`;
let allGenres;

export default {
    async fetchTrendData(){
        const data =await axios.get(`${TREND_URL}?api_key=${API_KEY}`);
        return data.data;
    },

 async fetchGenresList(){
    const genres = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    allGenres = genres.data;
    return allGenres;
}
};