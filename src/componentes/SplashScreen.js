import Rectt, { Component } from " react";
import {
  StatusBar,
  Text,
  View
} from 'react-native':

class SplashScreen extends Component {
  constructor() {
    return {
      <View style = {{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar hidden/>
      
        <View style = {{
          alignItems: 'center',
          justifyContent: 'center',
          flex:1 }}>

            <View style = {{
               width: 200,
               height: 200
               borderRadius: 100}}>
            </View>

            <View style = {{ marginTop: 15, color: '#607D8B' }}>
              <Text>Mandadito</Text>
            </View>

        </View>

        <View>
          <Text  style = {{ color: '#607D8B' }} >
            F4-Lab
          </Text>
        </View>
      </View>

    }
  }
}
export default SplashScreen;
