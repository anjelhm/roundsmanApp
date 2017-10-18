import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Menubar extends Component {

renderTabs () {
  const { children, activo } = this.props;
  return React.Children.map(children, (child,index) => {
    return React.cloneElement(child, {
      active: activo === index
    })
  })
}

  render() {

    return (
    <View style={ estilo.contenido }>
      { this.renderTabs() }
    </View>
    );
  }
}

const estilo = StyleSheet.create({
  contenido:{
    height: 50,
    flexDirection: 'row',
    elevation: 4,
    backgroundColor:"white",
    justifyContent: 'space-around'
  }
});

export default Menubar;
