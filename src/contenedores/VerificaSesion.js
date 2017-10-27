import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { verificaSesion } from '../acciones/autentificar/actions';

import SplashScreen from '../componentes/SplashScreen';

class ContenedorVerificaSesion extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount(){
    this.props.verificaSesion();
  }

  render (){
    return (
        <View style={{ flex: 1 }}>
          <SplashScreen/>
        </View>
    );
  }
}
const mapStateToProps = ( { navegador: nav } ) => ( {
  nav
} );

const VerificaSesion = connect(
  mapStateToProps,
  { verificaSesion  }
)( ContenedorVerificaSesion );

export default VerificaSesion;
