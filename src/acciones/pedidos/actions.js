import firebase, { firebaseRef } from '../../firebase';
import {
  OBTENER_PEDIDOS_INICIA,
  OBTENER_PEDIDOS_OK,
  OBTENER_PEDIDOS_ERROR,
  TOMAR_PEDIDO_INICIA,
  TOMAR_PEDIDO_OK,
  TOMAR_PEDIDO_ERROR,
  OBTENER_PEDIDOS_ACEPTADOS_INICIA,
  OBTENER_PEDIDOS_ACEPTADOS_OK,
  OBTENER_PEDIDOS_ACEPTADOS_ERROR,
  CERRAR_PEDIDO_INICIA,
  CERRAR_PEDIDO_OK,
  CERRAR_PEDIDO_ERROR,
  INICIO
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

export const obtenerPedidosAceptadosInicia = () => ({
  type: OBTENER_PEDIDOS_ACEPTADOS_INICIA });
export const obtenerPedidosAceptadosOk = aceptados => ({
  type: OBTENER_PEDIDOS_ACEPTADOS_OK, aceptados });
export const obtenerPedidosAceptadosError = error => ({
  type: OBTENER_PEDIDOS_ACEPTADOS_ERROR, error });

export const cerrarPedidoInicia = () =>
  ({ type: CERRAR_PEDIDO_INICIA });
export const cerrarPedidoOk = payload =>
  ({ type: CERRAR_PEDIDO_OK, payload });
export const cerrarPedidoError = error =>
  ({ type: CERRAR_PEDIDO_ERROR, error });

export const pantallaInicio = id =>
  ({ type: INICIO, id });

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
        dispatch(obtenerPedidosOk( snapshot.val() ) );
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
      actualizaRepartidor[`repartidor/${datos.idRepartidor}/pedidos/${keyPedido}/pedidoRepartidor`] = keyPedido;
      actualizaRepartidor[`usuarios/${datos.uid}/pedidos/${datos.idPedido}/estado`] = 'aceptado';
      actualizaRepartidor[`usuarios/${datos.uid}/pedidos/${datos.idPedido}/repartidor`] = nombreRepartidor;
      actualizaRepartidor[`pedidos/${datos.idPedidos}`] = null;

      firebaseRef.update(actualizaRepartidor)
      .then( () => tomarPedidoOk("aceptado") )
      .catch( () => tomarPedidoError("Error") );


     });
  }
}

/**
* funcion para obtener pedidos que han sido aceptados aceptados
* @param { string } id
*/
export const iniciaObtenerPedidosAceptados = ( id ) => {
  return dispatch => {
     dispatch(obtenerPedidosAceptadosInicia());

      firebaseRef.child(`repartidor/${id}/pedidos/`).on('value', snapshot => {
        dispatch(obtenerPedidosAceptadosOk( snapshot.val() ) );
      });

  };
};

/**
 * funcion que cierra el pedido
 * elmina el pedido de misPedidos
 * Agrega el pedido al historial
*/
export const iniciaCerrarPedido = (solicitud, idRepartidor, idPedidoAceptado) => {
  return dispatch => {
    dispatch(cerrarPedidoInicia());

      firebaseRef.child(`repartidor/${idRepartidor}/pedidos/${idPedidoAceptado}/solicitud`).once('value')
        .then(snapshot => {
          if(solicitud === snapshot.val()){
            firebaseRef.child(`solicitudes/lista/${solicitud}`).once('value')
              .then(snapshot => {
                const historial = firebaseRef.child(`repartidor/${idRepartidor}/historial`).push();
                const claveHistorial = historial.key;

                const id = snapshot.val().id;
                const lista = snapshot.val().lista;
                const posicion = snapshot.val().posicion;
                const timestamp = snapshot.val().timestamp;
                const usuario = snapshot.val().usuario;
                const precio = snapshot.val().precio;

                firebaseRef.child(`usuarios/${snapshot.val().usuario}/datos/nombre`).once('value').then(snapshot =>{
                  let actualiza = {};
                  actualiza[`repartidor/${idRepartidor}/historial/${claveHistorial}/id`] = id;
                  actualiza[`repartidor/${idRepartidor}/historial/${claveHistorial}/lista`] = lista;
                  actualiza[`repartidor/${idRepartidor}/historial/${claveHistorial}/posicion`] = posicion;
                  actualiza[`repartidor/${idRepartidor}/historial/${claveHistorial}/timestamp`] = timestamp;
                  actualiza[`repartidor/${idRepartidor}/historial/${claveHistorial}/usuario`] = usuario;
                  actualiza[`repartidor/${idRepartidor}/historial/${claveHistorial}/precio`] = precio;
                  actualiza[`repartidor/${idRepartidor}/historial/${claveHistorial}/nombre`] = snapshot.val();
                  actualiza[`repartidor/${idRepartidor}/pedidos/${idPedidoAceptado}`] = null;
                  actualiza[`solicitudes/lista/${solicitud}`] = null;

                  firebaseRef.update(actualiza)
                  .then( () => {
                    cerrarPedidoOk("aceptado");
                    dispatch(pantallaInicio(idRepartidor));
                  })
                  .catch( () => cerrarPedidoError("Error") );
                })

              });

          } else {
            dispatch(cerrarPedidoError('No se encontraron coincidencias!'))
          }
        });

  };
};
