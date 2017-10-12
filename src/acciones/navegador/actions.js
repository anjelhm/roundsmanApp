import {
  INICIO,
  CUENTA
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
