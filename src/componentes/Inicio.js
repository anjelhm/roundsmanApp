import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import Drawer from './drawer/Drawer';

class Inicio extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Drawer>
        <View style={{ flex: 1 }}>
          <Text>Inicio</Text>
        </View>
      </Drawer>
    );
  }
}

export default Inicio;
