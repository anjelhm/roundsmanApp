import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import Barra_nav from '../comunes/Barra_nav';

class Perfil extends Component {
  render() {

    const { imagen, nombre, fecha, sexo, correo } = this.props;

    return(
      <View style = {{ backgroundColor: '#FFFFFF' }}>
        <Barra_nav/>
        <Image
          style = { width = 50, height = 50 }
          source = { uri: imagen }
        />
        <View style = { estilo.vista }>
          <Text style = { estilo.texto1 }>
            Nombre:
          </Text>
          <Text style = { estilo.texto2 }>
            { nombre }
          </Text>
        </View>
        <View style = { estilo.vista }>
          <Text style = { estilo.texto1 }>
            Fecha de nacimiento:
          </Text>
          <Text style = { estilo.texto2 }>
            { fecha }
          </Text>
        </View>
        <View style = { estilo.vista }>
          <Text style = { estilo.texto1 }>
            Sexo: { sexo }
          </Text>
          <Text style = { estilo.texto2}>
            { sexo }
          </Text>
        </View>
        <View style = { estilo.vista }>
          <Text style = { estilo.texto1 }>
            Correo: { correo }
          </Text>
          <Text style = { estilo.texto2 }>
            { correo }
          </Text>
        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  texto1:{
    color: '#455A64',
    fontSize: 14
  },
  texto2:{
    color: '#90A4AE',
    fontSize: 18
  }
  vista:{
    justifyContent: 'space-between'
  }
});

Barra_nav.defaultProps = {
  imagen : 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
  nombre : 'nombre'
  fecha : 'fecha',
  sexo : 'sexo',
  correo : 'correo'
}
export default Perfil;
