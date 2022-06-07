let queueArr = [];
function addToQueue(data) {
    const { poster_path, original_title, vote_average, vote_count, popularity, overview, genres } = data;
    queueArr.push(data);
    localStorage.setItem('queue', JSON.stringify(queueArr));
    console.log('pressed queue btn', queueArr);
}
export { queueArr, addToQueue };