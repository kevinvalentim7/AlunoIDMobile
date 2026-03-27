import {Text, StyleSheet, View} from 'react-native'
import TextBox from './textBox'

export default function EnderecoContato(){
  return(
    <View style={styles.container}>
      <Text style={styles.textoTitulo}>Endereço e Contato </Text>
      <View style={styles.linha}>
        <TextBox linha1 = 'CEP:' largura='300%'/>
        <TextBox linha1= 'Cidade:' largura= '200%'/>
      </View>
      <View style={styles.linha1}>
        <TextBox linha1= 'N°:' largura="300%"/>
        <TextBox linha1= 'Rua' largura="600%"/>
      </View>
      <View style={styles.linha1}>
        <TextBox linha1= 'Cidade:' largura="200%"/>
        <TextBox linha1= 'Complemento:' largura="130%"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: '30%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset:{width: 2,height: 4},
    padding: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    margin: 6,
    marginBottom: 30,
    width: '90%',
    height: '40%',
  },

  linha:{
    flexDirection: 'row',
    gap: 120
  },
  linha1:{
    flexDirection: 'row',
    gap: 90
  },

  textoTitulo:{
    color: "#1C3D6E",
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'left',
    marginBottom: 20
  }
})