import { combineReducers } from 'redux';

import navegador from './navegador';
import autentificador from './autentificador';
import repartidor from './repartidor';
import pedidos from './pedidos';

const rootReducer = combineReducers({
  navegador,
  autentificador,
  repartidor,
  pedidos
});

export default rootReducer;
