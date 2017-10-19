import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class Boton extends Component {

  render() {

    const { etiqueta, accion, color, fondo, height, width } = this.props;

    return(
        <TouchableOpacity
          onPress = { accion }
          style = {{
            backgroundColor: fondo,
            height: height,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 4,
            marginTop: 10,
            marginBottom: 10
          }}
        >
          <Text style = {{ color: color, fontSize: 18 }}>
            { etiqueta }
          </Text>
      </TouchableOpacity>
     );
  }
}

Boton.defaultProps = {
  etiqueta: 'Aceptar',
  fondo: '#000000',
  accion: () => {},
  color: '#FFFFFF',
  height: 50,
  width: 280
};

export default Boton;
