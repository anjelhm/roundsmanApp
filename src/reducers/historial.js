import { combineReducers } from 'redux';

import {
  OBTENER_HISTORIAL_INICIA,
  OBTENER_HISTORIAL_OK,
  OBTENER_HISTORIAL_ERROR
} from '../constantes/ActionTypes';

const estadoInicial = {
    historial : null
};


const historial = (state = estadoInicial.historial, action) => {
  switch(action.type) {
    case OBTENER_HISTORIAL_INICIA:
      return {
        ...state,
        obteniendo: true
      };
    case OBTENER_HISTORIAL_OK:
      return {
        ...state,
        obteniendo: false,
        data: action.payload
      };
    case OBTENER_HISTORIAL_ERROR:
      return {
        ...state,
        obteniendo: false,
        error: action.error
      };
    default: return state;
  };
};

export default combineReducers({
  historial
});
