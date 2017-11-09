import React, { Component } from 'react';
import {
  View,
  Text,
  ViewPagerAndroid,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dimensions from 'Dimensions';
import MenuDrawer from './drawer/Drawer';
import Boton from './Menu/Boton';
import Menubar from './Menu/Menubar';
import ListaActual from './ListaActual/ListaActual';
import Pedidos from '../contenedores/Pedidos'
import PedidosActuales from '../contenedores/PedidosActuales';
import Historial from '../contenedores/Historial';

class Inicio extends Component {

  static navigationOptions = {
    header: null
  };

  constructor(){
    super();

    this.state = {
      pagina: 0
    };

  }

  /**
  * función que dirige hacia una pagina del ViewPagerAndroid y modifica el state pagina
  * @param { int } pagina
  */
  ir(pagina) {
    this.ViewPager.setPage(pagina);
    this.setState({ pagina });
  }

  /**
  * función que obtiene la pagina actual del ViewPagerAndroid y la añade al state pagina
  * @param { obj } event
  */
  cambiapagina(event){
    this.setState({
      pagina: event.nativeEvent.position
    });
  }

  verDrawer = () => {
    this.drawer.open();
  };


  render() {

    const { height } = Dimensions.get('window');
    const altura = height - 50;

    //console.warn('UID: ', this.props.navigation.state.params.id);

    return (
      <Drawer
        ref = { ref => this.drawer = ref }
        type = "overlay"
        tapToClose
        content = {  <MenuDrawer id = { this.props.navigation.state.params.id } /> }
        openDrawerOffset = { 0.2 }
        panCloseMask = { 0.2 }
        closedDrawerOffset = { -3 }
        style = {{ shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 }}
      >

      <View style = { estilo.barra }>
        <TouchableOpacity onPress = { this.verDrawer.bind(this) } style = { estilo.icono }>
          <Icon name = "menu" size = { 28 } color = "#FFFFFF"/>
        </TouchableOpacity>
        <Text style = { estilo.titulo }>Bienvenido</Text>
      </View>

        <View style = {{ flex: 1 }}>

          <ViewPagerAndroid
            style = {{ height: altura }}
            ref = { vp => this.ViewPager = vp }
            onPageSelected = { this.cambiapagina.bind(this) }
            initialPage = { 0 }
          >
            <View style = {{ paddingTop: 60}}>
              <Pedidos idRepartidor  = { this.props.navigation.state.params.id } />
            </View>
            <View style = {{ paddingTop: 60 }}>
              <PedidosActuales idRepartidor  = { this.props.navigation.state.params.id }/>
            </View>
            <View style = {{ paddingTop: 60 }}>
              <Historial  idRepartidor  = { this.props.navigation.state.params.id } />
            </View>
          </ViewPagerAndroid>
          <Menubar activo = { this.state.pagina }>
            <Boton accion = { () => this.ir(0) } etiqueta = { "Pedidos" } icono = { "shopping-basket" } />
            <Boton accion = { () => this.ir(1) } etiqueta = { "Pedidos Aceptados" } icono = { "local-mall" } />
            <Boton accion = { () => this.ir(2) } etiqueta = { "Historial" } icono = { "history" } />
          </Menubar>
        </View>
      </Drawer>

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

export default Inicio;
