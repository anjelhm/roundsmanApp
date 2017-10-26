import { combineReducers } from 'redux';

import {
  GUARDAR_REPARTIDOR_INICIA,
  GUARDAR_REPARTIDOR_OK,
  GUARDAR_REPARTIDOR_ERROR
} from '../constantes/ActionTypes';

const estadoInicial = {
    guardar : null
};


const guardar = (state = estadoInicial.guardar, action) => {

  switch(action.type) {
    case GUARDAR_REPARTIDOR_INICIA:
      return {
        ...state,
        guardando: true
      };
    case GUARDAR_REPARTIDOR_OK:
      return {
        ...state,
        guardando: false,
        mensaje: action.payload

      };
    case GUARDAR_REPARTIDOR_ERROR:
      return {
        ...state,
        guardando: false,
        error: action.error
      };
    default: return state;
  };
};

export default combineReducers({
  guardar
});
