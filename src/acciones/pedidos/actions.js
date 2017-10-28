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
export const iniciaTomarPedido = ( datos ) => {
  return dispatch => {
    dispatch(tomarPedidoInicia());

    firebaseRef.child(`repartidor/${datos.idRepartidor}/data`).once( 'value' )
    .then( snapshot => {
      const nombreRepartidor = snapshot.val().nombre;

      const pedidosRepartidor = firebaseRef.child(`repartidor/${datos.idRepartidor}/pedidos`).push();
      const keyPedido = pedidosRepartidor.key;

      let actualizaRepartidor = {};

      actualizaRepartidor[`repartidor/${datos.idRepartidor}/pedidos/${keyPedido}/idRepartidor`] = datos.idRepartidor;
      actualizaRepartidor[`repartidor/${datos.idRepartidor}/pedidos/${keyPedido}/nombre`] = datos.nombre;
      actualizaRepartidor[`repartidor/${datos.idRepartidor}/pedidos/${keyPedido}/solicitud`] = datos.solicitud;
      actualizaRepartidor[`repartidor/${datos.idRepartidor}/pedidos/${keyPedido}/uid`] = datos.uid;
      actualizaRepartidor[`repartidor/${datos.idRepartidor}/pedidos/${keyPedido}/idPedido`] = datos.idPedido;
      actualizaRepartidor[`repartidor/${datos.idRepartidor}/pedidos/${keyPedido}/estado`] = 'aceptado';
      actualizaRepartidor[`usuarios/${datos.uid}/pedidos/${datos.idPedido}/estado`] = 'aceptado';
      actualizaRepartidor[`usuarios/${datos.uid}/pedidos/${datos.idPedido}/repartidor`] = nombreRepartidor;
      actualizaRepartidor[`pedidos/${datos.idPedidos}`] = null;

      firebaseRef.update(actualizaRepartidor)
      .then( () => tomarPedidoOk("aceptado") )
      .catch( () => tomarPedidoError("Error") );


     });
  }
}
