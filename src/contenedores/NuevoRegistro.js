import React, { Component } from 'react';
import { View} from 'react-native';

import Registro from '../componentes/Registro';

class NuevoRegistro extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <Registro/>
      </View>
    );
  }
}

export default NuevoRegistro;
