import React, {Component} from 'react';
import { View } from 'react-native';
import Boton from '../comunes/Boton'

class Sesion extends Component {
  render() {
    const {ingresar, registrar}=this.props;
    return(
        <View style = {{
          justifyContent:'center',
          alignItems:'center'}}
        >
          <View style = {{ height:200,
            width: 200,
            borderRadius:100,
            justifyContent: 'center',
            elevation: 4 }}>
          </View >
          <View style = {{ height: 5}} ></View >
          <Boton etiqueta = 'Ingresar' />
          <View style = {{ height: 5}} ></View >
          <Boton etiqueta = 'Registrar' color= {'#000000'} fondo = {'#FFFFFF'}/>
      </View>
     );
  }
}
export default Sesion;
