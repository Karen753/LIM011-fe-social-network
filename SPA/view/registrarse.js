import prueba from '../view-controler/register-controller.js';

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
    <input type="text" id='nameSignIn' placeholder="Nombre" required>
    <input type="text" id='lastNameSignIn' name= 'lastName' placeholder="Apellidos" required>
    <input type="email" id ='email' placeholder="Correo electrónico" required>
    <input type="password" id ='password' placeholder="Contraseña nueva" required>
    <button href="" id='btnRegister'>Crear cuenta</button>
  </form>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = contentViewSignIn;

  // Selección de elementos del DOM
  const btnRegister = divElement.querySelector('#btnRegister');
  btnRegister.addEventListener('click', prueba);
};
