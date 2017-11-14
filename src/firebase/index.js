import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBWc6TlAfbTdad0z0Y1xCKEId_KJtKlnEU",
    authDomain: "mandadito-dbfce.firebaseapp.com",
    databaseURL: "https://mandadito-dbfce.firebaseio.com",
    projectId: "mandadito-dbfce",
    storageBucket: "mandadito-dbfce.appspot.com",
    messagingSenderId: "968932363278"
  };

  firebase.initializeApp(config);

  export const firebaseRef = firebase.database().ref();
  export const firebaseAuth = firebase.auth();
  export const firebaseStorage = firebase.storage();
  export default firebase;
