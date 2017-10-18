import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Boton  = (
  { active = false, etiqueta = "", accion = () => {}, icono = "shopping-basket" }
  :{ active: boolean, etiqueta: string, accion: () => void, icono: string }
):
Any=>{

const estilotexto = active
?{ color: "#000000", fontSize: 10 }
:{ color: "#CFD8DC", fontSize: 10 };

const estiloicono = active
? "#000000"
: "#CFD8DC";

return (
    <TouchableOpacity onPress={ accion } style={{ alignItems:'center',justifyContent:'center'}}>
       <Icon name = { icono } size = { 32 } color = { estiloicono} />
        <Text style={ estilotexto }>
          { etiqueta }
        </Text>
    </TouchableOpacity>
    );
}


export default Boton;
