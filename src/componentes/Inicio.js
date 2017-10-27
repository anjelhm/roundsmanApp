import React, { Component } from 'react';
import {
  View,
  Text,
  ViewPagerAndroid
} from 'react-native';

import Dimensions from 'Dimensions';
import Drawer from './drawer/Drawer';
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


  render() {

    const { height } = Dimensions.get('window');
    const altura = height - 50;

    //console.warn('UID: ', this.props.navigation.state.params.id);

    return (
      <Drawer>
        <View style = {{ flex: 1 }}>

          <ViewPagerAndroid
            style = {{ height: altura }}
            ref = { vp => this.ViewPager = vp }
            onPageSelected = { this.cambiapagina.bind(this) }
            initialPage = { 0 }
          >
            <View style = {{ paddingTop: 60}}>
              <Pedidos/>
            </View>
            <View style = {{ paddingTop: 60 }}>
              <PedidosActuales/>
            </View>
            <View style = {{ paddingTop: 60 }}>
              <Historial/>
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

export default Inicio;
