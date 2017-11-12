import { combineReducers } from 'redux';

import {
  OBTENER_HISTORIAL_INICIA,
  OBTENER_HISTORIAL_OK,
  OBTENER_HISTORIAL_ERROR,
  OBTENER_LISTA_HISTORIAL_INICIA,
  OBTENER_LISTA_HISTORIAL_OK,
  OBTENER_LISTA_HISTORIAL_ERROR,
  ELIMINAR_ITEM_HISTORIAL_INICIA,
  ELIMINAR_ITEM_HISTORIAL_OK,
  ELIMINAR_ITEM_HISTORIAL_ERROR
} from '../constantes/ActionTypes';

const estadoInicial = {
    historial : null,
    listaHistorial: null,
    elimina: null
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

const listaHistorial = (state = estadoInicial.listaHistorial, action) => {
  switch(action.type) {
    case OBTENER_LISTA_HISTORIAL_INICIA:
      return {
        ...state,
        descargando: true
      };
    case OBTENER_LISTA_HISTORIAL_OK:
      return {
        ...state,
        descargando: false,
        lista: action.lista
      };
    case OBTENER_LISTA_HISTORIAL_ERROR:
      return {
        ...state,
        descargando: false,
        error: action.error
      };
    default: return state;
  };
};

const elimina = (state = estadoInicial.elimina, action) => {
  switch(action.type) {
    case ELIMINAR_ITEM_HISTORIAL_INICIA:
      return {
        ...state,
        eliminando: true
      };
    case ELIMINAR_ITEM_HISTORIAL_OK:
      return {
        ...state,
        eliminando: false,
        mensaje: action.payload
      };
    case ELIMINAR_ITEM_HISTORIAL_ERROR:
      return {
        ...state,
        eliminando: false,
        error: action.error
      };
    default: return state;
  };
};

export default combineReducers({
  historial,
  listaHistorial
});
