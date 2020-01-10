// Crear usuario con email y password
// eslint-disable-next-line max-len
export const createUserAuth = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

// Loguearse con email y password
export const loginUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

// Auth con Facebook
export const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Auth con Google
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Observador del usuario
export const currentUser = () => firebase.auth().currentUser;

// Crear en colecciones en Firestore
export const addInFirestore = (nameCollection, id, set) => {
  const addCollection = firebase.firestore().collection(nameCollection).doc(id).set(set);
  return addCollection;
};

// Salir de sesión
export const outUser = () => firebase.auth().signOut();
