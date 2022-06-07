import {queueArr} from './addToQueue'
export default function removeFromQueue(id) {
    const index = queueArr.findIndex(obj => obj.id === id);
    queueArr.splice(index, 1);
    console.log('unpressed', queueArr);
    localStorage.setItem('queue', JSON.stringify(queueArr));
}