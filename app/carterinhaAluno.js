import { Text, View, Image, StyleSheet } from "react-native";
import logoID from "../assets/logoID.png"
import { useState } from "react";

export default function CarteirinhaAluno({nome, escola, cpf, ra, dataNasc}){

  cpf = 98798798798
  ra = 123456789
  dataNasc = "01/01/2000"
  nome = "Kevin Valentim"
  escola = "Escola Estadual de Ensino Médio"

  return(
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image style={{width: "40%", height: 45, top: -25}} source={logoID}/>
        <View style={{top: -5, left: 50}}>
          <Text style={styles.textoContainer}>{nome}</Text>
          <Text style={styles.textoContainer}>{escola}</Text>
          <Text style={styles.textoContainer}>CPF: {cpf}</Text>
          <Text style={styles.textoContainer}>RA: {ra}</Text>
          <Text style={styles.textoContainer}>Data de nascimento: {dataNasc}</Text>
        </View>
      </View>



      <View style={styles.box1}>
            <Text style={[styles.textoContainer, {top: -60, left: -95, fontSize: 25}]}>QR Code:</Text>
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center'
  },
  box1:{
    backgroundColor: '#31556E',
    height: "35%",
    width: "90%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#31556E',
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"  
  },
  textoContainer:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 7
  },
})