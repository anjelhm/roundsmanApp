import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';;

//importar la clase TarjetaPedido
import TarjetaPedido from './TarjetaPedido';

class ListaPedidos extends Component {

  constructor() {
    super();

    this.state = {
      datos: [],
      vacio: true
    };

  }

  cargarDatos() {
    if( typeof this.props.pedidos === 'undefined' ) {

      this.setState({
        datos: [],
        vacio: true
      });

    } else {

      this.setState({
        datos: this.props.pedidos,
        vacio: false
      });
    }
  }

  componentDidMount() {
    this.cargarDatos();
  }

  componentDidUpdate(prevProps) {
    if( prevProps.pedidos !== this.props.pedidos ) {
      this.cargarDatos();
    }
  }

  renderLista() {
    return(
      <View style = {{ flex: 1 }}>
        <FlatList
          data = { this.state.datos }
          keyExtractor = {  item => item.solicitud  }
          renderItem = {
            ( { item } ) => {
              return(
                <TarjetaPedido
                      nombre = { item.nombre }
                      ubicacion = { item.ubicacion }
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


export default ListaPedidos;
