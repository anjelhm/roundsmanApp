import React, { Component } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

class Interruptor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      encendido: props.activo
    };

  }

  /**
  * función que activa/desactiva el switch
  */
  cambia() {
    this.setState({
      encendido: !this.state.encendido
    }, this.props.enviaEstado(this.props.nombre));
  }

  enviaDato(nombre) {
    console.warn('BANDERA: ', nombre);
    this.props.enviaEstado(nombre);
  }

  render() {
    const { nombre, circulo, fondoa, fondoe, deshabilitado } = this.props;
    return (
        <View style = { estilo.contenido }>
        <Text>{ nombre }</Text>
          <View >
          <Switch style = {{ margin:5 }}
            disabled = { deshabilitado }
            onTintColor = { fondoe }
            tintColor = { fondoa }
            thumbTintColor = { circulo }
            onValueChange = { this.cambia.bind(this) }
            value = { this.state.encendido }
          />
          </View>
        </View>
    );}
}
const estilo = StyleSheet.create({
  contenido: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: '15%',
    paddingLeft: '15%',
    width: '100%'
  }
});

Interruptor.defaultProps = {
  nombre: "Texto",
  circulo: '#607D8B',
  fondoa: '#CFD8DC',
  fondoe: '#212121',
  activo: false,
  deshabilitado: false
}

export default Interruptor;
