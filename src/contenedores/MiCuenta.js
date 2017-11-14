import React, { Component } from 'react';
import { View, Text, ActivityIndicator, BackHandler } from 'react-native';
import { connect } from 'react-redux';

import Perfil from '../componentes/Perfil';
import Barra_nav from '../comunes/Barra_nav';

import { iniciaObtenerRepartidor } from '../acciones/perfil/actions';
import { lanzarAnterior } from '../acciones/navegador/actions';

class ContenedorMiCuenta extends Component {

componentDidMount() {
  this.props.iniciaObtenerRepartidor(this.props.navigation.state.params.id);
}

  static navigationOptions = {
    header: null
  };

  retroceder(){
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

    const { repartidor } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <Barra_nav titulo = "Mi Perfil" retroceder = { this.retroceder.bind(this) }/>
        {
          repartidor !== null && (
            <View style={{ flex: 1 }}>
            {
              repartidor.obteniendo
              ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <ActivityIndicator color = "#607D8B" size = { 200 } />
                </View>
              :<View style={{ flex: 1 }}>
              {
                repartidor.data === null
                ? <View style={{ flex: 1 }}>
                    <Text>No hay Datos</Text>
                  </View>
                : <Perfil nombre = { repartidor.data.nombre } fecha = { repartidor.data.fecha } sexo = { repartidor.data.sexo } correo = { repartidor.data.correo } foto = { repartidor.data.foto }/>
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

const mapStateToProps = ({ perfil : {repartidor} }) => ({
  repartidor
});

const IniciaSesion = connect(
  mapStateToProps,
  {  lanzarAnterior, iniciaObtenerRepartidor }
)(ContenedorMiCuenta);

export default IniciaSesion;
