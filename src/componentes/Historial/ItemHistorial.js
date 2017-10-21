import React, { Component } from 'react';
import {
  View,
   TouchableOpacity,
   Text } from 'react-native';

class ItemHistorial extends Component {

  render() {
    const { nombre, precio, ubicacion } = this.props;

    return(
      <View style = { estilo.contenedor } >
          <TouchableOpacity>
              <Text>
                { nombre }
              </Text>
              <Text>
                { precio }
              </Text>
              <Text>
                { ubicacion }
              </Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text Style = { estilo.estilo } > </Text>
          </TouchableOpacity>
      </View>
    );

  }
}
const estilo = StyleSheet.create({
  contenedor: {
    height: 80,
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor: '#CFD8DC',
    elevation: 4
  },
  estilo: {
    height: '60',
    width: '60',
    justifyContent: 'center',
     alignItems:'center'
  }
});

export default ItemHistorial;
