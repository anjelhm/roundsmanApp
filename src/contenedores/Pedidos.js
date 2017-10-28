import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import ListaPedidos from '../componentes/pedidos/ListaPedidos';
import { iniciaTomarPedido,iniciaObtenerPedido } from '../acciones/pedidos/actions'

/**
 * cargando componente ListaPedidos
*/

class contenedorObtenerRegistro extends Component {

  componentDidMount() {
    this.props.iniciaObtenerPedido();
  }

  aceptarPedido(idPedido, nombre ,solicitud ,uid, idPedidos){
    const datos = {
      idRepartidor: this.props.idRepartidor,
      nombre,
      solicitud,
      uid,
      idPedido,
      idPedidos
    };

    this.props.iniciaTomarPedido(datos);
  }


  render() {

    const { pedidos } = this.props;

    return(
      <View style = {{ flex: 1 }}>
        {
          pedidos !== null && (
            <View style = {{ flex: 1 }}>
              {
                pedidos.obteniendo
                ? <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text>Descargando pedidos</Text>
                </View>
                : <View style = {{ flex: 1 }}>
                   <ListaPedidos pedidos = { pedidos.data } aceptarPedido = {this.aceptarPedido.bind(this)} />
                </View>
              }
            </View>
          )

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
   { iniciaObtenerPedido, iniciaTomarPedido }
 )( contenedorObtenerRegistro );

export default ObtenerRegistro;
