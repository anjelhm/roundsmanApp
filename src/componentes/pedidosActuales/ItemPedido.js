import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Boton from '../../comunes/Boton'

class ItemPedido extends Component {
  constructor() {
    super();
        this.state = {
          opcion: ''
    };
  }

  onChange(NombreInput, value) {
    this.setState({
      [NombreInput]: value
    });
  }

  verEstado() {
    const { idPedido, idUsuario, idPedidoAceptado, idRepartidor, solicitud } = this.props;

    this.props.verEstado(idPedido, idUsuario, idRepartidor, idPedidoAceptado, solicitud);

  }

  verLista() {
    const { idUsuario, solicitud } = this.props;

    this.props.verLista(idUsuario, solicitud);

  }

  render() {
    const { nombre, estado } = this.props;
    return(
      <View style={{
        flexDirection: 'row',
        height: 150,
        marginLeft: 5,
        marginRight: 5,
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 5 ,
        marginTop: 5 ,
        backgroundColor: '#FFFFFF',
        elevation: 4}}>
        <TouchableOpacity onPress = { this.verLista.bind(this) }>

          <View>

                <View style={{ marginLeft: 5, flexDirection: 'column', marginLeft: 15, marginTop: 20}}>

                <Text style={{
                    color: '#697D8B',
                    fontSize: 18,
                    alignItems: 'flex-start' }}>
                    Nombre:{ nombre }</Text>

                <Text style={{
                   color: '#C8D8DC',
                   fontSize: 14,
                   alignItems: 'flex-start' }}>
                   Estado:{ estado }</Text>
                </View>
          </View>
        </TouchableOpacity>

        <View style = {{
          justifyContent: 'center',
          alignItems: 'flex-end',
          width: 50,
          marginRight: 15,
          marginTop: 50}} >
            <Boton etiqueta = { 'Cambiar estado' } width = {150} accion = { this.verEstado.bind(this) } />
        </View>

     </View>

     );
  }
}

ItemPedido.defaultProps = {
 estado: "Desconocido",
 nombre: "Desconocido"
};

export default ItemPedido;
