import firebase, { firebaseRef } from '../../firebase';
import {
  OBTENER_REPARTIDOR_INICIA,
  OBTENER_REPARTIDOR_OK,
  OBTENER_REPARTIDOR_ERROR
} from '../../constantes/ActionTypes';

export const obtenerRepartidorInicia = () => ({
  type: OBTENER_REPARTIDOR_INICIA })
export const obtenerRepartidorOk = payload => ({
  type: OBTENER_REPARTIDOR_OK, payload })
export const obtenerRepartidorError = error =>
  ({ type: OBTENER_REPARTIDOR_ERROR, error });

export const iniciaObtenerRepartidor = () => {
  return dispatch => {

  };
};
