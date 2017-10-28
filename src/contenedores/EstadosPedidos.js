import React, { Component } from 'react';
import { View } from 'react-native';

import EstadosPedidos from '../componentes/EstadosPedidos';
import { connect } from 'react-redux';

import { iniciaObtenerEstado, iniciaCambiarEstado  } from '../acciones/estado/actions';


 class ContenedorEstadoPedidos extends Component {

   render() {

     return (
       <View style = {{ flex: 1 }}>
         <EstadosPedidos />
       </View>
     );
   }
 }


 const mapStateToProps = ({ estados: estadoPedido }) => ({
   estadoPedido
 });

 const CambiarEstado = connect(
   mapStateToProps,
   { iniciaObtenerEstado, iniciaCambiarEstado }
 )(ContenedorEstadoPedidos);

 export default IniciaSesion;
