import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import {
  INICIO,
  CUENTA,
  INICIASESION,
  REGISTRO,
  SESION,
  ESTADOS,
  ESCANNER,
  ATRAS
} from '../constantes/ActionTypes';

import { Navegador } from '../navegador/Navegador';

//VerificaSesion
const rutaInicial = Navegador.router.getStateForAction(Navegador.router.getActionForPathAndParams('VerificaSesion'));

const nav = (state = rutaInicial, action) => {

  let nextState;

  switch(action.type) {
    case INICIO :
      nextState = Navegador.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Inicio', params: { id: action.id } }),
        state
      );
      break;
    case ATRAS:
      nextState = Navegador.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case CUENTA :
      nextState = Navegador.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'MiCuenta', params: { id: action.id } }),
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
    case ESTADOS :
      nextState = Navegador.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Estados', params: { idPedido: action.idPedido, idUsuario: action.idUsuario, idRepartidor: action.idRepartidor, idPedidoAceptado: action.idPedidoAceptado, solicitud: action.solicitud } }),
        state
      );
      break;
    case ESCANNER :
      nextState = Navegador.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'ScannerQR', params: { idPedido: action.idPedido, idUsuario: action.idUsuario, idRepartidor: action.idRepartidor, idPedidoAceptado: action.idPedidoAceptado, solicitud: action.solicitud } }),
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
