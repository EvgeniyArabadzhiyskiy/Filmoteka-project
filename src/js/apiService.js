import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
// '/discover/movie?sort_by=popularity.desc';
const API_KEY = '33da1ae0687d870981cf19ad4813876b';

export default {
    async fetchData(){
        const data =await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
          return data;
    },
};