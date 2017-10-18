import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

class Input extends Component {

  constructor() {
    super();

    this.state = {
        value: ''
    };

  }

  onChange(text) {
    this.setState({ value: text }, this.props.onChange(text));
  }

  render() {
    const { etiqueta, onFocus, color, width, fontSize, placeholder, editable, underlineColorAndroid, value, password, tipo } = this.props;

    return(
      <View style = {{ width: width, margin: 5, backgroundColor: 'white', justifyContent: 'center'}} >
        <Text style = {{ color:color, width: '100%', fontSize: 15, justifyContent: 'center', alignItems: 'center' }}>
          { etiqueta }
        </Text>
        <TextInput
          style = {{ width: '100%', fontSize: 20, justifyContent: 'center', alignItems: 'center' }}
          placeholder = { placeholder }
          editable = { editable }
          underlineColorAndroid = { underlineColorAndroid }
          onChangeText = { this.onChange.bind(this) }
          secureTextEntry = { password }
          value = { value }
          autoFocus = { false }
          keyboardType = { tipo }
          onFocus = { onFocus }
        />
      </View>
    );
  }
}

Input.defaultProps = {
  etiqueta: 'Aceptar',
  color: '#607D8B',
  width: 280,
  fontSize: 20,
  placeholder: 'Ingresa valor',
  editable : true,
  maxlenght : 12,
  underlineColorAndroid : '#607D8B',
  texto: '',
  onChange: () => {},
  password: false,
  keyboardType: 'default',
  onFocus: () => {}
};

export default Input;
