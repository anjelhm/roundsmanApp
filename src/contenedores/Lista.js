import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  BackHandler
} from 'react-native';
import { connect } from 'react-redux';

import Barra_nav from '../comunes/Barra_nav';
import ListaActual from '../componentes/ListaActual/ListaActual';

import { iniciaObtenerLista } from '../acciones/pedidos/actions';
import { lanzarAnterior } from '../acciones/navegador/actions';

class ContenedorLista extends Component{

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.iniciaObtenerLista(this.props.navigation.state.params.solicitud, this.props.navigation.state.params.idUsuario);
  }

  haciaAtras() {
    this.props.lanzarAnterior();
  }

  render() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      if (this.props.navigation.state.routeName === "Inicio") {
        return false // exit app
      } else {
        this.props.lanzarAnterior();
        return true // do not exit app
      }
    })

    const { lista } = this.props;

    return (
      <View style = {{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <Barra_nav titulo = "Lista" retroceder = { this.haciaAtras.bind(this) }/>
        <View style = {{ flex: 1 }}>
          {
            lista !== null ? (
              <View style = {{ flex: 1 }}>
                {
                  lista.descargando
                  ? <View style = {{ flex: 1, justifyContent:'center', alignItems: 'center' }}>
                    <ActivityIndicator color = "#607D8B" size = { 140 }/>
                  </View>
                  : <View style = {{ flex: 1 }}>
                      <ListaActual datos = { lista.pedido } nombre = { lista.nombre }/>
                  </View>
                }
              </View>
            ) :  null
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ pedidosaceptados: { lista } }) => ({
  lista
});

const Lista = connect(
  mapStateToProps,
  { iniciaObtenerLista, lanzarAnterior }
)(ContenedorLista);

export default Lista;
