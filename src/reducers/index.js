import { combineReducers } from 'redux';

import navegador from './navegador';
import autentificador from './autentificador';
import repartidor from './repartidor';
import pedidos from './pedidos';
import mispedidos from './mispedidos';
import pedidosaceptados from './pedidosaceptados';

const rootReducer = combineReducers({
  navegador,
  autentificador,
  repartidor,
  pedidos,
  mispedidos,
  pedidosaceptados
});

export default rootReducer;
