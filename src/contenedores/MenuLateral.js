import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { lanzarMiCuenta } from '../acciones/navegador/actions';

import Item from '../comunes/Item';

class MenuLateralContenedor extends Component {

  iraMicuenta = () => {
    this.props.lanzarMiCuenta();
  }

  render() {
    return (
      <View>
        <Item icono="account-circle" nombre="Mi cuenta" accion={ this.iraMicuenta.bind(this) }/>
        <Item icono="exit-to-app" nombre="Salir" accion={ () => console.warn('Salir') }/>
      </View>
    );
  }
}

const mapStateToProps = ({ navegador: nav }) => ({
  nav
});

const MenuLateral = connect(
  mapStateToProps,
  { lanzarMiCuenta }
)(MenuLateralContenedor);

export default MenuLateral;
