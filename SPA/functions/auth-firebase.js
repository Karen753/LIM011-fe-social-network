import { changeView } from '../view-controler/index.js'

export const initFire = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      changeView('#catalogo');
    } else {
      console.log('No user is signed in');
      changeView('');
    }
  });
};

// Crear usuario con email y password
export const firebaseSignIn = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
};

// Loguearse con email y password
export const firebaseLogIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
// Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });;
};

// Auth con Facebook
export const authFace = () => {
  console.log('funciona Facebook :) !');
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

//Auth con Google
export const authGoogle = () => {
  console.log('funciona google :) !');
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Desloguear cerrar sesion 
export const outUser = () => {
  return firebase.auth().signOut();
};
