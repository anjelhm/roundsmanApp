import firebase, { firebaseRef, firebaseAuth, firebaseStorage } from '../../firebase';
import {
  GUARDAR_REPARTIDOR_INICIA,
  GUARDAR_REPARTIDOR_OK,
  GUARDAR_REPARTIDOR_ERROR
} from '../../constantes/ActionTypes';

export const guardarRepartidorInicia = () => ({
  type: GUARDAR_REPARTIDOR_INICIA
})
export const guardarRepartidorOk = payload => ({
  type: GUARDAR_REPARTIDOR_OK, payload })
export const guardarRepartidorError = error =>
  ({ type: GUARDAR_REPARTIDOR_ERROR, error });

/**
* acción que registra un nuevo repartidor y crea su respectivo usuario en firebase
* @param { Object } data
**/
export const iniciaGuardarRepartidor = data => {
  return dispatch => {
     dispatch(guardarRepartidorInicia());

     firebaseAuth.createUserWithEmailAndPassword( data.correo, data.clave )
     .then( snapshot => {
       const repartidor = {
         nombre: data.nombre,
         paterno: data.paterno,
         materno: data.materno,
         fecha: data.fecha,
         sexo: data.sexo,
         correo: data.correo,
         id: snapshot.uid
       };
       const usuario = snapshot.uid;

       const storageFoto = firebaseStorage.ref(`archivos/${usuario}/foto`).put(data.foto);
              storageFoto.on('state_changed', snapshot => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
              }, (error) => {console.log(error);}, () => {
                const userRef = firebaseRef.child(`repartidor/${usuario}`);

               return userRef.set({
                 'data': {
                   'nombre':  data.nombre + ' ' + data.paterno + ' ' + data.materno,
                   'fecha': data.fecha,
                   'sexo': data.sexo,
                   'correo': data.correo,
                   'id': usuario,
                   'foto': storageFoto.snapshot.downloadURL
                 }
               });

            })
    })
  };
};
