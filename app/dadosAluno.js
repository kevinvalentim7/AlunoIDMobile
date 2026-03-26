import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DadosPessoais from "../src/componentsUser/dadosPessoais"
import EnderecoContato from '../src/componentsUser/enderecoContato';
import BarraBar from '../src/componentsGeral/barraBar';
import TopoAluno from "../src/componentsGeral/topoAluno";

export default function DadosAluno(){
  return(
    <View style={styles.container}>
      <DadosPessoais/>
      <EnderecoContato/>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>
          Finalizar Sessão
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textoBotao:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },

  botao:{
    backgroundColor: '#DE0E11',
    borderWidth: 1,
    borderColor: '#DE0E11',
    borderRadius: 15,
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})