import { añadirPost, eliminarPost } from "../controladorfirebase.js";

export const INTERACCIONES = () => {
    const db = firebase.firestore();
  
    const viewHome = `
    <header>
    <nav>
     <p>Usuario</p>
     <h1 class="loguito">FOODBOOK</h1>
     <button id='cerrar-sesion'>Cerrar Sesión</button>
		</nav>
    </header>
    
  
    <section>
    <div id="contenido-post">
          <textarea id="texto" placeholder="¿Que estas pensando"cols="30" rows="10"></textarea>
          <div class="compartir">
              <button class="publicar" id="publicar">PUBLICAR</button>
          </div>
          </div> 
    
     <div id='tabla'></div>
    
    </section> `;
  
    const divElem = document.createElement('div');
    divElem.innerHTML = viewHome;

  //PUBLICAR
    const publicar = divElem.querySelector('#publicar');

    publicar.addEventListener('click', (e) => {
      e.preventDefault()
      const textarea = divElem.querySelector('#texto').value;
      console.log(textarea);
      añadirPost(textarea);
      divElem.querySelector('#texto').value = '';
  
    });
  
  //LISTA DE PUBLICACIONES
    const listaPublicaciones = divElem.querySelector('#tabla');

    db.collection('publicaciones').onSnapshot((querySnapshot) => {
      listaPublicaciones.innerHTML = '';
      querySnapshot.forEach((doc) => {
        listaPublicaciones.innerHTML += `
        <div id='post-publicado'>
      <div id='caja-post'>
        <div class="text">${doc.id}</div></br>
        <div class="text">${doc.data().post}</div><br>
    <div class="btn-post">
    <span id="btn-eliminar-${doc.id}"><img src="imagenes/bannerloguito.png" /></span>
    </div>`
    })}
    // BORRAR PUBLICACIONES
    document.querySelector(`#btn-eliminar-${doc.id}`).addEventListener('click' , () =>{
      alert('si funciona el boton')
   
    })
    );
    
       
  
  
    return divElem;
};
