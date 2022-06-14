import { refs } from '../auth';
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

export { onLoginBtn, onRegBtn };
