//registrar firebase
export const registrarUsuario = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

//login 
export const logear = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const observador = () => firebase.auth()
  .onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log('sesion iniciada') 
      
    }
});

//login  con Google
export const logInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase.auth().signInWithPopup(provider);
};

// login con Facebook

export const logInFacebook = () => {
  const facebook = new firebase.auth.FacebookAuthProvider();

 return firebase.auth().signInWithPopup(facebook);
 }

 //agregar post 
 export const añadirPost = (textarea) =>
  firebase.firestore().collection('publicaciones').add({
    post: textarea,
  });

  //cerrar sesion
   /*export const cerrarSesion = () => {
    firebase.auth().signOut()
   }; */
    // eliminar post 
    export const eliminarPost = (idPost) => {
      firebase.firestore().collection('publicaciones').doc(idPost).delete()
    }















































