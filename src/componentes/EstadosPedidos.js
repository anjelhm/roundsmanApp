import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Interruptor from '../comunes/Switch';
import Input from '../comunes/Input';
import Boton from '../comunes/Boton';

class EstadoPedidos extends Component {

  constructor() {
    super();

    this.state = {
      precio: ''
    };

  }

  /**
  * función que obtiene el valor de la tecla presionada y la asigna al value del input correspondiente
  * @param { string } NombreInput
  * @param { string } value
  */
  onChange(NombreInput, value) {
    this.setState({
      [NombreInput]: value
    });
  }

  enviaEstado(nombre) {
    this.props.cambiaEstado(nombre, '');
  }

  realizaCompra(nombre) {
    if(this.state.precio === '') {
      alert('No has asignado un precio');
    } else {
      this.props.cambiaEstado(nombre, this.state.precio);
    }
  }

  irAScanner() {
    this.props.irAScanner();
  }

  render() {

    const { estado } = this.props;

    return (
      <View style = {{
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
      }}>
        <View style = {{ padding: 40  }}>
          <View style = {{ marginBottom: 10 }} >
            <Interruptor nombre = "aceptado" activo deshabilitado/>
          </View>
          <View style = {{ marginBottom: 10 }} >
            {
              estado === 'De compras' ? <View>
                <Interruptor nombre = "De compras" activo deshabilitado/>
              </View>
               : estado === 'aceptado' ? <Interruptor nombre = "De compras" enviaEstado = { this.enviaEstado.bind(this) }/>
               : <Interruptor nombre = "De compras" activo deshabilitado/>
            }
          </View>
          <View style = {{ marginBottom: 10 }} >
            {
              estado === 'Compra finalizada' ? <Interruptor nombre = "Compra finalizada" activo deshabilitado/>
               : (estado === 'De compras') || (estado === 'aceptado') ? <View style = {{ width: '100%' }}>
                   <View style = {{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Input
                      etiqueta = { 'Precio Total' }
                      width = { 250 }
                      onChange = { this.onChange.bind(this, 'precio') }
                      value = { this.state.precio }
                    />
                  </View>
                  <Interruptor nombre = "Compra finalizada" enviaEstado = { this.realizaCompra.bind(this) }/>
                </View>
              : <Interruptor nombre = "Compra finalizada" activo deshabilitado/>
            }
          </View>
          <View style = {{ marginBottom: 10 }} >
            {
              estado === 'De camino a tu domicilio' ? <Interruptor nombre = "De camino a tu domicilio" activo deshabilitado/>
               : (estado === 'De compras') || (estado === 'aceptado') || (estado === 'Compra finalizada') ?
                <Interruptor nombre = "De camino a tu domicilio" enviaEstado = { this.enviaEstado.bind(this) }/>
                : <Interruptor nombre = "De camino a tu domicilio" activo deshabilitado/>
            }
          </View>
          <View style = {{ marginBottom: 10 }} >
            {
              estado === 'Ya en tu domicilio' ? <Interruptor nombre = "Ya en tu domicilio" activo deshabilitado/>
              : (estado === 'De compras') || (estado === 'aceptado') || (estado === 'Compra finalizada') || (estado === 'De camino a tu domicilio')
              ? <Interruptor nombre = "Ya en tu domicilio" enviaEstado = { this.enviaEstado.bind(this) }/>
              : <Interruptor nombre = "Ya en tu domicilio" activo deshabilitado/>
            }
          </View>
          <View style = {{ marginBottom: 10 }}>
              {
                estado === 'Pedido entregado' ? <View>
                  <Interruptor nombre = "Pedido entregado" activo deshabilitado/>
                  <View  style = {{ justifyContent: 'center', alignItems: 'center' }}>
                    <Boton etiqueta = "Escanear QR" accion = { this.irAScanner.bind(this) }/>
                  </View>
                </View>
                : (estado === 'De compras') || (estado === 'aceptado') || (estado === 'Compra finalizada') || (estado === 'De camino a tu domicilio') || (estado === 'Ya en tu domicilio')
                ? <Interruptor nombre = "Pedido entregado" enviaEstado = { this.enviaEstado.bind(this) }/>
                : <View>
                    <Interruptor nombre = "Pedido entregado" activo deshabilitado/>
                    <View style = {{ justifyContent: 'center', alignItems: 'center' }}>
                      <Boton etiqueta = "Escanear QR" accion = { this.irAScanner.bind(this) }/>
                    </View>
                </View>
              }
          </View>
        </View>
      </View>
    ) ;
  }
  }
export default EstadoPedidos;
