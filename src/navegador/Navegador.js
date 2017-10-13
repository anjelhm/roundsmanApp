import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Inicio from '../componentes/Inicio';
import MiCuenta from '../contenedores/MiCuenta';

const rutas = {
  Inicio: { screen: Inicio },
  MiCuenta: { screen: MiCuenta },
  Sesion: { screen: Sesion }
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
