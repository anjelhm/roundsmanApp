import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import ItemPedido from './ItemPedido';

class ListaActual extends Component {

  constructor() {
    super();

    this.state = {
      datos: [],
      vacio: true
    };

  }

  /**
  * Función que carga la lista de datos en el state
  */
  cargarDatos() {
    if( typeof this.props.aceptado === 'undefined' ) {

      this.setState({
        datos: [],
        vacio: true
      });

    } else {
      this.setState({
        datos: this.props.aceptado,
        vacio: false
      });
    }
  }

  componentDidMount() {
    this.cargarDatos();
  }

  componentDidUpdate(prevProps) {
    if( prevProps.aceptado !== this.props.aceptado ) {
      this.cargarDatos();
    }
  }

  verEstado(idPedido, idUsuario, idRepartidor, idPedidoAceptado, solicitud){
    this.props.irAEstado(idPedido, idUsuario, idRepartidor, idPedidoAceptado, solicitud);
  }

  /**
  * Función que renderiza la lista con los datos
  */
  renderLista() {

    return(
      <View style = {{ flex: 1 }}>
        <FlatList
          data = { this.state.datos }
          keyExtractor = {  item => item.idPedido  }
          renderItem = {
            ( { item } ) => {
              return(
                <ItemPedido
                  nombre = { item.nombre }
                  estado = { item.estado }
                  idPedido = { item.idPedido }
                  idUsuario = { item.uid }
                  idRepartidor = { item.idRepartidor }
                  idPedidoAceptado = { item.pedidoRepartidor }
                  solicitud = { item.solicitud }
                  verEstado = { this.verEstado.bind(this) }
                />
              )
            }
           }
        />
      </View>
    );
  }

  render() {
    return(
      <View style = {{ flex: 1 }}>
        {
            !this.state.vacio ? this.renderLista() : (
              <View style = {{ flex: 1 }}>
                <Text>Descargando datos</Text>
              </View>
            )
        }
      </View>
    );
  }
}

export default ListaActual;
