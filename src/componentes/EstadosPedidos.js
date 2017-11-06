import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Interruptor from '../comunes/Switch';
import Input from '../comunes/Input';

class EstadoPedidos extends Component {
  render() {

    const { estado } = this.props;

    return (
      <View style = {{
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
      }}>
        <View style = {{ padding: 40 }}>
          <View style = {{ marginBottom: 10 }} >
            {
              estado ? <Interruptor nombre = "Aceptado" activo/>
              : <Interruptor nombre = "Aceptado"/>
            }

          </View>
          <View style = {{ marginBottom: 10 }} >
              <Interruptor nombre = "De compras"/>
          </View>
          <View style = {{ marginBottom: 10 }} >
              <Interruptor nombre = "Compra finalizada"/>
              <View style = {{ width: '100%', justifyContent: 'center', alignItems: 'center' }}><Input etiqueta = { 'Precio Total' } width = { 250 }/></View>
          </View>
          <View style = {{ marginBottom: 10 }} >
              <Interruptor nombre = "De camino a tu dirección"/>
          </View>
          <View style = {{ marginBottom: 10 }} >
              <Interruptor nombre = "Ya en tu dirección"/>
          </View>
          <View style = {{ marginBottom: 10 }} >
              <Interruptor nombre = "Compra finalizada"/>
          </View>
        </View>
      </View>
    ) ;
  }
  }
export default EstadoPedidos;
