import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

import home from '../../assets/home.png';
import agenda from '../../assets/agenda.png';
import carteira from '../../assets/carteira.png';

export default function BarraBar(){
  return(
    <View style={styles.barra}>
      <TouchableOpacity style={styles.botao}>
        <Image source={home} style={{width: 38, height: 39}}/>
        <Text style={styles.estiloTexto}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { top: -9 }]}>
        <Image source={carteira} style={{width: 50, height: 50}}/>
        <Text style={styles.estiloTexto}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}>
        <Image source={agenda} style={{width: 40, height: 40}}/>
        <Text style={styles.estiloTexto}>Agenda</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  barra: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    gap: 40,
    borderTopWidth: 2,
    width: '100%'
  },
  botao:{
    alignItems: 'center',
  },  
  estiloTexto:{
    color: 'black',
    fontFamily: 'arial',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  }
});