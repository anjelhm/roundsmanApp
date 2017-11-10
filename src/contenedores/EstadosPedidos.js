import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { connect } from 'react-redux';

import EstadoPedidos from '../componentes/EstadosPedidos';
import Barra_nav from '../comunes/Barra_nav';

import { iniciaObtenerEstado, iniciaCambiarEstado  } from '../acciones/estado/actions';
import { lanzarEscanner, lanzarAnterior } from '../acciones/navegador/actions';


 class ContenedorEstadoPedidos extends Component {

   static navigationOptions = {
     header: null
   };

   componentDidMount() {
     this.props.iniciaObtenerEstado(this.props.navigation.state.params.idUsuario, this.props.navigation.state.params.idPedido);
   }

   cambiaEstado(nombre, precio) {
     this.props.iniciaCambiarEstado(this.props.navigation.state.params.idUsuario, this.props.navigation.state.params.idPedido, this.props.navigation.state.params.idRepartidor, this.props.navigation.state.params.idPedidoAceptado, this.props.navigation.state.params.solicitud, nombre, precio);
   }

   irAScanner() {
     this.props.lanzarEscanner(this.props.navigation.state.params.idRepartidor, this.props.navigation.state.params.idPedidoAceptado, this.props.navigation.state.params.solicitud)
   }

   retroceder(){
     this.props.lanzarAnterior();
   }

   render() {

     BackHandler.addEventListener("hardwareBackPress", () => {
       if (this.props.navigation.state.routeName === "Inicio") {
         return false // exit app
       } else {
         this.props.lanzarAnterior();
         return true // do not exit app
       }
     })

     const { estadoPedido } = this.props;
     return (
       <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
        <Barra_nav titulo = "Nuevo Registro" retroceder = { this.retroceder.bind(this) }/>
         <View style = {{ flex: 1 }}>
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
       </View>
     );
   }
 }



 const mapStateToProps = ({ estados: estadoPedido }) => ({
   estadoPedido
 });

 const EstadosPedidos = connect(
   mapStateToProps,
   { iniciaObtenerEstado, iniciaCambiarEstado, lanzarEscanner, lanzarAnterior }
 )(ContenedorEstadoPedidos);

 export default EstadosPedidos;
