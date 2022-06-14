import './helpers/initialize-firebase';
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

  createUserWithEmailAndPassword(auth, email, password).then(
    async userCredential => {
      console.log(`New user registered ${userCredential.user.email}`);
      try {
        const docRef = await addDoc(collection(db, 'users'), {
          email: email,
          password: password,
          films: [],
        });
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  );
}

async function loginUser(e) {
  e.preventDefault();
  const email = e.target.elements.emailLogin.value.trim();
  const password = e.target.elements.passwordLogin.value.trim();
  await signInWithEmailAndPassword(auth, email, password);
}

function logoutUser(e) {
  e.preventDefault();
  signOut(auth);
  console.log('out');
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

async function addFilm(filmId) {
  const userRef = doc(db, 'users', await getCurrentUserId());
  const fullMovieInfo = await apiService.fetchFullMovieInfo(filmId);
  const userFilms = await getFilms().then(films => {
    return films;
  });

  // додати перевірку якщо фільм вже доданий
  userFilms.push(fullMovieInfo);
  console.log(userFilms);
  await updateDoc(userRef, {
    films: userFilms,
  });
}

// addFilm(705867);
// addFilm(705865);
// addFilm(705866);
// addFilm(705865);

async function getFilms() {
  const userFilms = await getCurrentUserDoc().then(doc => {
    return doc.data().films;
  });
  //   const querySnapshot = await getDocs(collection(db, 'users'));
  //   querySnapshot.forEach(async doc => {
  //     try {
  //       if (doc.data().email === auth.currentUser.email) {
  //         films = doc.data().films;
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       return;
  //     }
  //   });

  return userFilms;
}

async function getCurrentUserId() {
  const userID = await getCurrentUserDoc().then(doc => {
    if (doc === undefined) {
      return;
    }
    return doc.id;
  });
  //   const querySnapshot = await getDocs(collection(db, 'users'));

  //   querySnapshot.forEach(async doc => {
  //     try {
  //       if (doc.data().email === auth.currentUser.email) {
  //         userID = doc.id;
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       return;
  //     }
  //   });
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

export { refs, logoutUser };
