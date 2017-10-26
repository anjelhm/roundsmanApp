import { combineReducers } from 'redux';

import navegador from './navegador';
import autentificador from './autentificador';
import repartidor from './repartidor';

const rootReducer = combineReducers({
  navegador,
  autentificador,
  repartidor
});

export default rootReducer;
