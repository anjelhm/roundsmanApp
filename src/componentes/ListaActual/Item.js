import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Item extends Component {

  render() {

  const { cantidad, nombre, descripcion } = this.props;

    return (
        <View style = {{ height: 50, marginLeft: 5, marginRight: 5, flex: 1, marginBottom: 5 , marginTop: 5 , backgroundColor: '#FFFFFF', elevation: 4, flexDirection: 'row' }}>
            <View style = {{ marginLeft: 5, marginRight: 5 , width: 30 , alignItems: 'center', backgroundColor: '#212121', justifyContent: 'center' }}>
                 <Text  style = {{ fontSize: 20, color: 'white' }}>{ cantidad }</Text>
            </View>
            <View style = {{ flexDirection: 'column' }}>
            <View style = {{ marginLeft: 10, marginRight: 10 }}>
                 <Text style = {{ color: '#607D8B', fontSize: 18 }}>{ nombre }</Text>
            </View>
            <View style = {{ marginLeft: 10, marginRight: 10 }}>
                <Text style = {{ color: '#607D8B', fontSize: 18 }}>{ descripcion }</Text>
            </View>
            </View>
        </View>
        );
      }
    }


export default Item;
