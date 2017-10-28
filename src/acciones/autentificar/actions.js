import firebase, { firebaseRef, firebaseAuth } from '../../firebase';

import {
  AUTENTIFICACION_INICIAR,
  AUTENTIFICACION_CORRECTA,
  AUTENTIFICACION_ERROR,
  INICIO,
  SESION
} from '../../constantes/ActionTypes';

export const autentificacionIniciar = () =>
  ({ type: AUTENTIFICACION_INICIAR });
export const autentificacionCorrecta = () =>
  ({ type: AUTENTIFICACION_CORRECTA });
export const autentificacionError = error =>
  ({ type: AUTENTIFICACION_ERROR, error });

export const pantallaInicio = id =>
  ({ type: INICIO, id });
export const pantallaSesion = () =>
  ({ type: SESION });

/**
 * función para agregar el acceso al historial
 * @param { string } correo
*/
const registraAcceso = correo => {
  firebaseRef.child('historial').push({
    correo,
    tipo: 'acceso de repartidor',
    tiempo: firebase.database.ServerValue.TIMESTAMP
  });
};

/**
 * Acción para iniciar autentificación por correo y contraseña
 * @param { string } correo
 * @param { string } clave
*/
export const iniciaAutentificacion = (correo, clave) => {
  return dispatch => {
      dispatch(autentificacionIniciar());

      firebaseAuth.signInWithEmailAndPassword(correo, clave)
        .then( user => {
          console.log(user);
          registraAcceso(correo);
          dispatch(autentificacionCorrecta());
          dispatch(pantallaInicio(user.uid));
        })
        .catch(() => dispatch(autentificacionError('Ha ocurrido un error!')));
  };
};

/**
  * acción para enviar correo de restablecimiento de contraseña
  * @param { string } correo
*/
export const enviaCorreoClave = correo => dispatch =>
  firebaseAuth.sendPasswordResetEmail(correo);

/**
 * acción para cerrar la sesión del usuario.
 */
export const desautentificar = () => {
  return dispatch => {
    firebaseAuth.signOut();
    dispatch(pantallaSesion());
  };
};


/**
 * Acción que verifica la sesión del usuario
*/
export const verificaSesion = () => {

  return dispatch => {
    firebaseAuth.onAuthStateChanged(
      user => {
        if (user) {
          dispatch(autentificacionCorrecta());
          dispatch(pantallaInicio(user.uid));
        }else{
          dispatch(pantallaSesion());
        }
      }
    );
  };

};
