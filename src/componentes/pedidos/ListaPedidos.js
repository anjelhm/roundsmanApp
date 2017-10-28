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

/**
* Función que envía los datos del pedido que será aceptado
* @param { string } idPedido
* @param { string } nombre
* @param { string } solicitud
* @param { string } uid
* @param { string } idPedidos
*/
 tomarPedido( idPedido, nombre ,solicitud ,uid, idPedidos){
   this.props.aceptarPedido(idPedido, nombre ,solicitud ,uid, idPedidos);
 }

 /**
 * Función que carga la lista de datos en el state
 */
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

/**
* Función que renderiza la lista con los datos
*/
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
                      idPedido = { item.idPedido }
                      solicitud = { item.solicitud }
                      uid ={ item.uid }
                      idPedidos = { item.idPedidos }
                      tomarPedido = { this.tomarPedido.bind(this) }
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
