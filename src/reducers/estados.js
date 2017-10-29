import { combineReducers } from 'redux';

import {
  OBTENER_ESTADO_INICIA,
  OBTENER_ESTADO_OK,
  OBTENER_ESTADO_ERROR,
  MODIFICAR_ESTADO_INICIA,
  MODIFICAR_ESTADO_OK,
  MODIFICAR_ESTADO_ERROR
} from '../constantes/ActionTypes';

const estadoInicial = {
    estado : null,
    cambiaEstado : null
};


const estadoPedido = (state = estadoInicial.estado , action) => {

  switch(action.type) {
    case OBTENER_ESTADO_INICIA:
      return {
        ...state,
        obteniendo: true
      };
    case OBTENER_ESTADO_OK:
      return {
        ...state,
        obteniendo: false,
        data: action.estados

      };
    case OBTENER_ESTADO_ERROR:
      return {
        ...state,
        obteniendo: false,
        error: action.error
      };
    default: return state;
  };
};


const cambiaEstado  = (state = estadoInicial.cambiaEstado, action) => {

  switch(action.type) {
    case MODIFICAR_ESTADO_INICIA:
      return {
        ...state,
        cambiando : true
      };
    case MODIFICAR_ESTADO_OK:
      return {
        ...state,
        cambiando : false,
        mensaje : action.payload

      };
    case MODIFICAR_ESTADO_ERROR:
      return {
        ...state,
        cambiando : false,
        error : action.error
      };
    default: return state;
  };
};
export default combineReducers({
  estadoPedido,
  cambiaEstado
});
