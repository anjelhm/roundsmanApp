import React, { Component } from 'react';
import {
  View,
  DrawerLayoutAndroid,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet
} from 'react-native';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MenuLateral from '../../contenedores/MenuLateral';

const height = Dimensions.get('window');
const viewHeight = height - 50;

class Drawer extends Component {

  constructor() {
    super();

    this.state = {
      landscape: false
    };

  }

  openDrawer() {
    this.drawer.openDrawer();
  }

  onLayout = event => this.cambiarPosicion(event.nativeEvent.layout);

  cambiarPosicion(evento) {
    (evento.width > evento.height) ? this.setState({ landscape: true }) : this.setState({ landscape: false });
  }

  render() {

    const { children } = this.props;

    var menu = (
      <View style={{ flex: 1, backgroundColor: '#E0E0E0' }}>
        <View style={{ backgroundColor: '#90A4AE', flex: 1, elevation: 4, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#FFC107', height: this.state.landscape ? 80 : 140, width: this.state.landscape ? 80 : 140, borderRadius: 100, elevation: 2 }}></View>
        </View>
        <View style={{ flex: this.state.landscape ? 3 : 2, paddingTop: 20, justifyContent: 'space-between'   }}>
          <MenuLateral/>
          <View style={{ borderTopColor: '#78909C', borderTopWidth: 0.5, height: 62, justifyContent: 'center', paddingLeft: 10 }}>
            <Text style={{ fontSize: 18, color: '#90A4AE' }}>{ "Desarrollado por F4Lab" }</Text>
            <Text style={{ fontSize: 14, color: '#B0BEC5' }}>{ "Versión: 1.x.xx" }</Text>
          </View>
        </View>
      </View>
    );

    return (
      <View style={{ flex: 1 }} onLayout={ this.onLayout }>
        <StatusBar hidden/>

        <DrawerLayoutAndroid
          drawerWidth = { 300 }
          ref = { (drawer) => this.drawer = drawer }
          drawerPosition = { DrawerLayoutAndroid.positions.left }
          renderNavigationView = { () => menu }
        >
          <View style={ estilo.barra }>
            <TouchableOpacity onPress = { this.openDrawer.bind(this) } style={ estilo.icono }>
              <Icon name = "menu" size = { 28 } color = "#FFFFFF"/>
            </TouchableOpacity>
            <Text style = { estilo.titulo }>Bienvenido</Text>
          </View>
          <View style = {{ flex: 1 }}>
            { children }
          </View>
        </DrawerLayoutAndroid>

      </View>
    );
  }
}

const estilo = StyleSheet.create({
  barra: {
    backgroundColor: '#000000',
    height: 50,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  icono: {
    width: 52,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 20,
    color: '#FFFFFF',
    marginLeft: 20
  }
});

export default Drawer;
