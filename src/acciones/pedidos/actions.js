import firebase, { firebaseRef } from '../../firebase';
import {
  OBTENER_PEDIDOS_INICIA,
  OBTENER_PEDIDOS_OK,
  OBTENER_PEDIDOS_ERROR
} from '../../constantes/ActionTypes';

export const obtenerPedidosInicia = () => ({
  type: OBTENER_PEDIDOS_INICIA })
export const obtenerPedidosOk = pedido => ({
  type: OBTENER_PEDIDOS_OK, pedido })
export const obtenerPedidosError = error =>
  ({ type: OBTENER_PEDIDOS_ERROR, error });

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
        dispatch(obtenerPedidosOk(snapshot.val()));
      });

  };
};
