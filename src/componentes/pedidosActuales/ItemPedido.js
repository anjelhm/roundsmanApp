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
      <View style={{ marginTop: 5 , backgroundColor: '#FFFFFF', elevation: 4, flexDirection: 'row' }}>
      <View style={{ flexDirection: 'column' }}>
      <Text>Nombre:{ nombre }</Text>
      <Text>Estado:{ estado }</Text>
      </View>
      <View style={{ flex: 1 }}>
      <Picker
        style = { styles.picker }
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
const styles = StyleSheet.create({
  picker: {
  },
  text: {
     },
 contenido: {
     }

});

ItemPedido.defaultProps = {

};

export default ItemPedido;
