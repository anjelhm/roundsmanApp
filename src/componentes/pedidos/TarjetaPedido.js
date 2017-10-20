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
<<<<<<< HEAD
  * función que recibe el boolean del modal
=======
  * función que da el boolean
>>>>>>> c1f97f7ae6c30a4bce2d364eaa5d829eab13057a
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
            accion = { () => { this.setModalVisible(true) }}
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
    color: '#697D8B'
  },
  ubicacion: {
    color: '#C8D8DC'
  },
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
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
