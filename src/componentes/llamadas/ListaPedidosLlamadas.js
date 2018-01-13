import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';;

import TarjetaPedidoLLamada from './TarjetaPedidoLLamada';

class ListaPedidosLlamadas extends Component {

  constructor() {
    super();

    this.state = {
      datos: [],
      vacio: true
    };

  }

/**
* datos del pedido aceptado
*/
 tomarPedidoLlamada( idPedidoLlamada, nombre, idPedidosLlamadas){
   this.props.aceptarPedidoLlamada(idPedidoLlamada, nombre, idPedidosLlamadas);
 }

 /**
 * datos en el state
 */
  cargarDatos() {
    if( typeof this.props.pedidosLlamadas === 'undefined' ) {

      this.setState({
        datos: [],
        vacio: true
      });

    } else {

      this.setState({
        datos: this.props.pedidosLlamadas,
        vacio: false
      });
    }
  }

  componentDidMount() {
    this.cargarDatos();
  }

  componentDidUpdate(prevProps) {
    if( prevProps !== this.props ) {
      this.cargarDatos();
    }
  }

/**
* render lista
*/
  renderLista() {
    return(
      <View style = {{ flex: 1 }}>
        <FlatList
          data = { this.state.datos }
          keyExtractor = {  item => item.idLlamada  }
          renderItem = {
            ( { item } ) => {
              return(
                <TarjetaPedidoLLamada
                      nombre = { item.nombre }
                      ubicacion = { item.direccion }
                      idPedido = { item.idLlamada }
                      id ={ item.id }
                      idPedidos = { item.idPedidosLlamadas }
                      tomarPedidoLlamada = { this.tomarPedidoLlamada.bind(this) }
                      posicion = { item.posicion }
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
            <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Cargando datos</Text>
            </View>
          )
        }
      </View>
    );
  }
}


export default ListaPedidosLlamadas;
