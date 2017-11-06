import {
  INICIO,
  CUENTA,
  SESION,
  REGISTRO,
  INICIASESION,
  ESTADOS
} from '../../constantes/ActionTypes';

export const pantallaCuenta = () =>
  ({ type: CUENTA });

export const pantallaSesion = () =>
  ({ type: SESION });

export const pantallaRegistro = () =>
  ({ type: REGISTRO });

export const pantallaIniciaSesion = () =>
  ({ type: INICIASESION });

export const pantallaEstados = (idPedido, idUsuario) =>
  ({ type: ESTADOS, idPedido, idUsuario });

/**
 * accion para cambiar a pantalla de Estados
*/
export const lanzarEstados = (idPedido, idUsuario) => {
  return dispatch => {
    dispatch(pantallaEstados(idPedido, idUsuario));
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
