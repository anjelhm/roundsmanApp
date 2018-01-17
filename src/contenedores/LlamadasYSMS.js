import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SegmentedControlTab from 'react-native-segmented-control-tab'

import ListaPedidosLlamadas from '../componentes/llamadas/ListaPedidosLlamadas';
import { iniciaTomarPedidoLlamada, iniciaObtenerPedidoLlamada } from '../acciones/llamadas/actions';

class ContenedorLlamadasYSMS extends Component {

  componentDidMount(){
    this.props.iniciaObtenerPedidoLlamada();
  }

  constructor(){
    super()
    this.state = {
      opcionSeleccionada: 0,
      selectedIndex: 0,
      selectedIndices: [0],
    };
  }

  cambiarOpcionSeleccionada = (index) => {
    this.setState({
      ...this.state,
      opcionSeleccionada: index,
    });
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
      <View style = {{ flex: 1, marginTop: -10 }}>
      <View style={ estilo.contenedor }>
              <SegmentedControlTab
                  badges={[1, 3]}
                  activeTabBadgeContainerStyle={{ backgroundColor: '#607D8B' }}
                  values={['Pedidos', 'Pedidos Aceptados']}
                  selectedIndex={this.state.opcionSeleccionada}
                  onTabPress={this.cambiarOpcionSeleccionada}
                  borderRadius={0}
                  tabsContainerStyle={{ height: 30, backgroundColor: '#FFFFFF' }}
                  tabStyle={{ backgroundColor: '#000000', borderWidth: 0 }}
                  activeTabStyle={{ backgroundColor: '#FFFFFF', marginTop: 2 }}
                  tabTextStyle={{ color: '#FFFFFF' }}
                  activeTabTextStyle={{ color: '#000000' }} />
              {this.state.opcionSeleccionada === 0 &&
                  <View style = {{ flex: 1 }} >
                    {
                      listaLlamadas !== null && (
                        listaLlamadas.descargando !== null
                        ? listaLlamadas.descargando
                          ? <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                              <ActivityIndicator color = "#607D8B" size = { 140 }/>
                            </View>
                          : <View style = {{ flex: 1 }}>
                            {
                              typeof listaLlamadas.pedido === 'undefined'
                              ? <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                                  <Icon name = "perm-phone-msg" size = { 140 } color = "#CFD8DC"/>
                                  <Text style = {{ color: '#CFD8DC' }}>
                                    No hay datos
                                  </Text>
                                </View>
                              : <ListaPedidosLlamadas pedidosLlamadas = { Object.keys(listaLlamadas.pedido).map( x => listaLlamadas.pedido[x] )  } aceptarPedido = {this.aceptarPedidoLlamada.bind(this)} />
                            }
                          </View>
                        : <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator color = "#607D8B" size = { 140 }/>
                          </View>
                      )
                    }
                  </View>
                }
              {this.state.opcionSeleccionada === 1 &&
                  <Text style={ estilo.tabContenido }> Pedidos Aceptados </Text>}

          </View>


      </View>
    );
  }
}

mapStateToProps = ({ llamadas: { listaLlamadas } }) => ({
  listaLlamadas
});

const estilo = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    tabContenido: {
        color: '#000000',
        fontSize: 18,
        margin: 24
    }
  }
)

const LlamadasYSMS = connect (
  mapStateToProps,
  { iniciaObtenerPedidoLlamada, iniciaTomarPedidoLlamada }
)( ContenedorLlamadasYSMS );

export default LlamadasYSMS;
