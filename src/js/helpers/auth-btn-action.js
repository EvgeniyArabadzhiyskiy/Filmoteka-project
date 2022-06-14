import { refs } from '../auth';
function onLoginBtn() {
  refs.loginForm.classList.remove('is-hidden');
  refs.loginBtn.classList.add('nav__current');
  refs.homeBtn.classList.remove('nav__current');
  refs.regBtn.classList.remove('nav__current');
  refs.formWrap.classList.remove('is-hidden');
  refs.regForm.classList.add('is-hidden');
}

function onRegBtn() {
  refs.regForm.classList.remove('is-hidden');
  refs.regBtn.classList.add('nav__current');
  refs.homeBtn.classList.remove('nav__current');
  refs.loginBtn.classList.remove('nav__current');
  refs.formWrap.classList.remove('is-hidden');
  refs.loginForm.classList.add('is-hidden');
}

export { onLoginBtn, onRegBtn };
