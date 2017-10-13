import {
  INICIO,
  CUENTA,
  SESION,
  REGISTRO
} from '../../constantes/ActionTypes';

export const pantallaCuenta = () =>
  ({ type: CUENTA });

export const pantallaSesion = () =>
    ({ type: SESION });

export const pantallaRegistro = () =>
      ({ type: REGISTRO });

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
