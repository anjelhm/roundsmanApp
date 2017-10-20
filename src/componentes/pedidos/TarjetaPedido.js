import React, { Component } from  'react';
import { Text, View, StyleSheet, Modal } from 'react-native';

//importar la clase Boton
import Boton from '../../comunes/Boton';

class TarjetaPedido extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false,
    };
  }

  /**
  * función que da el boolean 
  * @param { bool } visible
  */
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { nombre, ubicacion } = this.props;
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
              { ubicacion }
            </Text>
          </View>
        </View>
        <View style = {{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Boton
            etiqueta = "Tomar pedido"
            color = "#FFFFFF"
            fondo = "#000000"
          />
          <Boton
            etiqueta = "Ver Mapa"
            color = "#000000"
            fondo = "#FFFFFF"
            onPress = { () => { this.setModalVisible(true) }}
          />
        </View>
        <Modal
          animationType = "slide"
          transparent = { false }
          visible = { this.state.modalVisible }
          onRequestClose = { () => {} }
          >
          <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <View style = {{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <Boton
                etiqueta = "Cerrar Mapa"
                width = { 100 }
                accion = { () => { this.setModalVisible(false) }}
                color = "#000000"
                fondo = "#FFFFFF"
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
    color: '#607D8B'
  },
  ubicacion: {
    color: '#CFD8DC'
  },
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    elevation: 4,
    height: 200,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20
  }
});

TarjetaPedido.defaultProps = {
  nombre : 'Nombre ejemplo',
  ubicacion : 'Calle Morelos'
};

export default TarjetaPedido;
