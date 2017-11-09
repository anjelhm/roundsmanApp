import React, { Component } from 'react';
import { View, FlatList ,Text } from 'react-native';

import ItemHistorial from './ItemHistorial';

class MiHistorial extends Component {
  constructor() {
    super();
    this.state = {
      datos: [],
      vacio: true
    };
  }

  cargarDatos() {
    if( typeof this.props.historial === 'undefined' ) {

      this.setState({
        datos: [],
        vacio: true
      });

    } else {

      this.setState({
        datos: this.props.historial,
        vacio: false
      });
    }
  }

  componentDidMount() {
    this.cargarDatos();
  }

  componentDidUpdate(prevProps) {
    if( prevProps.historial !== this.props.historial ) {
      this.cargarDatos();
    }
  }

  renderLista() {
    return(
      <View style = {{ flex: 1 }}>
        <FlatList
        data = { this.state.datos }
          keyExtractor = { item => item.id }
          renderItem = {
            ({ item }) =>
            {
              return(
                <ItemHistorial
                            nombre = { item.nombre }
                            precio = { item.precio }
                            ubicacion = { item.posicion }
                          />
                        )
                      }
                  }
                />
        </View>
    );
  }

  render() {
    return(
      <View style = {{ flex: 1 }}>
        {
          !this.state.vacio ? this.renderLista() : (
            <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Cargando datos</Text>
            </View>
          )
        }
      </View>
    );
  }
}

const ListData = [{ nombre: 'Módulo en desarrollo ...', precio: '????', ubicacion: '????'}];

export default MiHistorial;
