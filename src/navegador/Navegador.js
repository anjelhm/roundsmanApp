import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Inicio from '../componentes/Inicio';
import MiCuenta from '../contenedores/MiCuenta';
import IniciaSesion from '../contenedores/IniciaSesion';
import VerificaSesion from '../contenedores/VerificaSesion';
import MiSesion from '../contenedores/MiSesion';
import NuevoRegistro from '../contenedores/NuevoRegistro';
import EstadosPedidos from '../contenedores/EstadosPedidos';
import Lista from '../contenedores/Lista';

import Mapa from '../componentes/Mapa/Mapa';
import ListaActual from '../componentes/ListaActual/ListaActual';
import ScannerQR from '../componentes/ScannerQR';

const rutas = {
  Inicio: { screen: Inicio },
  MiCuenta: { screen: MiCuenta },
  IniciaSesion: { screen: IniciaSesion },
  VerificaSesion: { screen: VerificaSesion },
  Sesion: { screen: MiSesion },
  Registro: { screen: NuevoRegistro },
  Mapa: { screen: Mapa },
  ListaActual: { screen: ListaActual },
  ScannerQR: { screen: ScannerQR },
  Estados: { screen: EstadosPedidos },
  Lista: { screen: Lista }
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
