import { Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function ContainerAnotacao({primeiroInput, segundoInput, terceiroInput}){
  return(
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 'arial', fontSize: 25, color: '#5AA6A8', marginBottom: 15}}>Anotações:</Text>
      <TouchableOpacity style={styles.textoBotao}>Adicione Anotações</TouchableOpacity>
      <Text style={styles.textoInput}>{primeiroInput}</Text>
      <Text style={styles.textoInput}>{segundoInput}</Text>
      <Text style={styles.textoInput}>{terceiroInput}</Text>
      <TouchableOpacity style={styles.textoBotao}>Ver Outras Anotações</TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    padding: 8,
    height: 290,
    width: '90%',
    borderWidth: 1, 
    elevation: 8,
    borderRadius: 25,
    shadowColor: "#000",
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset:{width: 2,height: 4},
    borderColor: 'white'
  },
  textoBotao:{
    color: 'black', 
    fontSize: 18, 
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15
  },
  textoInput:{
    fontSize: 10,
    fontFamily: 'arial',
    fontWeight: 'bold',
    borderWidth: 1,
    height: 40,
    width: 300,
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 10
  }
})