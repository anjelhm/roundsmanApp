import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Drawer from 'react-native-drawer';

class PruebaDrawer extends Component {

  constructor() {
    super();

    this.state = {
      abrir: false
    };

  }

  static navigationOptions = {
    header: null
  };

  verDrawer = () => {
    this.drawer.open();
  };

  render() {
    return (
        <Drawer
          ref = { ref => this.drawer = ref }
          type = "overlay"
          tapToClose
          content = { <View style = {{ backgroundColor: '#607D8B', height: '100%' }} ></View> }
          openDrawerOffset = { 0.2 }
          panCloseMask = { 0.2 }
          closedDrawerOffset = { -3 }
          style = {{ shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 }}
        >
          <View style = {{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress = { this.verDrawer.bind(this) }>
              <Text>MOSTRAR</Text>
            </TouchableOpacity>
          </View>
        </Drawer>
    );
  }
}

export default PruebaDrawer;
