import React, { Component } from  'react';
import { Text, View, StyleSheet } from 'react-native';

import Boton from '../comunes/Boton';

class TarjetaPedido extends Component {
  render() {
    const { nombre, ubicacion } = this.props;
    return(
      <View style = { estilo.contenedor }>
        <View>
          <View>
            <Text>
              Nombre:
            </Text>
            <Text>
              { nombre }
            </Text>
          </View>
          <View>
            <Text>
              Ubicacion:
            </Text>
            <Text>
              { ubicacion }
            </Text>
          </View>
        </View>
        <View>
          <Boton
            etiqueta = "Tomar pedido",
            color = "#FFFFFF"
          />
          <Boton
            etiqueta = "Ver Mapa",
            color = "#000000"
          />
        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    elevation: 4,
    height: 200,
    width: '100%'
  }
});

TarjetaPedido.defaultProps = {
  nombre = 'Nombre ejemplo',
  ubicacion = 'Calle Morelos'
};

export default TarjetaPedido<
