import React, { Component } from 'react';
import {
  StatusBar,
  Text,
  View,
  Image
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

              <View>
                 <Image source={require('../publica/MarketHome.png')} style = {{
                    width: 200,
                    height: 200,
                    borderRadius: 100}}/>
              </View>

              <View style = {{ marginTop: 15  }}>
                <Text style = {{ fontSize: 30 , color: '#607D8B' }}>Markethome</Text>
              </View>

          </View>

          <View style = {{
              marginBottom: 15,
               alignItems: 'center'
             }}>
            <Text  style = {{ color: '#607D8B' }} >
              F4Lab
            </Text>
          </View>
        </View>

      );

    }

}

export default SplashScreen;
