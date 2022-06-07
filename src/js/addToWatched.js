let watchedArr = [];
function addToWatched(data) {
    const { poster_path, original_title, vote_average, vote_count, popularity, overview, genres } = data;
    watchedArr.push(data);
    localStorage.setItem('watched', JSON.stringify(watchedArr));
    console.log('pressed watch btn', watchedArr);
}
export { watchedArr, addToWatched };