import firebase, { firebaseRef } from '../../firebase';

import {
  OBTENER_LISTA_LLAMADAS_INICIA,
  OBTENER_LISTA_LLAMADAS_OK,
  OBTENER_LISTA_ERROR,
  TOMAR_PEDIDO_LLAMADA_INICIA,
  TOMAR_PEDIDO_LLAMADA_OK,
  TOMAR_PEDIDO_ERROR,
  OBTENER_PEDIDOS_ACEPTADOS_LLAMADAS_INICIA,
  OBTENER_PEDIDOS_ACEPTADOS_LLAMADAS_OK,
  OBTENER_PEDIDOS_ACEPTADOS_LLAMADAS_ERROR
} from '../../constantes/ActionTypes';

export const obtenerPedidosLlamadasInicia = () => ({
  type: OBTENER_PEDIDOS_LLAMADAS_INICIA });
export const obtenerPedidosLlamadasOk = pedidoLlamada => ({
  type: OBTENER_PEDIDOS_LLAMADAS_OK, pedidoLlamada });
export const obtenerPedidosLlamadasError = error =>
  ({ type: OBTENER_PEDIDOS_LLAMADAS_ERROR, error });

export const obtenerListaLlamadasInicia = () =>  ({
  type: OBTENER_LISTA_LLAMADAS_INICIA });
export const obtenerListaLlamadasOk = listaLlamadas => ({
  type: OBTENER_LISTA_LLAMADAS_OK, listaLlamadas });
export const obtenerListaLlamadasError = error => ({
  type: OBTENER_LISTA_LLAMADAS_ERROR, error });

export const tomarPedidoLlamadaInicia = () => ({
  type: TOMAR_PEDIDO_LLAMADA_INICIA });
export const tomarPedidoLlamadaOk = payload => ({
  type: TOMAR_PEDIDO_LLAMADA_OK, payload });
export const tomarPedidoLlamadaError = error => ({
  type: TOMAR_PEDIDO_LLAMADA_ERROR, error });

export const obtenerPedidosAceptadosLlamadasInicia = () => ({
  type: OBTENER_PEDIDOS_ACEPTADOS_LLAMADAS_INICIA });
export const obtenerPedidosAceptadosLlamadasOk = aceptadosLlamadas => ({
  type: OBTENER_PEDIDOS_ACEPTADOS_LLAMADAS_OK, aceptadosLlamadas });
export const obtenerPedidosAceptadosLlamadasError = error => ({
  type: OBTENER_PEDIDOS_ACEPTADOS_LLAMADAS_ERROR, error });

export const iniciaObtenerPedidoLlamada = () => {
  return dispatch => {
    dispatch(obtenerListaLlamadasInicia());
    firebaseRef.child('pedidosLlamadas').once('value', snapshot => {
      dispatch(obtenerListaLlamadasOk(snapshot.val() ) );
    });
  };
};

export const iniciaTomarPedidoLlamada = ( datos ) => {
  return dispatch => {
    dispatch(tomarPedidoLlamadaInicia());

    firebase.child(`repartidor/${datos.idRepartidor}/data`).once('value')
    .then(snapshot => {
      const nombreRepartidor = snapshot.val().nombre;
      const fotoRepartidor = snapshot.val().foto;

      const pedidosLlamadasRepartidor = firebaseRef.child(`repartidor/${datos.idRepartidor}/pedidosLlamadas`).push();
      const keyPedidoLlamada = pedidoLlamadaRepartidor.key;

      let actualizaLlamadasRepartidor = {};

      actualizaLlamadasRepartidor[`repartidor/${datos.idRepartidor}/pedidosLlamadas/${keyPedidosLlamadas}/idRepartidor`] = datos.idRepartidor;
      actualizaLlamadasRepartidor[`repartidor/${datos.idRepartidor}/pedidosLlamadas/${keyPedidosLlamadas}/direccion`] = datos.direccion;
      actualizaLlamadasRepartidor[`repartidor/${datos.idRepartidor}/pedidosLlamadas/${keyPedidosLlamadas}/estado`] = 'aceptado';
      actualizaLlamadasRepartidor[`repartidor/${datos.idRepartidor}/pedidosLlamadas/${keyPedidosLlamadas}/id`] = datos.id;
      actualizaLlamadasRepartidor[`repartidor/${datos.idRepartidor}/pedidosLlamadas/${keyPedidosLlamadas}/idLlamada`] = datos.idLlamada;
      actualizaLlamadasRepartidor[`repartidor/${datos.idRepartidor}/pedidosLlamadas/${keyPedidosLlamadas}/nombre`] = datos.nombre;
      actualizaLlamadasRepartidor[`repartidor/${datos.idRepartidor}/pedidosLlamadas/${keyPedidosLlamadas}/posicion`] = datos.posicion;

      actualizaLlamadasRepartidor[`solicitudes/${datos.idPedidoLlamada}/estado`] = 'aceptado';
      actualizaLlamadasRepartidor[`solicitudes/${datos.idPedidoLlamada}/foto`] = fotoRepartidor;
      actualizaLlamadasRepartidor[`solicitudes/${datos.idPedidoLlamada}/repartidor`]= nombreRepartidor;
      actualizaLlamadasRepartidor[`pedidosLlamadas/${datos.idPedidosLlamadas}`] = null;

      firebaseRef.update(actualizaLlamadasRepartidor)
      .then( () => tomarPedidoLlamadaOk("Aceptado") )
      .catch( () => tomarPedidoLlamadaError("Error") );
    })
  }
}

/**
*aceptados
*/
export const iniciaObtenerPedidosAceptadosLlamadas = ( id ) => {
  return dispatch => {
    dispatch(obtenerPedidosAceptadosLlamadasInicia());
    firebaseRef.child(`repartidor/${id}/pedidosLlamadas/`).on('value', snapshot => {
      dispatch(obtenerPedidosAceptadosLlamadasOk( snapshot.val() ) );
    });
  };
};

/**
*Lista pedido por llamadas
*/
export const iniciaObtenerListaLlamadas = () => {
  return dispatch => {
    dispatch(obtenerListaLlamadasInicia());
    firebaseRef.child('pedidosLlamadas').on('value', snapshot => {
      dispatch(obtenerListaLlamadasOk( snapshot.val() ) );
    });
  };
};
