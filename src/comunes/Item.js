import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Item = ({ icono, nombre, accion }) => (
  <TouchableOpacity onPress={ accion } style={{ flexDirection: 'row', height: 42, paddingLeft: 20 }}>
    <Icon name={ icono } size={ 28 } color="#455A64"/>
    <Text style={{ color: '#455A64', fontSize: 18, marginLeft: 10 }}>{ nombre }</Text>
  </TouchableOpacity>
);

export default Item;
