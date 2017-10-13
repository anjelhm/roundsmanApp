import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerLayoutAndroid, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

class Barra_nav extends Component{
  render() {
    const { onPress, retroceder, lenght, titulo, fondo, etiqueta, width, fontSize, texto } = this.props;

    return(
      <DrawerLayoutAndroid
      drawerWidth = { 300 }
      drawerPosition = { DrawerLayoutAndroid.positions.Left }
      renderNavigationView = { retroceder }>
      <View style = {{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: '#000000' }}>
        <TouchableOpacity style = {{ elevation:4 }}>
          <Icon
            name = "chevron-left"
            size = { 30 }
            color = "#FFFFFF"
          />
        </TouchableOpacity>
        <Text style = {{ color:'#FFFFFF', margin: 10, fontSize: 30, textAlign: 'center' }}>{ titulo }</Text>
        <View style = {{ height: 30, width: 40 , justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style = {{ justifyContent: 'center', backgroundColor:'#FFFFFF', borderRadius: 5, margin: 4, elevation: 4 }} onPress = { onPress }>
            <Text style = {{ fontSize: 20 }}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerLayoutAndroid>
    );
  }
}
Barra_nav.defaultProps = {
  retroceder: () => {},
  onPress: () => {},
  titulo: 'Titulo',
  etiqueta: 'Ok',
  fondo: '#607D8B',
  lenght: 50,
  width: '100%',
  fontSize: 20
};
export default Barra_nav;
