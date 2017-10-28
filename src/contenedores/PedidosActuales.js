import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import ListaActual from '../componentes/pedidosActuales/ListaActual';

import { iniciaObtenerPedidosAceptados } from '../acciones/pedidos/actions';

class ContenedorPedidosActuales extends Component {

  componentDidMount() {
    this.props.iniciaObtenerPedidosAceptados(this.props.idRepartidor);
  }

  render() {

const { aceptado } = this.props;

    return(
      <View style = {{ flex: 1 }}>
      {
          aceptado !== null ? (
            <View style = {{ flex: 1 }}>
              {
                aceptado.obteniendo
                ? <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text>Descargando pedidos</Text>
                </View>
                : <View style = {{ flex: 1 }}>
                   {
                     aceptado.data === null
                     ? <View style = {{ flex: 1 }}>
                        <Text>No hay datos</Text>
                     </View>
                     : <ListaActual aceptado = { Object.keys(aceptado.data).map( x => aceptado.data[x] )  }/>
                   }
                </View>
              }
            </View>
          )
          : <View style = {{ flex: 1 }}>
            <Text>Sin datos</Text>
          </View>
      }

      </View>
    );
  }
}

mapStateToProps = ({ pedidosaceptados: { aceptado } }) => ({
  aceptado
});

 const PedidosActuales = connect (
   mapStateToProps,
   { iniciaObtenerPedidosAceptados }
 )( ContenedorPedidosActuales );

export default PedidosActuales;
