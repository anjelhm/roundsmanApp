import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Picker,
  ScrollView
} from 'react-native';
import DatePicker from 'react-native-datepicker';

import Input from '../comunes/Input';
import Boton from '../comunes/Boton';

class Registro extends Component {

  constructor() {
    super();
        this.state = {
          date: '',
          sexo: '',
          apellidop: '',
          apellidom: '',
          nombre: '',
          clave1:'',
          clave2:'',
          correo: '',
          estado: ''
    };
  }
  
  /**
  * función que obtiene el valor de la tecla presionada y la asigna al value del input correspondiente
  * @param { string } NombreInput
  * @param { string } value
  */
  onChange(NombreInput, value) {
    this.setState({
      [NombreInput]: value
    });
  }

  /**
  * función que obtiene el valor de la tecla presionada y la asigna al value al input clave2
  * @param { string } value
  */
  confirmar(value) {
    this.setState({
      clave2 : value
    },this.fin.bind(this));

  }

  /**
  * función que compara la clave1 con la clave2 mientras las teclas en el input de clave2 se van presionando
  */
 fin(){
   if(this.state.clave1===this.state.clave2){
     this.setState({
       estado: "true"
       });
   }else{
     this.setState({
       estado: "false"
       });
   }
 }
 /**
 * función que envía el correo y la clave al contenedor IniciaSesion para verificar al usuario, y limpia los input
 */
 enviaDatos() {
   if( this.state.estado === "true"){
   this.props.enviaDatos(this.state.nombre, this.state.apellidom, this.state.apellidop, this.state.date, this.state.sexo, this.state.correo,  this.state.clave1);
   this.setState({
     date: '',
     sexo: '',
     apellidop: '',
     apellidom: '',
     nombre: '',
     clave1:'',
     clave2:'',
     correo: '',
     estado: ''
   });
 }
 }
  render() {

    const highestTimeoutId = setTimeout(() => ';');
            for (let i = 0; i < highestTimeoutId; i++) {
            clearTimeout(i);
    }

    return (
      <View >
        <ScrollView>
          <View style = {styles.contenido} >
            <Input
              etiqueta = "Nombre"
              placeholder = "Ingresa aquí tu nombre"
              onChange = { this.onChange.bind(this, 'nombre') }
              value = { this.state.nombre }
              width = { 300 }
            />
            <Input
              etiqueta = "Apellido Materno"
              placeholder = "Ingresa aquí tu apellido materno"
              onChange = { this.onChange.bind(this, 'apellidom') }
              value = { this.state.apellidom }
              width = { 300 }
            />
            <Input
              etiqueta = "Apellido Paterno"
              placeholder = "Ingresa aquí tu apellido paterno"
              onChange = { this.onChange.bind(this, 'apellidop') }
              value = { this.state.apellidop }
              width = { 300 }
            />
            <View style = {{ width:300 }}>
              <Text style = {{color: '#607D8B', width: '100%', fontSize: 15, justifyContent: 'center', alignItems: 'center' }}>Sexo</Text>
            </View>

            <Picker
              style = { styles.picker }
              mode = "dropdown"
              itemStyle = {{ fontSize: 25, color: 'red', textAlign: 'left', fontWeight: 'bold'}}
              selectedValue = {this.state.sexo}
              onValueChange = { this.onChange.bind(this, 'sexo') }
            >
             <Picker.Item label = "Selecciona tu sexo" />
             <Picker.Item label = "Hombre" value = "H" />
             <Picker.Item label = "Mujer" value = "M" />
            </Picker>
            <Input
              etiqueta = "Correo Electrónico"
              placeholder = "Ingresa aquí tu correo"
              tipo = "email-address"
              onChange = { this.onChange.bind(this, 'correo') }
              value = { this.state.correo }
              width = { 300 }
            />
            <View style = {{ width:300 }}>
              <Text style = {{color: '#607D8B', width: '100%', fontSize: 15, justifyContent: 'center', alignItems: 'center' }}>Fecha de Nacimiento</Text>
            </View>
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
              onDateChange = { this.onChange.bind(this, 'date') }
            />
            <Input
              etiqueta = "Contraseña"
              placeholder = "Ingresa tu contraseña"
              onChange = { this.onChange.bind(this, 'clave1') }
              value = { this.state.clave1 }
              password
              width = { 300 }
            />
            <Input
              etiqueta = "Confirmar Contraseña"
              placeholder = "Ingresa tu contraseña"
              onChange = { this.confirmar.bind(this) }
              value = { this.state.clave2 }
              password
              width = { 300 }
            />
            <View style = {{ width: "100%", alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
              <Boton
                 etiqueta = "Aceptar"
                 accion = { this.enviaDatos.bind(this) }
               />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    width: 300,
  },
  text: {
        fontSize: 30,
        alignSelf: 'center',
        color: 'red'
     },
 contenido: {
       flex: 1,
       alignItems: 'center',
     }

});

export default Registro;
