import firebase, { firebaseRef } from '../../firebase';
import {
        OBTENER_HISTORIAL_INICIA,
        OBTENER_HISTORIAL_OK,
        OBTENER_HISTORIAL_ERROR,
        OBTENER_LISTA_HISTORIAL_INICIA,
        OBTENER_LISTA_HISTORIAL_OK,
        OBTENER_LISTA_HISTORIAL_ERROR,
        ELIMINAR_ITEM_HISTORIAL_INICIA,
        ELIMINAR_ITEM_HISTORIAL_OK,
        ELIMINAR_ITEM_HISTORIAL_ERROR
      } from '../../constantes/ActionTypes';

export const obtenerHistorialInicia = () => ({
  type: OBTENER_HISTORIAL_INICIA });
export const obtenerHistorialOk = payload =>
({ type: OBTENER_HISTORIAL_OK, payload });
export const obtenerHistorialError = error =>
  ({ type: OBTENER_HISTORIAL_ERROR, error });

export const obtenerListaHistorialInicia = () =>
  ({  type: OBTENER_LISTA_HISTORIAL_INICIA });
export const obtenerListaHistorialOk = lista =>
  ({ type: OBTENER_LISTA_HISTORIAL_OK, lista });
export const obtenerListaHistorialError = error =>
  ({ type: OBTENER_LISTA_HISTORIAL_ERROR, error });

export const eliminarItemHistorialInicia = () =>
  ({ type: ELIMINAR_ITEM_HISTORIAL_INICIA });
export const eliminarItemHistorialOk = payload =>
  ({ type: ELIMINAR_ITEM_HISTORIAL_OK, payload });
export const eliminarItemHistorialError = error =>
  ({ type: ELIMINAR_ITEM_HISTORIAL_ERROR, error });

  export const iniciaObtenerHistorial = ( idRepartidor ) => {
    return dispatch => {
       dispatch(obtenerHistorialInicia());

        firebaseRef.child(`repartidor/${idRepartidor}/historial/`).on('value', snapshot => {
            dispatch(obtenerHistorialOk(snapshot.val() ) );
        });

    };
  };
  
/**
* accion que recupera la lista del pedido en el historial
* @param { string } idRepartidor
* @param { string } idHistorial
*/
export const iniciaObtenerListaHistorial = (idRepartidor, idHistorial) => {
  return dispatch => {
    dispatch(obtenerListaHistorialInicia());
    firebaseRef.child(`repartidor/${idRepartidor}/historial/${idHistorial}`).once('value')
      .then(snapshot => {
        dispatch(obtenerListaHistorialOk(snapshot.val()));
      })
      .catch(() => dispatch(obtenerListaHistorialError('Ha ocurrido un error')));
  };
};

/**
* accion que elimina un item de la lista de historial
* @param { string } idRepartidor
* @param { string } idHistorial
*/
export const iniciaEliminarItemHistorial = (idRepartidor, idHistorial) => {
  return dispatch => {
    dispatch(eliminarItemHistorialInicia());
    let actualiza = {};
    
    actualiza[`repartidor/${idRepartidor}/historial/${idHistorial}`] = null;

    firebaseRef.update(actualiza)
    .then( () => eliminarItemHistorialOk("Eliminado") )
    .catch( () => eliminarItemHistorialError("Error") );
  };
};
