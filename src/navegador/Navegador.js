import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Inicio from '../componentes/Inicio';

const rutas = {
  Inicio: { screen: Inicio }
};

export const Navegador = StackNavigator(rutas);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <Navegador navigation={ addNavigationHelpers({
    dispatch,
    state: nav
  }) }/>
);

const mapStateToProps = ({ navegador: { nav } }) => ({
  nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
