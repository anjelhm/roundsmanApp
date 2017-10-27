import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import ListaPedidos from '../componentes/pedidos/ListaPedidos';
import { obtenerPedidosInicia } from '../acciones/pedidos/actions'

/**
 * cargando componente ListaPedidos
*/

class contenedorObtenerRegistro extends Component {

  componentDidMount() {
    this.props.obtenerPedidosInicia();
  }


  render() {

    const { pedidos } = this.props;

    return(
      <View style = {{ flex: 1 }}>
        {
          typeof pedidos.data === 'undefined'
          ? <View style = {{ flex 1 }}> <Text>Obteniendo los pedidos</Text> </View>
          : <View style = {{ flex: 1 }}>
            {
              pedidos.obteniendo
              ? <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Descargando pedidos</Text>
              </View>
              : <View style = {{ flex: 1 }}>
                 <ListaPedidos pedidos = { pedidos.data }/>
              </View>
            }
          </View>
        }
      </View>
    );

  }
}

mapStateToProps = ({ pedidos: { pedidos } }) => ({
  pedidos
});

 const ObtenerRegistro = connect (
   mapStateToProps,
   { obtenerPedidosInicia }
 )( contenedorObtenerRegistro );

export default ObtenerRegistro;
