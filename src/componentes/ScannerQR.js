import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import Camera from 'react-native-camera';
import { connect } from 'react-redux';

import { iniciaCerrarPedido } from '../acciones/pedidos/actions';

class ContenedorScannerQR extends Component {

  static navigationOptions = {
    header: null
  };


  constructor() {
    super();

    this.state = {
        mostrarCamara: true,
        tipoCamara: Camera.constants.Type.back,
        clave: ''
    };

  }

  leeCodigo(e) {
    this.setState({
      mostrarCamara: false,
      clave: e.data
     });
     this.props.iniciaCerrarPedido(this.props.navigation.state.params.solicitud, this.props.navigation.state.params.idRepartidor, this.props.navigation.state.params.idPedidoAceptado);
  }

  render() {

    const { cierra } = this.props;

    return (
      <View style= {{ flex: 1 }}>
        {
          this.state.mostrarCamara
          ? <View style = {{ flex: 1, backgroundColor: '#607D8B', justifyContent: 'center', alignItems: 'center' }}>
            <Camera
              ref = { (cam) => { this.camera = cam; } }
              style = {{ width: 400, height: 400 }}
              type = { this.state.tipoCamara }
              onBarCodeRead = { this.leeCodigo.bind(this) }
            >
            </Camera>
          </View>
          : <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             {
               cierra !== null ? (
                 <View style = {{ flex: 1 }}>
                    {
                      cierra.cerrando
                       ? <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                          <ActivityIndicator color="#607D8B" size = { 62 }/>
                       </View>
                       : <View>
                          {
                            cierra.detalle
                              ? <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>{ cierra.error }</Text>
                              </View>
                              : <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>Listo</Text>
                              </View>
                          }
                       </View>
                    }
                 </View>
               ) : null
             }
          </View>
        }
      </View>
    );
  }
}

const mapStateToProps = ({ pedidosaceptados: { cierra } }) => ({
  cierra
});

const ScannerQR = connect(
  mapStateToProps,
  { iniciaCerrarPedido }
)(ContenedorScannerQR);

export default ScannerQR;
