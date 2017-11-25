import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Modal extends Component {
  render() {
    const { ver, full, children } = this.props;
    if(ver) {
      return (
        <View style={{
          flex: 1,
          top: full ? 0 : -60,
          right: 0,
          left: 0,
          bottom: 0,
          position: 'absolute',
          width: '100%',
          elevation: 8,
          backgroundColor: 'rgba(0,0,0,0.87)'
        }}>
          { children }
        </View>
      );
    } else {
      return null;
    }
}
}

Modal.defaultProps = {
  ver: false,
  full: false
};

export default Modal;
