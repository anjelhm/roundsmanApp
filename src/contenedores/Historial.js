import React, { Component } from 'react';
import { View } from 'react-native';

import MiHistorial from '../componentes/Historial/MiHistorial';

class Historial extends Component {
  render() {
    return(
      <View style = {{ backgroundColor: '#CFD8DC'}}>
        <MiHistorial/>
      </View>
    );
  }
}

export default Historial;
