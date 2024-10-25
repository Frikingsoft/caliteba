const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});


// document.getElementById('loginBtn').addEventListener('click', function() {
//     document.querySelector('.wrapper').style.display = 'block'; // Muestra el wrapper
// });

// // Para asegurarte de que el wrapper esté oculto por defecto, puedes añadir este CSS:
// document.querySelector('.icon-close').addEventListener('click', function() {
//     document.querySelector('.wrapper').style.display = 'none'; // Cierra el wrapper
// });
