import firebase, { firebaseRef, firebaseAuth } from '../../firebase';

import {
  AUTENTIFICACION_INICIAR,
  AUTENTIFICACION_CORRECTA,
  AUTENTIFICACION_ERROR,
  INICIO,
  INICIASESION
} from '../../constantes/ActionTypes';

export const autentificacionIniciar = () =>
  ({ type: AUTENTIFICACION_INICIAR });
export const autentificacionCorrecta = () =>
  ({ type: AUTENTIFICACION_CORRECTA });
export const autentificacionError = error =>
  ({ type: AUTENTIFICACION_ERROR, error });

export const pantallaInicio = () =>
  ({ type: INICIO });
export const pantallaIniciaSesion = () =>
    ({ type: INICIASESION });

/**
 * función para agregar el acceso al historial
 * @param correo (string)
*/
const registraAcceso = correo => {
  firebaseRef.child('historial').push({
    correo,
    tipo: 'acceso de repartidor',
    tiempo: firebase.database.ServerValue.TIMESTAMP
  });
};

/**
 * Acción para inicar autentificación por correo y contraseña
 * @param correo (string)
 * @param clave (string)
*/
export const iniciaAutentificacion = (correo, clave) => {
  return dispatch => {
      dispatch(autentificacionIniciar());

      firebaseAuth.signInWithEmailAndPassword(correo, clave)
        .then( () => {
          registraAcceso(correo);
          dispatch(autentificacionCorrecta());
          dispatch(pantallaInicio());
        })
        .catch(() => dispatch(autentificacionError('Ha ocurrido un error!')));
  };
};

/**
  * acción para enviar correo de restablecimiento de contraseña
  * @param correo
*/
export const enviaCorreoClave = correo => dispatch =>
  firebaseAuth.sendPasswordResetEmail(correo);

/**
 * accion para desautentificar al usuario y cerrar su sesion.
 */
export const desautentificar = () => {
  return dispatch => {
    firebaseAuth.signOut();
    dispatch(pantallaIniciaSesion());
  };
};
