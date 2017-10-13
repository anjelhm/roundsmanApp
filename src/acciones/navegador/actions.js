import {
  INICIO,
  CUENTA,
  SESION
} from '../../constantes/ActionTypes';

export const pantallaCuenta = () =>
  ({ type: CUENTA });

/**
 * accion para cambiar a pantalla de mi cuenta
*/
export const lanzarMiCuenta = () => {
  return dispatch => {
    dispatch(pantallaCuenta());
  };
};

export const pantallaSesion = () =>
  ({ type: SESION });

/**
 * accion para cambiar a pantalla de mi cuenta
*/
export const lanzarASesion = () => {
  return dispatch => {
    dispatch(pantallaSesion());
  };
};
