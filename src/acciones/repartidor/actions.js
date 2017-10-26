import firebase, { firebaseRef, firebaseAuth } from '../../firebase';
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
* funcion para recibir el objeto de repartidor y crear usuario en firebase
* @param { Object } data
**/
export const iniciaGuardarRepartidor = data => {
  return dispatch => {
     dispatch(guardarRepartidorInicia());


     /**
     * funcion crear ususario en firebase
     * @param { Object } data
    **/
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
       /**
       * funcion para obtener direccion de repartidor y guarda
       * @param { Object } repartidor
       **/
       firebaseRef.child('repartidor').push(repartidor)
       .then( () => guardarRepartidorOk, "Almacenado con exito" )
       .catch( () => guardarRepartidorError, "Error" );
    })
  };
};
