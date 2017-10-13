import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import {
  INICIO,
  CUENTA,
  INICIASESION,
  REGISTRO
} from '../constantes/ActionTypes';

import { Navegador } from '../navegador/Navegador';

const rutaInicial = Navegador.router.getStateForAction(Navegador.router.getActionForPathAndParams('Sesion'));

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
      case SESION :
        nextState = Navegador.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Sesion' }),
          state
        );
        break;
    case INICIASESION :
      nextState = Navegador.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'IniciaSesion' }),
        state
      );
      break;
    case REGISTRO :
      nextState = Navegador.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Registro' }),
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
