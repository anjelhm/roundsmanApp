import { combineReducers } from 'redux';

import {
  AUTENTIFICACION_INICIAR,
  AUTENTIFICACION_CORRECTA,
  AUTENTIFICACION_ERROR
} from '../constantes/ActionTypes';

const estadoInicial = {
    autentificacion: null
};

const autentificacion = (state = estadoInicial.autentificacion, action) => {

  switch(action.type) {
    case AUTENTIFICACION_INICIAR:
      return {
        ...state,
        autentificando: true
      };
    case AUTENTIFICACION_CORRECTA:
      return {
        ...state,
        autentificando: false,
        acceso: true
      };
    case AUTENTIFICACION_ERROR:
      return {
        ...state,
        autentificando: false,
        acceso: false
      };
    default: return state;

  };

};

export default combineReducers({
  autentificacion
});
