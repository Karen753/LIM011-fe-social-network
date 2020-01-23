import {
  logear, logInGoogle, logInFacebook, observador,
} from '../controladorfirebase.js';


export const HOME = () => {
  const viewHome = `
    <div class="contenedor flex">
    <img class="logo" src="./imagenes/loguito.png" >
        <form class="formulario flex">
          <input class="inputs flex" id="email" placeholder="ejemplo@hotmail.com" type="text">
          <input class="inputs flex" id="password" placeholder="Contraseña" type="password">
           <div class="recuadro flex"> 
            <button class= "boton verde bold" type="button" id="btn_ingresar">INGRESA</button>
          <div class="logo_redes">
            <input id="facebook" type=image src="./imagenes/facebook.svg">
            <input id="google" type=image src="./imagenes/google.svg">
          </div>
            <p class="parrafo"> Bienvenid@ , Conéctate con tu red social preferida <br> y comparte tus conocimientos de cocina. </p>
            <p class="flex">¿No tienes una cuenta? <a href="#/registro" id="enlace_registrar" class="azul bold">Regístrate</a></p>
          </div>
        </form>
    </div> `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewHome;
  divElem.querySelector('#btn_ingresar').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    logear(email, password)
      .then(() => {
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        const url = window.location.href;
        window.location.href = `${url}#/interacciones`;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // eslint-disable-next-line no-alert
        alert('Debes ingresar un correo electrónico válido' + '\n Verifique su contraseña');
      });
  });


  // click google
  divElem.querySelector('#google').addEventListener('click', (e) => {
    e.preventDefault();

    logInGoogle();
  });
  // click facebbok
  divElem.querySelector('#facebook').addEventListener('click', (e) => {
    e.preventDefault();

    logInFacebook();
  });

  observador();


  return divElem;
};
