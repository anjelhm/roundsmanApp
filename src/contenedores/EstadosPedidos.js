import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import EstadoPedidos from '../componentes/EstadosPedidos';
import { iniciaObtenerEstado, iniciaCambiarEstado  } from '../acciones/estado/actions';
import { lanzarEscanner } from '../acciones/navegador/actions';


 class ContenedorEstadoPedidos extends Component {

   static navigationOptions = {
     header: null
   };

   componentDidMount() {
     this.props.iniciaObtenerEstado(this.props.navigation.state.params.idUsuario, this.props.navigation.state.params.idPedido);
   }

   cambiaEstado(nombre, precio) {
     this.props.iniciaCambiarEstado(this.props.navigation.state.params.idUsuario, this.props.navigation.state.params.idPedido, this.props.navigation.state.params.idRepartidor, this.props.navigation.state.params.idPedidoAceptado, nombre, precio);
   }

   irAScanner() {
     this.props.lanzarEscanner(this.props.navigation.state.params.idRepartidor, this.props.navigation.state.params.idPedidoAceptado, this.props.navigation.state.params.solicitud)
   }

   render() {

     const { estadoPedido } = this.props;
     return (
       <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         {
           estadoPedido.estadoPedido !== null ? (
             <View style = {{ flex: 1 }}>
             {
               estadoPedido.estadoPedido.obteniendo
               ? <View>
                <Text>Obteniendo</Text>
               </View>
              : <View style = {{ flex: 1 }}>
                <EstadoPedidos estado = { estadoPedido.estadoPedido.estado } cambiaEstado = { this.cambiaEstado.bind(this) } irAScanner = { this.irAScanner.bind(this) }/>
              </View>
             }</View>
           )
           : <View><Text>Sin datos</Text></View>
         }
       </View>
     );
   }
 }



 const mapStateToProps = ({ estados: estadoPedido }) => ({
   estadoPedido
 });

 const EstadosPedidos = connect(
   mapStateToProps,
   { iniciaObtenerEstado, iniciaCambiarEstado, lanzarEscanner }
 )(ContenedorEstadoPedidos);

 export default EstadosPedidos;