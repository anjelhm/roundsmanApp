import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import {
  INICIO,
  CUENTA,
  INICIASESION
} from '../constantes/ActionTypes';

import { Navegador } from '../navegador/Navegador';

const rutaInicial = Navegador.router.getStateForAction(Navegador.router.getActionForPathAndParams('IniciaSesion'));

const nav = (state = rutaInicial, action) => {

  let nextState;

  switch(action.type) {
    case INICIO :
      nextState = Navegador.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Inicio' }),
        state
      );
      break;
    case CUENTA :
      nextState = Navegador.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'MiCuenta' }),
        state
      );
      break;
    case INICIASESION :
      nextState = Navegador.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'IniciaSesion' }),
        state
      );
      break;
    default:
      nextState = Navegador.router.getStateForAction(action, state);
  }

  return nextState || state;

}

export default combineReducers({
  nav
});
