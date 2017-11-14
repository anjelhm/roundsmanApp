import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ListaPedidos from '../componentes/pedidos/ListaPedidos';
import { iniciaTomarPedido,iniciaObtenerPedido } from '../acciones/pedidos/actions'

class contenedorObtenerRegistro extends Component {

  componentDidMount() {
    this.props.iniciaObtenerPedido();
  }

/**
* Función que toma los datos del pedido seleccionado y los pasa a la acción para aceptar el pedido
*/
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
                  <ActivityIndicator color = "#607D8B" size = { 140 }/>
                </View>
                : <View style = {{ flex: 1 }}>
                    {
                      pedidos.data === null
                      ? <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                         <Icon name = "shopping-basket" size = { 140 } color = "#CFD8DC"/>
                         <Text style = {{ color: '#CFD8DC' }}>No hay datos</Text>
                      </View>
                      : <ListaPedidos pedidos = { Object.keys(pedidos.data).map( x => pedidos.data[x] )  } aceptarPedido = {this.aceptarPedido.bind(this)} />
                    }
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
