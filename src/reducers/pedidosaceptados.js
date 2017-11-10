import { combineReducers } from 'redux';

import {
  OBTENER_PEDIDOS_ACEPTADOS_INICIA,
  OBTENER_PEDIDOS_ACEPTADOS_OK,
  OBTENER_PEDIDOS_ACEPTADOS_ERROR,
  CERRAR_PEDIDO_INICIA,
  CERRAR_PEDIDO_OK,
  CERRAR_PEDIDO_ERROR,
  OBTENER_LISTA_INICIA,
  OBTENER_LISTA_OK,
  OBTENER_LISTA_ERROR
} from '../constantes/ActionTypes';

const estadoInicial = {
    aceptado : null,
    cerrarPedido: null,
    lista: null
};


const  aceptado = (state = estadoInicial.aceptado, action) => {

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

const cerrarPedido = (state = estadoInicial.cerrarPedido, action) => {
  switch(action.type) {
    case CERRAR_PEDIDO_INICIA:
      return {
        ...state,
        cerrando: true
      };
    case CERRAR_PEDIDO_OK:
      return {
        ...state,
        cerrando: false,
        mensaje: action.payload,
        detalle: false
      };
    case CERRAR_PEDIDO_ERROR:
      return {
        ...state,
        cerrando: false,
        error: action.error,
        detalle: true
      };
    default: return state;
  };
};

const lista = (state = estadoInicial.lista, action) => {
  switch(action.type) {
    case OBTENER_LISTA_INICIA:
      return {
        ...state,
        descargando: true,
        pedido: null
      };
    case OBTENER_LISTA_OK:
      return {
        ...state,
        descargando: false,
        pedido: action.lista,
        nombre: action.nombre
      };
    case OBTENER_LISTA_ERROR:
      return {
        ...state,
        descargando: false,
        error: action.error
      };
    default: return state;
  };
};

export default combineReducers({
  aceptado,
  cierra: cerrarPedido,
  lista
});
