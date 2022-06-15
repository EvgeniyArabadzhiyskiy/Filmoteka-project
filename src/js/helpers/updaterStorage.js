export const updaterStorage = {
    
  addToLibrary(data, arr, key) {
    arr.push(data);
    localStorage.setItem(`${key}`, JSON.stringify(arr));
  },

  removeFromLibrary(id, arr, key) {
    const index = arr.findIndex(obj => obj.id === Number(id));
    arr.splice(index, 1);
    localStorage.setItem(`${key}`, JSON.stringify(arr));
  },
};
