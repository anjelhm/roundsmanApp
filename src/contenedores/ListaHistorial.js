import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  BackHandler
} from 'react-native';
import { connect } from 'react-redux';

import { iniciaObtenerListaHistorial } from '../acciones/historial/actions';
import { lanzarAnterior } from '../acciones/navegador/actions';

import Barra_nav from '../comunes/Barra_nav';
import ListaActual from '../componentes/ListaActual/ListaActual';

class ContenedorListaHistorial extends Component {
  
  static navigationOptions = {
    header: null
  };
  
  componentDidMount() {
    this.props.iniciaObtenerListaHistorial(this.props.navigation.state.params.idRepartidor, this.props.navigation.state.params.idHistorial);
  }
  
  retroceder() {
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
    
    const { listaHistorial } = this.props;
    
    return (
      <View style = {{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <Barra_nav titulo = "Lista" retroceder = { this.retroceder.bind(this) }/>
        {
          listaHistorial !== null ? (
            <View style = {{ flex: 1 }}>
              {
                listaHistorial.descargando
                  ? <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <ActivityIndicator color = "#607D8B" size = { 140 }/>
                  </View>
                  : <View style = {{ flex: 1 }}>
                      {
                        listaHistorial.lista === null
                          ? <View style = {{ flex: 1 }}>
                              <Text>Sin Datos</Text>
                            </View>
                          : <View style = {{ flex: 1 }}>
                              <ListaActual datos = { listaHistorial.lista } nombre = { listaHistorial.lista.nombre }/>
                            </View>
                      }
                    </View>
              }
            </View>
          ) : null
        }
      </View>
    );
  }
}

const mapStateToProps = ({ historial: { listaHistorial } }) => ({
  listaHistorial
});

const ListaHistorial = connect(
  mapStateToProps,
  { iniciaObtenerListaHistorial, lanzarAnterior }
)(ContenedorListaHistorial);

export default ListaHistorial;