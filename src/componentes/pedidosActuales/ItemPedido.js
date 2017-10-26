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

  render() {
    const { nombre, estado } = this.props;
    return(
      <TouchableOpacity>
      
        <View style={{
          flexDirection: 'column',
          height: 150,
          marginLeft: 5,
          marginRight: 5,
          flex: 1,
          justifyContent: 'space-between',
          marginBottom: 5 ,
          marginTop: 5 ,
          backgroundColor: '#FFFFFF',
          elevation: 4,
          flexDirection: 'row' }}>

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

            <View style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              width: 50,
              marginRight: 15,
              marginTop: 50}}>

              <TouchableOpacity>
                <Boton etiqueta = { 'Cambiar estado' } width = {150} />
              </TouchableOpacity>

          </View>
        </View>
      </TouchableOpacity>
     );
  }
}

ItemPedido.defaultProps = {
 estado: "Desconocido",
 nombre: "Desconocido"
};

export default ItemPedido;
