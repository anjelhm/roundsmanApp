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

              <View
              style = {{
                width: 200,
                height: 200,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center'}}>
                 <Image source={require('../publica/MarketHome.png')} style = {{
                    width: 170,
                    height: 170,
                    borderRadius: 100}}/>
              </View>

              <View style = {{ marginTop: 15  }}>
                <Text style = {{ fontSize: 30 , color: '#607D8B' }}>Markethome</Text>
              </View>

          </View>

          <View style = {{
              marginBottom: 2,
               alignItems: 'center'
             }}>
            <Text  style = {{ fontSize: 12, color: '#607D8B' }} >
              F4Lab
            </Text>
          </View>
        </View>

      );

    }

}

export default SplashScreen;
