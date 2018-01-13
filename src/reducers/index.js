import { combineReducers } from 'redux';

import navegador from './navegador';
import autentificador from './autentificador';
import repartidor from './repartidor';
import pedidos from './pedidos';
import mispedidos from './mispedidos';
import pedidosaceptados from './pedidosaceptados';
import estados from './estados';
import perfil from './perfil';
import historial from './historial';
import llamadas from './llamadas';

const rootReducer = combineReducers({
  navegador,
  autentificador,
  repartidor,
  pedidos,
  mispedidos,
  pedidosaceptados,
  estados,
  perfil,
  historial,
  llamadas
});

export default rootReducer;
