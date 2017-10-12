import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerLayoutAndroid, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

class Barra_nav extends Component{
  render() {
    const { lenght, funcion, titulo, fondo, etiqueta, width, fontSize, editable, texto } = this.props;

    var navigationView = (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <Text style={{margin: 10, fontSize: 30, textAlign: 'left'}}>Opciones</Text>
      </View>
    );

    return(
      <DrawerLayoutAndroid
      drawerWidth = { 300 }
      drawerPosition = { DrawerLayoutAndroid.positions.Left }
      renderNavigationView = {() => navigationView }>
      <View style = {{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: '#000000' }}>
        <TouchableOpacity style = {{ elevation:4 }}>
          <Icon
            name = "chevron-left"
            size = { 30 }
            color = "#FFFFFF"
          />
        </TouchableOpacity>
        <Text style = {{ color:'#FFFFFF', margin: 10, fontSize: 30, textAlign: 'right' }}>{ titulo }</Text>
        <View style = {{ height: 30, width: 40 , justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style = {{ justifyContent: 'center', backgroundColor:'#FFFFFF', borderRadius: 5, elevation: 4 }}>
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
  funcion: '',
  titulo: 'Titulo',
  etiqueta: 'Ok',
  fondo: '#607D8B',
  lenght: 50,
  width: '100%',
  fontSize: 20,
  editable : true,
  texto: ''
};
export default Barra_nav;
