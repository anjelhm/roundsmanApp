import React, { Component } from 'react';
import { View } from 'react-native';

import Item from '../comunes/Item';

class MenuLateral extends Component {
  render() {
    return (
      <View>
        <Item icono="account-circle" nombre="Mi cuenta" accion={ () => console.warn('Hola') }/>
        <Item icono="exit-to-app" nombre="Salir" accion={ () => console.warn('Salir') }/>
      </View>
    );
  }
}

export default MenuLateral;
