import React, { Component } from  'react';
import { Text, View, StyleSheet, Modal, StatusBar } from 'react-native';

//importar la clase Boton
import Boton from '../../comunes/Boton';
import MapaPedidos from '../../contenedores/MapaPedidos';

class TarjetaPedido extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false,
    };
  }

  /**
  * función que muestra/oculta el modal
  * @param { bool } visible
  */
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  /**
  * Función que devuelve los datos del pedido seleccionado
  */
  tomarPedido(){
      const {idPedido, nombre ,solicitud ,uid, idPedidos} = this.props;
      this.props.tomarPedido(idPedido, nombre ,solicitud ,uid, idPedidos);
  }

  render() {
    const { ubicacion, nombre } = this.props;

    return(
      <View style = { estilo.contenedor }>
        <View>
          <View>
            <Text style = { estilo.nombre }>
              { nombre }
            </Text>
          </View>
          <View>
            <Text style = { estilo.ubicacion }>
              { 'latitud: ' + ubicacion.lat + ' longitud: ' + ubicacion.long }
            </Text>
          </View>
        </View>
        <View style = { estilo.boton }>
          <Boton
            etiqueta = "Tomar pedido"
            width = { 140 }
            color = "#FFFFFF"
            fondo = "#000000"
            accion = {this.tomarPedido.bind(this)}
          />
          <Boton
            etiqueta = "Ver Mapa"
            width = { 140 }
            color = "#000000"
            fondo = "#FFFFFF"
            accion = { () => { this.setModalVisible( true ) }}
          />
        </View>
        <Modal
          animationType = "slide"
          transparent = { false }
          visible = { this.state.modalVisible }
          onRequestClose = { () => {} }
          >
          <View style = {{ flex: 1 }}>
            <StatusBar hidden/>

            <View style= {{
              flex: 1,
              backgroundColor: '#607D8B',
              elevation: 4,
              alignItems: 'center',
              justifyContent: 'center' }}>

              <Text style = {{ color: '#FFFFFF', fontSize: 22 }}> Ubicación de entrega del pedido </Text>

            </View>
            <View style= {{ flex: 5 }}>
              <MapaPedidos ubicacion = { ubicacion }/>
            </View>

            <View style = {{
              flex:1, width: '100%',
              elevation: 4,
              flexDirection: 'row',
              justifyContent: 'space-around',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFFFFF', }}>
              <Boton
                etiqueta = "Cerrar"
                width = { 320 }
                accion = { () => { this.setModalVisible( false ) }}
                color = "#FFFFFF"
                fondo = "#000000"
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  nombre: {
    color: '#697D8B',
    elevation: 4,
    alignItems: 'flex-start',
    fontSize:18,
    marginLeft: 15,
    marginTop: 20
  },
  ubicacion: {
    color: '#C8D8DC',
    elevation: 4,
    alignItems: 'flex-start',
    fontSize: 14,
    marginLeft: 15
  },
  contenedor: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    elevation: 4,
    height: 150,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  boton: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     width: '100%',
     marginTop: 15
  }
});

TarjetaPedido.defaultProps = {
  nombre : 'Nombre ejemplo',
  ubicacion : 'Calle Morelos'
};

export default TarjetaPedido;
