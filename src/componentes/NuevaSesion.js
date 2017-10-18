import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  StyleSheet
} from 'react-native';

import Input from '../comunes/Input';
import Boton from '../comunes/Boton';

class NuevaSesion extends Component {

  constructor() {
    super();

    this.state = {
      correo: '',
      clave: '',
      modalVisible: false,
      cambiaClave: ''
    };

  }

  /**
  *  función que muestra/oculta el modal
  * @param { boolean } visible
  */
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  /**
  * función que obtiene el valor de la tecla presionada y la asigna al value del input correspondiente
  * @param { string } tipo
  * @param { string } value
  */
  onChange(tipo, value) {
    this.setState({
      [tipo]: value
    });
  }

  /**
  * función que envía el correo y la clave al contenedor IniciaSesion para verificar al usuario, y limpia los input
  */
  enviaDatos() {
    this.props.enviaDatos(this.state.correo, this.state.clave);

    this.setState({
      correo: '',
      clave: ''
    });
  }

  /**
  * función que envía el correo al contenedor IniciaSesion para reestablecer la clave del usuario, y oculta el modal
  */
  restableceClave() {
    this.props.restableceClave(this.state.cambiaClave);

    this.setState({
      cambiaClave: ''
    });

    this.setModalVisible(false);
  }

  render() {

    return (
      <View style = { estilo.contenedor }>
        <View style = { estilo.logo }>
        </View>
        <Input
          etiqueta = "Correo Electrónico"
          placeholder = "Ingresa aquí tu correo"
          onChange = { this.onChange.bind(this, 'correo') }
          value = { this.state.correo }
          tipo = "email-address"
          onFocus = { this.onFocus.bind(this) }
        />
        <Input
          etiqueta = "Contraseña"
          placeholder = "Ingresa aquí tu contraseña"
          onChange = { this.onChange.bind(this, 'clave') }
          value = { this.state.clave }
          password
        />
        <View>
          {
            this.props.autentificacion.autentificacion === null
             ? <Boton
                 etiqueta = "Ingresar"
                 accion = { this.enviaDatos.bind(this) }
               />
             : this.props.autentificacion.autentificacion.autentificando
               ? <ActivityIndicator
                   color = "#546E7A"
                   size = { 40 }
                 />
              : <Boton
                  etiqueta = "Ingresar"
                  accion = { this.enviaDatos.bind(this) }
                />
          }
        </View>
        <TouchableOpacity style = {{ marginTop: 10, marginBottom: 10 }} onPress = { () => {
          this.setModalVisible(true)
        }}>
          <Text style = {{ fontSize: 18, color: '#0091EA' }}>{ "Restablecer contraseña" }</Text>
        </TouchableOpacity>
        <View>
          {
            this.props.autentificacion.autentificacion === null
            ? null
            : !this.props.autentificacion.autentificacion.acceso && !this.props.autentificacion.autentificacion.autentificando
             ? <Text style = {{ marginTop: 20, color: '#F44336', fontSize: 18 }}>{ "El correo o la contraseña son incorrectos" }</Text>
             : null
          }
        </View>
        <Modal
          animationType = "slide"
          transparent = { false }
          visible = { this.state.modalVisible }
          onRequestClose = { () => {} }
          >
          <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <Text style = {{ fontSize: 20, color: '#455A64', marginBottom: 80 }}>{ "Se enviará un correo para que cambies tu contraseña, revisa tu bandeja de entrada." }</Text>
            <Input
              etiqueta = "Correo Electrónico"
              placeholder = "Ingresa aquí tu correo"
              onChange = { this.onChange.bind(this, 'cambiaClave') }
              value = { this.state.cambiaClave }
              tipo = "email-address"
            />
            <View style = {{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <Boton
                etiqueta = "Cancelar"
                width = { 100 }
                accion = {() => {
                  this.setModalVisible(false)
                }}
                color = "#455A64"
                fondo = "#FFFFFF"
              />
              <Boton
                etiqueta = "Aceptar"
                width = { 100 }
                accion = { this.restableceClave.bind(this) }
              />
            </View>
          </View>
        </Modal>
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
  },
  logo: {
    height: 150,
    width: 150,
    backgroundColor: '#FF5722',
    borderRadius: 100,
    elevation: 4,
    marginBottom: 20
  }
});

export default NuevaSesion;
