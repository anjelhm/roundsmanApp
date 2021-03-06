import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';

import { iniciaAutentificacion, enviaCorreoClave } from '../acciones/autentificar/actions';

import NuevaSesion from '../componentes/NuevaSesion';

class ContenedorIniciaSesion extends Component {

  static navigationOptions = {
    header: null
  };

  /**
  * función que ejecuta la acción para iniciar sesión
  * @param { string } correo
  * @param { string } clave
  */
  sesion(correo, clave) {
    this.props.iniciaAutentificacion(correo, clave);
  }

  /**
  * función que ejecuta la acción para reestablecer la clave
  * @param { string } correo
  */
  restableceClave(correo) {
    this.props.enviaCorreoClave(correo);
  }

  render() {

    return (
      <View style = {{ flex: 1 }}>
        <NuevaSesion
          enviaDatos = { this.sesion.bind(this) }
          autentificacion = { this.props.autentificacion }
          restableceClave = { this.restableceClave.bind(this) }
        />
      </View>
    );
  }
}

const mapStateToProps = ({ autentificador: autentificacion }) => ({
  autentificacion
});

const IniciaSesion = connect(
  mapStateToProps,
  { iniciaAutentificacion, enviaCorreoClave }
)(ContenedorIniciaSesion);

export default IniciaSesion;
