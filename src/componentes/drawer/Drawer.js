import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet
} from 'react-native';

import MenuLateral from '../../contenedores/MenuLateral';

class MenuDrawer extends Component {

  render() {

    return (
      <View style = {{ flex: 1, backgroundColor: '#FAFAFA' }}>
          <View style = {{ flex: 1, backgroundColor: '#607D8B', elevation: 4, marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <Image source={require('../../publica/MarketHome.png')} style = {{
              width: 120,
              height: 120,
              borderRadius: 100}}/>
          </View>
          </View>
          <View style = {{ flex: 3 }}>
            <View style = {{ flex: 1 }}>
              <MenuLateral id = { this.props.id }/>
            </View>
            <View style = {{ flex: 4, alignItems: 'center', justifyContent: 'flex-end' }}>
              <Text style = {{ fontSize: 14, color: '#607D8B', marginBottom: 10 }}>F4Lab</Text>
            </View>
          </View>
      </View>
    );
  }
}

export default MenuDrawer;
