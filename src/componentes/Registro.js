import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import DatePicker from 'react-native-datepicker';

import Input from '../comunes/Input';
import Boton from '../comunes/Boton';

class Registro extends Component {

  constructor() {
    super();

    this.state = {
      date_in: '2016-05-01',
      date_out: '2016-05-01',
    };

  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onChange(tipo, value) {
  }

  render() {
    return (
      <View style={ estilo.contenedor }>
        <Input
          etiqueta = "Nombre"
          placeholder = "Ingresa aquí tu nombre"
          onChange = {}
          value = {}
          onFocus = {  }
        />
        <Input
          etiqueta = "Fecha de nacimiento"
          placeholder = "Ingresa aquí tu fecha de nacimiento"
          onChange = {}
          value = {}
          onFocus = {  }
        />

        <DatePicker
              style ={{padding:10}}
              date={this.state.date_in}
              mode="date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              showIcon={false}
              customStyles={{
                    dateInput: {
                    alignItems : 'flex-start',
                    padding:5
                },
               }}
    onDateChange={(date_in) => {this.setState({date_in: date_in});}}/>

        <View>
            <Boton
               etiqueta = "Aceptar"
               width = { 280 }
               accion = { }
             />
        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});

export default Registro;
