import firebase, { firebaseRef } from '../../firebase';
import {
  OBTENER_PEDIDOS_INICIA,
  OBTENER_PEDIDOS_OK,
  OBTENER_PEDIDOS_ERROR,
  TOMAR_PEDIDO_INICIA,
  TOMAR_PEDIDO_OK,
  TOMAR_PEDIDO_ERROR
} from '../../constantes/ActionTypes';

export const obtenerPedidosInicia = () => ({
  type: OBTENER_PEDIDOS_INICIA });
export const obtenerPedidosOk = pedido => ({
  type: OBTENER_PEDIDOS_OK, pedido });
export const obtenerPedidosError = error =>
  ({ type: OBTENER_PEDIDOS_ERROR, error });

export const tomarPedidoInicia = () => ({
  type: TOMAR_PEDIDO_INICIA });
export const tomarPedidoOk = payload => ({
  type: TOMAR_PEDIDO_OK, payload });
export const tomarPedidoError = error => ({
  type: TOMAR_PEDIDO_ERROR, error });

/**
* funcion para obtener pedido
**/
export const iniciaObtenerPedido = () => {
  return dispatch => {
     dispatch(obtenerPedidosInicia());
      /**
      * funcion para obtener pedidos y envia
      * @param { Object } pedidos
      **/
      firebaseRef.child('pedidos').on('value', snapshot => {
        dispatch(obtenerPedidosOk( Object.keys(snapshot.val()).map( x => snapshot.val()[x] ) ) );
      });

  };
};

/**
* funcion tomar pedido
* @param { id, nombre } (repartidor)
* @param { idSolicitud, uid } (solicitud)
* @param { idPedido } (pedido)
**/
export const iniciaTomarPedido = ( id, nombre, idSolicitud, uid, idPedido ) => {
  return dispatch => {
    dispatch(tomarPedidoInicia());

    firebaseRef.child(`repartidor/${id}/data`).once( 'value' )
    .then( snapshot => {
      const nombre = snapshot.val().nombre;

      firebaseRef.child(`repartidor/${id}/pedidos`).push({ nombre: nombre, estado: 'aceptado', solicitud: idSolicitud })
      .then( () => {

        let actualiza = {};
        actualiza[`usuarios/${uid}/pedidos/${idPedido}/estado`] = 'aceptado';
        actualiza[`usuarios/${uid}/pedidos/${idPedido}/repartidor`] = nombre;
        firebaseRef.update(actualiza)
        .then( () => tomarPedidoOk, "aceptado")
        .catch( () => tomarPedidoError,"Error" );
      });
     });
  }
}
