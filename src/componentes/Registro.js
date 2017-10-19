import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Picker
} from 'react-native';
import DatePicker from 'react-native-datepicker';

import Input from '../comunes/Input';
import Boton from '../comunes/Boton';

class Registro extends Component {

  constructor() {
    super();

    this.state = {
          date: '',
          selected1: 'key1',
          selected2: 'key1',
          selected3: 'key1',
          color: 'red',
          mode: Picker.MODE_DIALOG,
    };

  }


  render() {

    const highestTimeoutId = setTimeout(() => ';');
            for (let i = 0; i < highestTimeoutId; i++) {
            clearTimeout(i);
    }

    return (
      <View>
        <Input
          etiqueta = "Nombre"
          placeholder = "Ingresa aquí tu nombre"
        />
        <Input
          etiqueta = "Sexo"
          placeholder = "Ingresa tu sexo"
        />
        <Picker
          style = { styles.picker }
          selectedValue = { this.state.selected1 }
        >
          <Picker.Item label = "Mujer" value = "key0" />
          <Picker.Item label = "Hombre" value = "key1" />
        </Picker>
        <Input
          etiqueta = "Correo Electrónico"
          placeholder = "Ingresa aquí tu correo"
          tipo = "email-address"
        />

        <DatePicker
          style = {{ width: 200 }}
          date = { this.state.date }
          mode = "date"
          format = "YYYY-MM-DD"
          minDate = "1980-05-01"
          maxDate = "2500-06-01"
          confirmBtnText = "Confirm"
          cancelBtnText = "Cancel"
          customStyles = {{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            }}
          minuteInterval = { 10 }
          onDateChange = { (date) => { this.setState({ date: date }); } }
        />
        <View style = {{ marginTop: 10 }}>
          <Boton
             etiqueta = "Aceptar"
           />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  picker: {
    width: 300,
  },
});

export default Registro;
