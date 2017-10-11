import React, {Component} from 'react';
import { View } from 'react-native';
import Boton from '../comunes/Boton'

class Sesion extends Component {
  render() {
    return(
        <View style={{
          justifyContent:'center',
          alignItems:'center'}}
        >
          <View style={{ height:200,
            width: 200,
            borderRadius:100,
            justifyContent: 'center',
            elevation: 4 }}>
          </View>
          <Boton etiqueta = {'Ingresar'} />
          <Boton etiqueta = {'Registrar'} />
      </View>
     );
  }
}
export default Sesion;
