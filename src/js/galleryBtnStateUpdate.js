import { watchedArr, queueArr } from './modal-open';

export default function galleryBtnStateUpdate() {
    const libraryWatchedBtn = document.querySelectorAll('.btn-watche');
    const libraryQueueBtn = document.querySelectorAll('.btn-queue');
    libraryWatchedBtn.forEach(btn => {
        watchedArr.forEach(obj => {
            if (Number(btn.dataset.id) === obj.id) {
                btn.classList.add('pressed');
            }
            else {
                btn.classList.remove('pressed');
            }
        })
    });
    libraryQueueBtn.forEach(btn => {
        queueArr.forEach(obj => {
            if (Number(btn.dataset.id) === obj.id) {
                btn.classList.add('pressed');
            }
            else {
                btn.classList.remove('pressed');
            }
        })
    });
}