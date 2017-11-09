import firebase, { firebaseRef } from '../../firebase';
import {
        OBTENER_HISTORIAL_INICIA,
        OBTENER_HISTORIAL_OK,
        OBTENER_HISTORIAL_ERROR
      } from '../../constantes/ActionTypes';

export const obtenerHistorialInicia = () => ({
  type: OBTENER_HISTORIAL_INICIA });
export const obtenerHistorialOk = payload =>
({ type: OBTENER_HISTORIAL_OK, payload });
export const obtenerHistorialError = error =>
  ({ type: OBTENER_HISTORIAL_ERROR, error });

  export const iniciaObtenerHistorial = ( idRepartidor ) => {
    return dispatch => {
       dispatch(obtenerHistorialInicia());

        firebaseRef.child(`repartidor/${idRepartidor}/historial/`).on('value', snapshot => {
          dispatch(obtenerHistorialOk( snapshot.val() ) );
        });

    };
  };
