import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  CameraRoll,
  ScrollView,
  Dimensions
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

const { width } = Dimensions.get('window');


const Blob = RNFetchBlob.polyfill.Blob;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

class Fotos extends Component {

  constructor() {
    super();

    this.state = {
      fotos: []
    };

  }

  componentDidMount() {
    this.obtenerFotos();
  }

  obtenerFotos() {
    CameraRoll.getPhotos({
      first: 200,
      assetType: 'Photos',
    })

    .then(r => this.setState({ fotos: r.edges }));
  }

  archivo(index) {
    const imagen = this.state.fotos[index].node.image.uri

    let rnfbURI = RNFetchBlob.wrap(imagen)
    Blob
    .build(rnfbURI, { type : 'image/png;'})
    .then(blob => {
      this.props.enviaData(imagen, blob);
    });
    // RNFetchBlob.fs.readFile(imagen, 'base64')
    //   .then(data => {
    //
    //   });
  }

  render() {
    return (
      <View style ={{ flex:  1, justifyContent: 'center', alignItems: 'center' }}>
        <View style = {{ height: 40, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', elevation: 4 }}>
          <Text style = {{ fontSize: 22, color: '#607D8B' }}>Fotos</Text>
        </View>
        <ScrollView contentContainerStyle = {{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {
            this.state.fotos.map((p,i) => {
              return (
                <TouchableOpacity
                  key={i}
                  underlayColor='transparent'
                  onPress = { this.archivo.bind(this, i) }
                >
                <Image
                  style={{ width: width/3, height: width/3 }}
                  source={{uri: p.node.image.uri}}
                />
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
    );
  }
}

export default Fotos;
