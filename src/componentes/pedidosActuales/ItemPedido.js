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
  render() {
    const { nombre, estado } = this.props;
    return(
      <View>
      <View style={{ flexDirection: 'row' }}>
      <Text>nombre</Text>
      <Text>estado</Text>
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
    width: 300,
  },
  text: {
     },
 contenido: {
     }

});

ItemPedido.defaultProps = {

};

export default ItemPedido;
