import { combineReducers } from 'redux';

import {
  OBTENER_PEDIDOS_INICIA,
  OBTENER_PEDIDOS_OK,
  OBTENER_PEDIDOS_ERROR
} from '../constantes/ActionTypes';

const estadoInicial = {
     pedidos : null
};

const pedidos = (state = estadoInicial.pedidos, action) => {

  switch(action.type) {
    case OBTENER_PEDIDOS_INICIA:
      return {
        ...state,
        obteniendo: true
      };
    case OBTENER_PEDIDOS_OK:
      return {
        ...state,
        obteniendo: false,
        data: action.pedido
      };
    case OBTENER_PEDIDOS_ERROR:
      return {
        ...state,
        obteniendo: false,
        error: action.error
      };
    default: return state;
  };
};

export default combineReducers({
  pedidos
});
