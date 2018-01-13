import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Image
} from 'react-native';

import MenuLateral from '../../contenedores/MenuLateral';

class MenuDrawer extends Component {

  render() {

    return (
      <View style = {{ flex: 1, backgroundColor: '#FAFAFA' }}>
          <View style = {{ flex: 1, backgroundColor: '#607D8B', elevation: 4, marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
            <View
            style={{
              elevation: 2,
              width: 120,
              height: 120,
              borderRadius: 100,
              backgroundColor: '#FFFFFF',
              alignItems: 'center',
              justifyContent: 'center' }}>
              <Image source={require('../../publica/MarketHome.png')} style = {{
                width: 100,
                height: 100,
                borderRadius: 100}}/>
            </View>
          </View>
          <View style = {{ flex: 3 }}>
            <View style = {{ flex: 1 }}>
              <MenuLateral id = { this.props.id }/>
            </View>

            <View style = {{ flex: 4, justifyContent: 'center', justifyContent: 'flex-end', }}>
              <View style={{  borderTopWidth: 1, borderColor: '#C8D8DC', height: 51 }}>
              <Text style = {{ fontSize: 14, color: '#607D8B', marginBottom: 5, paddingLeft: 10 , marginTop: 5 }}>Desarrollado por F4Lab</Text>
              <Text style = {{ fontSize: 10, color: '#607D8B', marginBottom: 10, paddingLeft: 10 }}>{"Version: 1.0.0 "}</Text>
              </View>
            </View>
          </View>
      </View>
    );
  }
}

export default MenuDrawer;
