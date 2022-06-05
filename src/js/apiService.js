import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
// '/discover/movie?sort_by=popularity.desc';
const API_KEY = '33da1ae0687d870981cf19ad4813876b';
const TREND_URL= `${BASE_URL}/trending/movie/day`;
// async function fetchData(){
//     const data = await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
//     return data;
// }
// export default fetchData();

export default {
    async fetchTrendData(){
        const data =await axios.get(`${TREND_URL}?api_key=${API_KEY}`);
          console.log(data.data);
        return data.data;
    },

 async fetchGenresList(){
    const genres = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    console.log(genres.data);
    return genres.data;
}
};