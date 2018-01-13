import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ListaPedidosLlamadas from '../componentes/llamadas/ListaPedidosLlamadas';
import { iniciaTomarPedidoLlamada, iniciaObtenerPedidoLlamada } from '../acciones/llamadas/actions';

class ContenedorLlamadasYSMS extends Component {

  componentDidMount(){
    this.props.iniciaObtenerPedidoLlamada();
  }

  aceptarPedidoLlamada(idPedidoLlamada, direccion, nombre, id){
    const datos = {
      idRepartidor: this.props.idRepartidor,
      direccion,
      id,
      idLlamada,
      nombre
    };
    this.props.iniciaTomarPedidoLlamada(datos);
  }

  render(){

    const { listaLlamadas } = this.props;

    return(
      <View style = {{ flex: 1 }}>
        {
          listaLlamadas !== null && (
            <View style = {{ flex: 1 }}>
              {
                listaLlamadas.obteniendo
                ? <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <ActivityIndicator color = "#607D8B" size = { 140 }/>
                </View>
                : <View style = {{ flex: 1 }}>
                    {
                      listaLlamadas.pedido === null
                      ? <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                          <Icon name = "perm-phone-msg" size = { 140 } color = "#CFD8DC"/>
                          <Text style = {{ color: '#CFD8DC' }}>
                            No hay datos
                          </Text>
                      </View>
                      : <ListaPedidosLlamadas pedidosLlamadas = { Object.keys(listaLlamadas.pedido).map( x => listaLlamadas.pedido[x] )  } aceptarPedido = {this.aceptarPedidoLlamada.bind(this)} />
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

mapStateToProps = ({ llamadas: { listaLlamadas } }) => ({
  listaLlamadas
});

const LlamadasYSMS = connect (
  mapStateToProps,
  { iniciaObtenerPedidoLlamada, iniciaTomarPedidoLlamada }
)( ContenedorLlamadasYSMS );

export default LlamadasYSMS;
