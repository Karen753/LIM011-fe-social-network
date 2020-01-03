import { firebaseSignIn } from '../functions/auth-firebase.js';

export default () => {
  const contentViewSignIn = `
  <header class="header-inicio">
    <figure class="img-header">
      <img src="img/fondo-pet.jpg" alt="fondo de cabecera">
    </figure>
    <a href=""><h1 class="logo-home" >PET LOVERS</h1></a>
  </header>
  <form>
    <h1>Regístrate</h1>
    <input class= 'container' type="text" id='nameSignIn' placeholder="Nombre" required>
    <input  class= 'container' type="text" id='lastNameSignIn' placeholder="Apellidos" required>
    <input  class= 'container' type="email" id ='email' placeholder="Correo electrónico" required>
    <input    class= 'container'type="password" id ='password' placeholder="Contraseña nueva" required>
    <!-- <p>Fecha de nacimiento</p>
    <input type='date' required> -->
    <button href="" id='btnSignIn'>Crear cuenta</button>
  </form>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = contentViewSignIn;


  // Selección de elementos del DOM
  const btnSignIn = divElement.querySelector('#btnSignIn');
  btnSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailSignIn = divElement.querySelector('#email').value;
    const passwordSignIn = divElement.querySelector('#password').value;
    firebaseSignIn(emailSignIn, passwordSignIn);
  });
  return divElement;
};
