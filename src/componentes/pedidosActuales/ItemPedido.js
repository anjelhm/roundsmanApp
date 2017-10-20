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
      <View style={{ flex: 1, justifyContent: 'space-between', marginTop: 5 , backgroundColor: '#FFFFFF', elevation: 4, flexDirection: 'row' }}>

      <View style={{ justifyContent: 'center', flexDirection: 'column' }}>
      <Text>Nombre:{ nombre }</Text>
      <Text>Estado:{ estado }</Text>
      </View>

      <View style={{ width: 50 }}>
      <Picker
        style = { styles.picker }
        mode="dropdown"
        selectedValue = {this.state.opcion}
        onValueChange = { this.onChange.bind(this, 'opcion') }>
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
