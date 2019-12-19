import { changeView } from './view-controler/index.js';
import { initFire } from './functions/auth-firebase.js';

const init = () => {
  const config = {
    apiKey: 'AIzaSyDKaqE2NpTEwcOS0rWDwUuVCJ94fcApoiQ',
    authDomain: 'pet-lovers-5dca4.firebaseapp.com',
    databaseURL: 'https://pet-lovers-5dca4.firebaseio.com',
    projectId: 'pet-lovers-5dca4',
    storageBucket: 'pet-lovers-5dca4.appspot.com',
    messagingSenderId: '436468793619',
    appId: '1:436468793619:web:358f143ed53c4732bc9ae6',
    measurementId: 'G-EDJD24K5SD',
  };

  firebase.initializeApp(config);

  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
  initFire();
};
window.addEventListener('load', init);
