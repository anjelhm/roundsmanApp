import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Barra_nav extends Component {

  render() {

    const { accion, retroceder, titulo, boton } = this.props;

    return (
      <View style = {{ height: 50, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center', backgroundColor: '#000000', elevation: 4, marginBottom: 10 }}>
        <View style = {{ flex: 1 }}>
          <TouchableOpacity onPress = { retroceder }>
            <Icon
              name = "chevron-left"
              size = { 40 }
              color = "#FFFFFF"
            />
          </TouchableOpacity>
        </View>
        <View style = {{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          <Text style = {{ color: '#FFFFFF', fontSize: 28 }}>{ titulo }</Text>
        </View>
        <View style = {{ flex : 1 }}>
          {
            boton
            ? <TouchableOpacity
                style = {{ height: 36, width: 62, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 5, elevation: 4 }}
                onPress = { accion }
              >
                <Text style = {{ color: '#455A64', fontSize: 20 }}>
                  OK
                </Text>
              </TouchableOpacity>
            : <View>
              </View>
          }
        </View>
      </View>
    );
  }
}

Barra_nav.defaultProps = {
  titulo: 'titulo',
  boton: false,
  retroceder: () => {},
  accion: () => {}
};

export default Barra_nav;
