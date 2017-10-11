import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

class Input extends Component {

  render(){
    const { etiqueta, color, width, fontSize, placeholder, editable, underlineColorAndroid, texto } = this.props;

    return(
      <View style = {{ backgroundColor: 'red' }}>
        <View style = {{ width: width, margin: 5, backgroundColor:'white', justifyContent: 'center'}} >
          <Text style = {{ color:color, width: '100%', fontSize: 15, justifyContent: 'center', alignItems: 'center' }}>
            { etiqueta }
          </Text>
          <TextInput
            style = {{ width: '100%', fontSize: 20, justifyContent: 'center', alignItems: 'center' }}
            placeholder = { placeholder }
            editable = { editable }
            underlineColorAndroid = { underlineColorAndroid }
          />
        </View>
      </View>
    );
  }

}

Input.defaultProps = {
  etiqueta: 'Aceptar',
  color: '#607D8B',
  width: 140,
  fontSize: 20,
  placeholder: 'Ingresa valor',
  editable : true,
  maxlenght : 12,
  underlineColorAndroid : '#607D8B',
  texto: ''
};

export default Input;
