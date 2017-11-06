import firebase, { firebaseRef } from '../../firebase';
import {
        OBTENER_ESTADO_INICIA,
        OBTENER_ESTADO_OK,
        OBTENER_ESTADO_ERROR,
        MODIFICAR_ESTADO_INICIA,
        MODIFICAR_ESTADO_OK,
        MODIFICAR_ESTADO_ERROR
} from '../../constantes/ActionTypes';

export const obtenerEstadoInicia = () => ({
  type: OBTENER_ESTADO_INICIA });
export const obtenerEstadoOk = estados => 
({ type: OBTENER_ESTADO_OK, estados });
export const obtenerEstadoError = error =>
  ({ type: OBTENER_ESTADO_ERROR, error });

  export const modificarEstadoInicia = () => ({
    type: MODIFICAR_ESTADO_INICIA });
  export const modificarEstadoOk = payload => ({
    type: MODIFICAR_ESTADO_OK, payload });
  export const modificarEstadoError = error =>
    ({ type: MODIFICAR_ESTADO_ERROR, error });


  export const iniciaObtenerEstado = (idUsuario,idPedido) => {
    return dispatch => {
       dispatch(obtenerEstadoInicia());
       firebaseRef.child(`usuarios/${idUsuario}/pedidos/${idPedido}/estado`).on('value', snapshot => {
         dispatch(obtenerEstadoOk(snapshot.val()));
       });
    };
  };

  export const iniciaCambiarEstado = (idUsario,idPedido,idRepartidor,idPedidoAceptado,estado) => {
    return dispatch => {
       dispatch(modificarEstadoInicia());
       let modificarEstado = {};
       modificarEstado[`usuarios/${idUsario}/pedidos/${idPedido}/estado`] = estado;
       modificarEstado[`repartidor/${idRepartidor}/pedidos/${idPedidoAceptado}/estado`] = estado;
       firebaseRef.update(modificarEstado)
       .then( () => modificarEstadoOk("aceptado") )
    };
  };
