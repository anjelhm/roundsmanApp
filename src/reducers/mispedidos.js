import { combineReducers } from 'redux';

import {
  TOMAR_PEDIDO_INICIA,
  TOMAR_PEDIDO_OK,
  TOMAR_PEDIDO_ERROR
} from '../constantes/ActionTypes';

const estadoInicial = {
    tomar : null
};


const tomar = (state = estadoInicial.tomar, action) => {

  switch(action.type) {
    case TOMAR_PEDIDO_INICIA:
      return {
        ...state,
        guardando: true
      };
    case TOMAR_PEDIDO_OK:
      return {
        ...state,
        guardando: false,
        mensaje: action.payload
      };
    case TOMAR_PEDIDO_ERROR:
      return {
        ...state,
        guardando: false,
        error: action.error
      };
    default: return state;
  };
};

export default combineReducers({
  tomar
});
