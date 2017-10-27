import React, { Component } from 'react';
import {
  StatusBar,
  Text,
  View
} from 'react-native';

class SplashScreen extends Component {

    render() {
      return (
        <View style = {{ flex: 1, backgroundColor: '#FFFFFF' }}>
          <StatusBar hidden/>

          <View style = {{
            alignItems: 'center',
            justifyContent: 'center',
            flex:1 }}>

              <View style = {{
                 width: 200,
                 height: 200,
                 backgroundColor: '#607D8B',
                 borderRadius: 100}}>
              </View>

              <View style = {{ marginTop: 15  }}>
                <Text style = {{ fontSize: 30 , color: '#607D8B' }}>Mandadito</Text>
              </View>

          </View>

          <View>
            <Text  style = {{ color: '#607D8B' }} >
              F4-Lab
            </Text>
          </View>
        </View>

      );

    }

}

export default SplashScreen;
