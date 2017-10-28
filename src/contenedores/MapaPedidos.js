import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import Mapa from '../componentes/Mapa/Mapa';

class MapaPedidos extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentWillMount() {
    this.obtenerPosicion();
  }

  obtenerPosicion() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
 const { ubicacion } = this.props;
    return (
      <View style = {{ flex: 1 }}>
        {
          this.state.latitude !== null
          ? <Mapa marcador = { [
            {
                coordenadas: {
                  latitude: ubicacion.lat,
                  longitude: ubicacion.long,
                },
                nombre : 'Nombre',
                descripcion: 'Direccion',
                color: '#F44336'
            },
            {
                coordenadas: {
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                },
                nombre : 'Nombre 2',
                descripcion: 'Mi ubicación',
                color: '#3F51B5'
            }
          ] }/>
          : <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator
                color = "#607D8B"
                size = { 100 }
              />
           </View>
        }
      </View>
    );
  }
}

export default MapaPedidos;
