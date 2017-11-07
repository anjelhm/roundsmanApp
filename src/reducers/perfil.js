import { combineReducers } from 'redux';

import {
  OBTENER_REPARTIDOR_INICIA,
  OBTENER_REPARTIDOR_OK,
  OBTENER_REPARTIDOR_ERROR
} from '../constantes/ActionTypes';

const estadoInicial = {
    repartidor : null
};


const repartidor = (state = estadoInicial.repartidor, action) => {

  switch(action.type) {
    case OBTENER_REPARTIDOR_INICIA:
      return {
        ...state,
        obteniendo: true
      };
    case OBTENER_REPARTIDOR_OK:
      return {
        ...state,
        obteniendo: false,
        data: action.payload
      };
    case OBTENER_REPARTIDOR_ERROR:
      return {
        ...state,
        obteniendo: false,
        error: action.error
      };
    default: return state;
  };
};

export default combineReducers({
  repartidor
});
