import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Interruptor from '../comunes/Switch';
import Input from '../comunes/Input';

class EstadoPedidos extends Component {
  render() {
    return (
      <View style = {{
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
      }}>
      <View>

        <View >
          <View style = {{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: 15,
            }}>

              <Text style = {{
                color: '#607D8B',
                fontSize: 14,
                marginLeft: 40
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
            fontSize: 14
          }}>

              <Text style = {{
                color: '#607D8B',
                fontSize: 14,
                marginLeft: 40
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
              flex: 1
              }}>
          </View>
              <View style = {{
              marginLeft: 40
              }}>
              <Input etiqueta = { 'Precio Total' }/>
            </View>
          </View>
      </View>
      <View>
          <View >
            <View style = {{
            alignItems: 'flex-start',
            marginTop: 5,
          }}>

              <Text style = {{
                color: '#607D8B',
                marginLeft: 40,
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
            fontSize: 14
          }}>

              <Text style = {{
                color: '#607D8B',
                marginLeft: 40,
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
export default estadoPedido;
