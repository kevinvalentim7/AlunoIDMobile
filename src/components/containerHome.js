import { Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ContainerHome({ imagemContainer, textoContainer, primeiraLinha, segundaLinha, rota }) {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image 
        source={imagemContainer}
        style={{marginLeft: 10, width: 110, height: 60, resizeMode: 'cover'}}
      />

      <Text style={styles.corTitulo}>
        {textoContainer}
      </Text>

      <Text style={styles.textoSecundario}>
        {primeiraLinha}
      </Text>

      <Text style={styles.textoSecundario}>
        {segundaLinha}
      </Text>

      <TouchableOpacity style={styles.botao} onPress={() => router.replace(rota)}>
        <Text style={{color: 'white', fontFamily: 'arial,', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
          Acessar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    height: 120,
    width: '90%',
    borderWidth: 1, 
    borderColor: 'gray',
    elevation: 8,
    borderRadius: 25,
    shadowColor: "#000",
    marginBottom: 20,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset:{width: 2,height: 4},
  },
  botao:{
    backgroundColor: "#2ECC71",
    height: 30,
    width: 150,
    borderWidth: 1, 
    borderRadius: 20,
    borderColor: '#2ECC71',
    marginLeft: 150
  },
  corTitulo:{
    color:'#5AA6A8',
    fontSize: 22,
    fontFamily:'arial',
    fontWeight: 'bold',
    marginLeft: 150,
    marginTop: -60
  },
  textoSecundario:{
    color: '#0074D9',
    fontSize: 18,
    fontFamily: 'arial',
    fontWeight: 'bold',
    marginLeft: 150

  }
});