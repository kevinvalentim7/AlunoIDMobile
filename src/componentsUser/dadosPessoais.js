import { Text, View, StyleSheet } from "react-native";
import TextBox from '../componentsUser/textBox';

export default function DadosPessoais(){
  return(
    <View style={styles.container}>
      
      <Text style={styles.textoTitulo}>Dados Pessoais:</Text>

      <TextBox linha1='Nome completo:' largura='80%'/>

      <View style={styles.linha}>
        <TextBox linha1='Data Nascimento:' largura='80%'/>
        <TextBox linha1='CPF:' largura='300%'/>
      </View>

      <TextBox linha1='RA:' largura='60%'/>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: '15%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset:{width: 2,height: 4},
    padding: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    margin: 1
    marginBottom: 30,
    width: '90%'
  },

  linha:{
    flexDirection: 'row',
    gap: 30
  },

  textoTitulo:{
    color: "#1C3D6E",
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'left',
    marginBottom: 20
  }
})