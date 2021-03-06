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

  haciaListaHistorial(historial) {
    this.props.verListaHistorial(historial);
  }

  eliminarItem(historial, nombre) {
    this.props.eliminar(historial, nombre);
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
                            historial = { item.historial }
                            haciaListaHistorial = { this.haciaListaHistorial.bind(this) }
                            eliminarItem = { this.eliminarItem.bind(this) }
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

export default MiHistorial;
