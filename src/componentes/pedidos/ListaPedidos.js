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
      cargarDatos();
    }
  }

  renderLista() {
    return(
      <FlatList
        data = { this.state.datos }
        renderItem = { ({ item }) => <TarjetaPedido
                  nombre = { item.nombre }
                  ubicacion = { item.ubicacion }
                      /> }
                  keyExtractor = { item => item.nombre }
                  />
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

  const data = [
    {
      nombre:"User 1",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 2",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 3",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 4",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 5",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 6",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 7",
      ubicacion:"tlaxiaco"
    },
    {
      nombre:"User 8",
      ubicacion:"tlaxiaco"
    }
  ]
export default ListaPedidos;
