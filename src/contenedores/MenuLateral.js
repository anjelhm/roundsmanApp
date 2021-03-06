import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { lanzarMiCuenta } from '../acciones/navegador/actions';
import { desautentificar } from '../acciones/autentificar/actions';

import Item from '../comunes/Item';

class MenuLateralContenedor extends Component {

  /**
  * función que ejecuta la acción para cambiar a pantala MiCuenta
  */
  iraMicuenta = () => {
    this.props.lanzarMiCuenta(this.props.id);
  }

  /**
  * función que ejecuta la acción para cerrar sesión
  */
  salir = () => {
    this.props.desautentificar();
  }

  render() {
    return (
      <View>
        <Item icono = "account-circle" nombre = "Mi cuenta" accion = { this.iraMicuenta.bind(this) }/>
        <Item icono = "exit-to-app" nombre = "Salir" accion = { this.salir.bind(this) }/>
      </View>
    );
  }
}

const mapStateToProps = ({ navegador: nav }) => ({
  nav
});

const MenuLateral = connect(
  mapStateToProps,
  { lanzarMiCuenta, desautentificar }
)(MenuLateralContenedor);

export default MenuLateral;
