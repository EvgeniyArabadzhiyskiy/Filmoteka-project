import {watchedArr} from './addToWatched'
export default function removeFromWatched(id) {
    const index = watchedArr.findIndex(obj => obj.id === id);
    watchedArr.splice(index, 1);
    console.log('unpressed', watchedArr);
    localStorage.setItem('watched', JSON.stringify(watchedArr));
}