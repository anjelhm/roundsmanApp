import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Item extends Component {

  render() {

  const { cantidad, nombre, descripcion } = this.props;

    return (
        <View style = { estilo.item }>
            <View style = {{ marginLeft: 5, marginRight: 5 , width: 30 , alignItems: 'center', backgroundColor: '#212121' }}>
                 <Text  style = {{ fontSize: 20, color: 'white' }}>{ cantidad }</Text>
            </View>
            <View style = {{ marginLeft: 10, marginRight: 10 }}>
                 <Text>{ nombre }</Text>
            </View>
            <View style = {{ marginLeft: 10, marginRight: 10 }}>
                <Text>{ descripcion }</Text>
            </View>
        </View>
        );
      }
    }

const estilo = StyleSheet.create({
  item: {
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    flexDirection: 'row',
    marginTop: 5,
    elevation: 2
  }
});

export default Item;
