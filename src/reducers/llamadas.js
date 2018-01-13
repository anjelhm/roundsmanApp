import { combineReducers } from 'redux';

import {
  OBTENER_PEDIDOS_ACEPTADOS_LLAMADAS_INICIA,
  OBTENER_PEDIDOS_ACEPTADOS_LLAMADAS_OK,
  OBTENER_PEDIDOS_ACEPTADOS_LLAMADAS_ERROR,
  OBTENER_LISTA_LLAMADAS_INICIA,
  OBTENER_LISTA_LLAMADAS_OK,
  OBTENER_LISTA_LLAMADAS_ERROR
} from '../constantes/ActionTypes';

const estadoInicial = {
  pedidoLlamada : null,
  listaLlamadas : null
};

const  pedidoLlamada = (state = estadoInicial.pedidoLlamada, action) => {

  switch(action.type) {
    case OBTENER_PEDIDOS_ACEPTADOS_LLAMADAS_INICIA:
      return {
        ...state,
        obteniendo: true
      };
    case OBTENER_PEDIDOS_ACEPTADOS_LLAMADAS_OK:
      return {
        ...state,
        obteniendo: false,
        data: action.aceptadosLLamadas

      };
    case OBTENER_PEDIDOS_ACEPTADOS_LLAMADAS_ERROR:
      return {
        ...state,
        obteniendo: false,
        error: action.error
      };
    default: return state;
  };
};

const listaLlamadas = (state = estadoInicial.listaLlamadas, action) => {
  switch(action.type) {
    case OBTENER_LISTA_LLAMADAS_INICIA:
      return {
        ...state,
        descargando: true,
        pedido: null
      };
    case OBTENER_LISTA_LLAMADAS_OK:
      return {
        ...state,
        descargando: false,
        pedido: action.listaLlamadas
      };
    case OBTENER_LISTA_LLAMADAS_ERROR:
      return {
        ...state,
        descargando: false,
        error: action.error
      };
    default: return state;
  };
};

export default combineReducers({
  pedidoLlamada,
  listaLlamadas
});
