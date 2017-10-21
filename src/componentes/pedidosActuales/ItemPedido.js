import React, {Component} from 'react';
import {
  Text,
  View,
  Picker,
  StyleSheet
} from 'react-native';

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
      <View style={{ height: 100, marginLeft: 5, marginRight: 5, flex: 1, justifyContent: 'space-between', marginBottom: 5 , marginTop: 5 , backgroundColor: '#FFFFFF', elevation: 4, flexDirection: 'row' }}>

      <View style={{ marginLeft: 5, justifyContent: 'center', flexDirection: 'column' }}>
      <Text style={{ color: '#607D8B', fontSize: 18 }}>Nombre:{ nombre }</Text>
      <Text style={{ color: '#607D8B', fontSize: 18 }}>Estado:{ estado }</Text>
      </View>

      <View style={{ justifyContent: 'center', width: 50 }}>
      <Picker
        mode="dropdown"
        selectedValue = {this.state.opcion}
        onValueChange = { this.onChange.bind(this, 'opcion') }>
           <Picker.Item label = "..." />
           <Picker.Item label = "Ver Detalles" value = "detalles" />
           <Picker.Item label = "Cambiar Estado" value = "estado" />
      </Picker>
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
