// Modal open/close
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginBtnNav = document.querySelector('.login-btn'); // <- This is your navbar Login button
// **********************************************************************

// ******************************************

loginBtnNav.addEventListener('click', (e) => {
  e.preventDefault();
  loginModal.style.display = 'flex';
  document.body.classList.add('modal-open');
  document.querySelector('.form-box.login').style.display = 'block';
  document.querySelector('.form-box.register').style.display = 'none';
});

closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
  document.body.classList.remove('modal-open');
});


// Toggle Register/Login in Modal
document.querySelector('.register-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.form-box.login').style.display = 'none';
  document.querySelector('.form-box.register').style.display = 'block';
});

document.querySelector('.login-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.form-box.register').style.display = 'none';
  document.querySelector('.form-box.login').style.display = 'block';
});
