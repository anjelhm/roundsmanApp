import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import EstadoPedidos from '../componentes/EstadosPedidos';
import { iniciaObtenerEstado, iniciaCambiarEstado  } from '../acciones/estado/actions';


 class ContenedorEstadoPedidos extends Component {

   render() {
     return (
       <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <EstadoPedidos />
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

 export default ContenedorEstadoPedidos;
