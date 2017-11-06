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
    }, console.warn(this.state.encendido));
  }

  enviaDato(bandera) {
    console.warn('BANDERA: ', bandera);
  }

  render() {
    const { nombre, circulo, fondoa, fondoe } = this.props;
    return (
        <View style = { estilo.contenido }>
        <Text>{ nombre }</Text>
          <View >
          <Switch style = {{ margin:5 }}
            disabled = { false }
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
  activo: false
}

export default Interruptor;
