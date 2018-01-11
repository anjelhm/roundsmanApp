import React, {Component} from 'react';
import {
  View,
  Image
} from 'react-native';

import Boton from '../comunes/Boton'

class Sesion extends Component {
  render() {

    const { ingresar, registrar, iniciar } = this.props;

    return(
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style = {{
            height: 200,
            width: 200,
            borderRadius: 100,
            justifyContent: 'center',
            elevation: 4 }}
          >
          <Image source={require('../publica/MarketHome.png')} style = {{
            height: 200,
            width: 200,
            borderRadius: 100}}/>
          </View >
          <View style = {{ marginTop: 20 }}>
            <Boton etiqueta = 'Ingresar' accion = { iniciar } />
            <Boton etiqueta = 'Registrar'
             color = { '#000000' }
             fondo = { '#FFFFFF' }
             accion = { registrar }
             />
          </View>
      </View>
     );
  }
}
export default Sesion;
