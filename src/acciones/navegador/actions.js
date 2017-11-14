import {
  INICIO,
  CUENTA,
  SESION,
  REGISTRO,
  INICIASESION,
  ESTADOS,
  ESCANNER,
  LISTA,
  LISTA_HISTORIAL,
  ATRAS
} from '../../constantes/ActionTypes';

export const pantallaCuenta = id =>
  ({ type: CUENTA, id });

export const pantallaSesion = () =>
  ({ type: SESION });

export const pantallaRegistro = () =>
  ({ type: REGISTRO });

export const pantallaIniciaSesion = () =>
  ({ type: INICIASESION });

export const pantallaAnterior = () =>
  ({ type: ATRAS });

export const pantallaLista = (idUsuario, solicitud) =>
  ({ type: LISTA, idUsuario, solicitud });

export const pantallaListaHistorial = (idRepartidor, idHistorial) =>
  ({ type: LISTA_HISTORIAL, idRepartidor, idHistorial });

export const pantallaEstados = (idPedido, idUsuario, idRepartidor, idPedidoAceptado, solicitud) =>
  ({ type: ESTADOS, idPedido, idUsuario, idRepartidor, idPedidoAceptado, solicitud });

export const pantallaEscanner = (idRepartidor, idPedidoAceptado, solicitud) =>
  ({ type: ESCANNER, idRepartidor, idPedidoAceptado, solicitud });


/**
* accion para cambiar a una pantalla anterior
*/
export const lanzarAnterior = () => {
  return dispatch => {
    dispatch(pantallaAnterior());
  };
};

/**
* accion para cambiar a una pantalla Lista
*/
export const lanzarLista = (idUsuario, solicitud) => {
  return dispatch => {
    dispatch(pantallaLista(idUsuario, solicitud));
  };
};

/**
* accion para cambiar a pantalla de ListaHistorial
*/
export const lanzarListaHistorial = (idRepartidor, idHistorial) => {
  return dispatch => {
    dispatch(pantallaListaHistorial(idRepartidor, idHistorial));
  };
};

/**
 * accion para cambiar a pantalla de Escanner
*/
export const lanzarEscanner = (idRepartidor, idPedidoAceptado, solicitud) => {
  return dispatch => {
    dispatch(pantallaEscanner(idRepartidor, idPedidoAceptado, solicitud));
  };
};

/**
 * accion para cambiar a pantalla de Estados
*/
export const lanzarEstados = (idPedido, idUsuario, idRepartidor, idPedidoAceptado, solicitud) => {
  return dispatch => {
    dispatch(pantallaEstados(idPedido, idUsuario, idRepartidor, idPedidoAceptado, solicitud));
  };
};

/**
 * accion para cambiar a pantalla de IniciaSesion
*/
export const lanzarIniciaSesion = () => {
  return dispatch => {
    dispatch(pantallaIniciaSesion());
  };
};

/**
 * accion para cambiar a pantalla de mi cuenta
*/
export const lanzarMiCuenta = id => {
  return dispatch => {
    dispatch(pantallaCuenta(id));
  };
};

/**
 * accion para cambiar a pantalla de Sesion
*/
export const lanzarASesion = () => {
  return dispatch => {
    dispatch(pantallaSesion());
  };
};

/**
 * accion para cambiar a pantalla de Registro
*/
export const lanzarRegistro = () => {
  return dispatch => {
    dispatch(pantallaRegistro());
  };
};
