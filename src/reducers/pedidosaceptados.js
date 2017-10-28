import { combineReducers } from 'redux';

import {
  OBTENER_PEDIDOS_ACEPTADOS_INICIA,
  OBTENER_PEDIDOS_ACEPTADOS_OK,
  OBTENER_PEDIDOS_ACEPTADOS_ERROR
} from '../constantes/ActionTypes';

const estadoInicial = {
    aceptado : null
};


const  aceptado= (state = estadoInicial.aceptado, action) => {

  switch(action.type) {
    case OBTENER_PEDIDOS_ACEPTADOS_INICIA:
      return {
        ...state,
        obteniendo: true
      };
    case OBTENER_PEDIDOS_ACEPTADOS_OK:
      return {
        ...state,
        obteniendo: false,
        data: action.aceptados

      };
    case OBTENER_PEDIDOS_ACEPTADOS_ERROR:
      return {
        ...state,
        obteniendo: false,
        error: action.error
      };
    default: return state;
  };
};

export default combineReducers({
  aceptado
});
