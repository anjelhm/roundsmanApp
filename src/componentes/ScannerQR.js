import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Camera from 'react-native-camera';

class ScannerQR extends Component {

  static navigationOptions = {
    header: null
  };


  constructor() {
    super();

    this.state = {
        mostrarCamara: true,
        tipoCamara: Camera.constants.Type.back,
        url: ''
    };

  }

  leeCodigo(e) {
    alert('Tipo: ' + e.type + ' Data: ' + e.data);
    this.setState({
      mostrarCamara: false,
      url: e.data
     });
  }

  render() {
    return (
      <View style= {{ flex: 1 }}>
        {
          this.state.mostrarCamara
          ? <Camera
            ref = { (cam) => { this.camera = cam; } }
            style = {{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
            type = { this.state.tipoCamara }
            onBarCodeRead = { this.leeCodigo.bind(this) }
          >
          </Camera>
          : <View style = {{ flex: 1 }}>
            <Text style = {{ fontSize: 20, color: 'blue' }}>{ this.state.url }</Text>
          </View>
        }
      </View>
    );
  }
}

export default ScannerQR;
