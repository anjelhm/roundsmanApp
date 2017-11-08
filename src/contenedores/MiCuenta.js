import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import Perfil from '../componentes/Perfil';
import { iniciaObtenerRepartidor } from '../acciones/perfil/actions';

class ContenedorMiCuenta extends Component {

componentDidMount() {
  this.props.iniciaObtenerRepartidor(this.props.navigation.state.params.id);
}

  static navigationOptions = {
    header: null
  };

  render() {
    const { repartidor } = this.props;
    return (
      <View style={{ flex: 1 }}>
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
                : <Perfil nombre = { repartidor.data.nombre } fecha = { repartidor.data.fecha } sexo = { repartidor.data.sexo } correo = { repartidor.data.correo }/>
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
  { iniciaObtenerRepartidor }
)(ContenedorMiCuenta);

export default IniciaSesion;
