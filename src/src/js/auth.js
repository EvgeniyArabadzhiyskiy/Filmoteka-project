import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import apiService from './apiService';

const firebaseConfig = {
  apiKey: 'AIzaSyDl7udEYc6yHxHTsho7iDZ8HPitihaHEU4',
  authDomain: 'filmoteka-46cf5.firebaseapp.com',
  databaseURL:
    'https://filmoteka-46cf5-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-46cf5',
  storageBucket: 'filmoteka-46cf5.appspot.com',
  messagingSenderId: '1056346694690',
  appId: '1:1056346694690:web:c5c566f94f38d4dac1167b',
  measurementId: 'G-9M2V8M9NTK',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();

const refs = {
  formWrap: document.querySelector('.form-auth'),
  libBtn: document.querySelector('.nav__library'),
  regForm: document.querySelector('[name="regForm"]'),
  regBtn: document.querySelector('[name="regBtn"]'),
  loginForm: document.querySelector('[name="loginForm"]'),
  logoutBtn: document.querySelector('[name="logoutBtn"]'),
  loginBtn: document.querySelector('[name="loginBtn"]'),
};

refs.regForm.addEventListener('submit', regNewUser);
refs.loginForm.addEventListener('submit', loginUser);
refs.logoutBtn.addEventListener('click', logoutUser);
refs.loginBtn.addEventListener('click', onLoginBtn);
refs.regBtn.addEventListener('click', onRegBtn);

onAuthStateChanged(auth, async user => {
  if (user) {
    refs.logoutBtn.classList.remove('is-hidden');
    refs.libBtn.classList.remove('is-hidden');
    refs.loginBtn.classList.add('is-hidden');
    refs.regBtn.classList.add('is-hidden');
  }
  if (!user) {
    refs.loginBtn.classList.remove('is-hidden');
    refs.regBtn.classList.remove('is-hidden');
    refs.libBtn.classList.add('is-hidden');
    refs.logoutBtn.classList.add('is-hidden');
    return;
  }
});

function logoutUser(e) {
  e.preventDefault();
  signOut(auth);
  refs.libBtn.classList.add('is-hidden');
}

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
          films: {},
        });
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
      refs.regForm.classList.add('is-hidden');
      refs.formWrap.classList.add('is-hidden');
    }
  );
}

async function addFilm(filmId) {
  const userRef = doc(db, 'users', await getCurrentUserId());
  const fullMovieInfo = await apiService.fetchFullMovieInfo(filmId);

  await updateDoc(userRef, {
    films: fullMovieInfo,
  });
}
// addFilm(705865); // симуляція додавання фільму в док юзера

async function getCurrentUserId() {
  let userID;
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach(async doc => {
    try {
      if (doc.data().email === auth.currentUser.email) {
        userID = doc.id;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  });
  try {
  } catch (error) {}

  return userID;
}

async function loginUser(e) {
  e.preventDefault();
  const email = e.target.elements.emailLogin.value.trim();
  const password = e.target.elements.passwordLogin.value.trim();
  const user = auth.currentUser;
  await signInWithEmailAndPassword(auth, email, password);
  refs.loginForm.classList.add('is-hidden');
  refs.formWrap.classList.add('is-hidden');
}

function onLoginBtn() {
  refs.loginForm.classList.remove('is-hidden');
  refs.formWrap.classList.remove('is-hidden');
  refs.regForm.classList.add('is-hidden');
}

function onRegBtn() {
  refs.regForm.classList.remove('is-hidden');
  refs.formWrap.classList.remove('is-hidden');
  refs.loginForm.classList.add('is-hidden');
}
