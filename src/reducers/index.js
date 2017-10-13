import { combineReducers } from 'redux';

import navegador from './navegador';
import autentificador from './autentificador';

const rootReducer = combineReducers({
  navegador,
  autentificador
});

export default rootReducer;
