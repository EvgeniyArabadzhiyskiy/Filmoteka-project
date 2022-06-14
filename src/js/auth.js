import app from './helpers/initialize-firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from 'firebase/firestore';
import apiService from './apiService';
import { onLoginBtn, onRegBtn } from './helpers/auth-btn-action';

const db = getFirestore(app);
const auth = getAuth();

const refs = {
  formWrap: document.querySelector('.form-auth'),
  loginForm: document.querySelector('[name="loginForm"]'),
  regForm: document.querySelector('[name="regForm"]'),
  regBtn: document.querySelector('[name="regBtn"]'),
  loginBtn: document.querySelector('[name="loginBtn"]'),
  libBtn: document.querySelector('.nav__library'),
  logoutBtn: document.querySelector('[name="logoutBtn"]'),
  homeBtn: document.querySelector('.nav__home'),
};

refs.regForm.addEventListener('submit', regNewUser);
refs.loginForm.addEventListener('submit', loginUser);
refs.logoutBtn.addEventListener('click', logoutUser);
refs.loginBtn.addEventListener('click', onLoginBtn);
refs.regBtn.addEventListener('click', onRegBtn);

onAuthStateChanged(auth, async user => {
  if (user) {
    ifUserLogged();
  }
  if (!user) {
    ifUserLoggedOut();
  }
});

function regNewUser(e) {
  e.preventDefault();
  const email = e.target.elements.emailReg.value.trim();
  const password = e.target.elements.passwordReg.value.trim();
  if (email === '' || password === '') {
    refs.regForm.querySelector('.error').innerHTML =
      'Input fields are not filled';
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(async userCredential => {
      console.log(`New user registered ${userCredential.user.email}`);
      try {
        const docRef = await addDoc(collection(db, 'users'), {
          email: email,
          password: password,
          watched: [],
          queue: [],
        });
        refs.regForm.querySelector('.error').innerHTML = '';
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    })
    .catch(error => {
      refs.regForm.querySelector('.error').innerHTML = error.message;
    });
}

async function loginUser(e) {
  e.preventDefault();
  const email = e.target.elements.emailLogin.value.trim();
  const password = e.target.elements.passwordLogin.value.trim();
  if (email === '' || password === '') {
    refs.loginForm.querySelector('.error').innerHTML =
      'Input fields are not filled';
    return;
  }
  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      refs.loginForm.querySelector('.error').innerHTML = '';
    })
    .catch(error => {
      refs.loginForm.querySelector('.error').innerHTML = error.message;
    });
}

function logoutUser(e) {
  e.preventDefault();
  signOut(auth);
}

function ifUserLogged() {
  refs.logoutBtn.classList.remove('is-hidden');
  refs.libBtn.classList.remove('is-hidden');
  refs.loginBtn.classList.add('is-hidden');
  refs.regBtn.classList.add('is-hidden');
  refs.regForm.classList.add('is-hidden');
  refs.formWrap.classList.add('is-hidden');
}

function ifUserLoggedOut() {
  refs.loginBtn.classList.remove('is-hidden');
  refs.regBtn.classList.remove('is-hidden');
  refs.libBtn.classList.add('is-hidden');
  refs.logoutBtn.classList.add('is-hidden');
}

async function addFilm(e) {
  //   filmId = e.target.dataset.id;
  let curFilm;
  const userRef = doc(db, 'users', await getCurrentUserId());
  const fullMovieInfo = await apiService.fetchFullMovieInfo(e);
  const userFilms = await getFilms().then(films => {
    films.forEach(film => {
      curFilm = film.id;
      return curFilm;
    });
    return films;
  });

  if (e.includes(curFilm)) {
    console.log('added');
    return;
  }

  userFilms.push(fullMovieInfo);
  await updateDoc(userRef, {
    watched: userFilms,
  });
  return userFilms;
}

// async function deleteFilm(e) {
//   filmId = e.target.dataset.id;
//   let curFilm;
//   const userRef = doc(db, 'users', await getCurrentUserId());
//   const userFilms = await getFilms().then(films => {
//     films.forEach(film => {
//       curFilm = film.id;
//       return curFilm;
//     });
//     return films;
//   });

//   await updateDoc(userRef, {
//     films: userFilms,
//   });
// }

// const card = document.querySelector('.movie-card__container');
// card.addEventListener('click', addFilm);

async function getFilms() {
  const userFilms = await getCurrentUserDoc().then(doc => {
    return doc.data().watched;
  });

  return userFilms;
}

async function getCurrentUserId() {
  const userID = await getCurrentUserDoc().then(doc => {
    if (doc === undefined) {
      return;
    }
    return doc.id;
  });

  return userID;
}

async function getCurrentUserDoc() {
  const querySnapshot = await getDocs(collection(db, 'users'));
  let document;
  if (auth.currentUser === null) {
    return;
  }
  querySnapshot.forEach(async doc => {
    try {
      if (doc.data().email === auth.currentUser.email) {
        document = doc;
      }
    } catch (error) {
      console.log(error);
    }
  });

  return document;
}

async function getAllUsersDoc() {
  let allDocs = [];
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach(doc => {
    try {
      allDocs.push(doc.data().email);
    } catch (error) {
      console.log(error);
    }
  });

  return allDocs;
}

export { refs, logoutUser, addFilm };
