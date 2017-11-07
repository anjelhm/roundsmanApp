import {
  INICIO,
  CUENTA,
  SESION,
  REGISTRO,
  INICIASESION,
  ESTADOS,
  ESCANNER
} from '../../constantes/ActionTypes';

export const pantallaCuenta = () =>
  ({ type: CUENTA });

export const pantallaSesion = () =>
  ({ type: SESION });

export const pantallaRegistro = () =>
  ({ type: REGISTRO });

export const pantallaIniciaSesion = () =>
  ({ type: INICIASESION });

export const pantallaEstados = (idPedido, idUsuario, idRepartidor, idPedidoAceptado, solicitud) =>
  ({ type: ESTADOS, idPedido, idUsuario, idRepartidor, idPedidoAceptado, solicitud });

export const pantallaEscanner = (idRepartidor, idPedidoAceptado, solicitud) =>
  ({ type: ESCANNER, idRepartidor, idPedidoAceptado, solicitud });

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
export const lanzarMiCuenta = () => {
  return dispatch => {
    dispatch(pantallaCuenta());
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
