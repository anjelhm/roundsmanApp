import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

class Perfil extends Component {

  render() {

    const { imagen, nombre, fecha, sexo, correo, foto } = this.props;

    return(
      <View style = {{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View  style = { estilo.contenedor }>
          <View style = {{ alignItems: 'center'}}>
            <Image
              style = {{ width: 150, height: 150, borderRadius: 100 }}
              source = {{ uri: foto }}
            />
          </View>
          <View style = {{ marginTop: 20 }}>
            <View style = { estilo.vista }>
              <Text style = { estilo.texto1 }>
                Nombre:
              </Text>
              <View style = {{ alignItems: 'center' }}>
                <Text style = { estilo.texto2 }>
                  { nombre }
                </Text>
              </View>
            </View>
            <View style = { estilo.vista }>
              <Text style = { estilo.texto1 }>
                Fecha de nacimiento:
              </Text>
              <View style = {{ alignItems: 'center' }}>
                <Text style = { estilo.texto2 }>
                  { fecha }
                </Text>
              </View>
            </View>
            <View style = { estilo.vista }>
              <Text style = { estilo.texto1 }>
                Sexo:
              </Text>
              <View style = {{ alignItems: 'center' }}>
                <Text style = { estilo.texto2 }>
                  { sexo }
                </Text>
              </View>
            </View>
            <View style = { estilo.vista }>
              <Text style = { estilo.texto1 }>
                Correo electrónico:
              </Text>
              <View style = {{ alignItems: 'center' }}>
                <Text style = { estilo.texto2 }>
                  { correo }
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  contenedor: {
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 30,
    marginRight: 20
  },
  texto1:{
    color: '#607D8B',
    fontSize: 14
  },
  texto2:{
    color: '#000000',
    fontSize: 18,
    alignItems: 'center'
  },
  vista:{
    justifyContent: 'space-between'
  }
});

Perfil.defaultProps = {
  foto: 'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg',
  nombre: 'nombre',
  fecha: 'DD-MM-AAAA',
  sexo: 'Hombre',
  correo: 'correo@correo.com'
}
export default Perfil;
