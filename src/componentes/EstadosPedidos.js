import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Interruptor from '../comunes/Switch';
import Input from '../comunes/Input';

class EstadoPedidos extends Component {
  render() {
    return (
      <View style = {{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <View style = {{
        justifyContent: 'center',
        alignItems: 'center'}}>

        <View >
          <View style = {{
            alignItems: 'flex-start',
            marginTop: 5,
            marginLeft:20
            }}>

              <Text style = {{
                color: '#607D8B',
                fontSize: 14
              }}>De compras</Text>

          </View>

          <View style = {{
              alignItems: 'flex-end',
              marginRight: 20
              }}>
              <Interruptor/>
          </View>
        </View>
        <View>
          <View >
            <View style = {{
            alignItems: 'flex-start',
            marginTop: 5,
            marginLeft:10,
            fontSize: 14
          }}>

              <Text style = {{
                color: '#607D8B',
                fontSize: 14
              }}>Compra hecha</Text>

            </View>
              <View style = {{
              alignItems: 'flex-end',
              marginRight: 20
              }}>
              <Interruptor/>
            </View>
          </View>
      </View>
      <View>
          <View >
            <View style = {{
            alignItems: 'flex-start',
            marginTop: 5,
            marginLeft:20,
            fontSize: 14
          }}>

              <Text style = {{
                color: '#607D8B',
                fontSize: 14
              }}>Precio total</Text>

            </View>
              <View style = {{
              alignItems: 'flex-end',
              marginRight: 20
              }}>
              <Input/>
            </View>
          </View>
      </View>
      <View>
          <View >
            <View style = {{
            alignItems: 'flex-start',
            marginTop: 5,
            marginLeft:20
          }}>

              <Text style = {{
                color: '#607D8B',
                fontSize: 14
              }}>De Camino a la entrega</Text>

            </View>
              <View style = {{
              alignItems: 'flex-end',
              marginRight: 20
              }}>
              <Interruptor/>
            </View>
          </View>
      </View>
          <View >
            <View style = {{
            alignItems: 'flex-start',
            marginTop: 5,
            marginLeft:20,
            fontSize: 14
          }}>

              <Text style = {{
                color: '#607D8B',
                fontSize: 14
              }}>Compra entregada</Text>

            </View>
              <View style = {{
              alignItems: 'flex-end',
              marginRight: 20
              }}>
              <Interruptor/>
            </View>
          </View>
       </View>
      </View>
    ) ;
  }
}

export default EstadoPedidos;
