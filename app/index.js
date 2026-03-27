import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import logoId from "../assets/logoID.png"
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';

export default function Index(){
  
const router = useRouter();  

  return(
    <View style={styles.container}>
      <Stack.Screen options={{headerShown: false}} />
      <Image style={styles.logoId} source={logoId}/>
       <TextInput keyboardType="email-address" style={styles.input} placeholder="Coloque aqui seu RA" placeholderTextColor= 'gray'/>
       <TextInput  secureTextEntry={true} style={styles.input} placeholder="Coloque aqui sua senha" placeholderTextColor= 'gray'/>
       <TouchableOpacity style={styles.botao}  onPress={() => router.replace("/home")}>
       <Text style={{color: 'white', textAlign: 'center', fontSize: 30, fontFamily: 'arial', fontWeight: 'bold'}}>
       ENTRAR
       </Text>
       </TouchableOpacity>
       <TouchableOpacity>
       <Text style={{color: 'black', fontSize: 20,}}>
        Esqueci minha senha
       </Text>
       </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  logoId:{
    width: 300,
    height: 100,
    marginBottom: 90
  },
  input:{
    borderWidth: 1,
    width: 320,
    height: 40,
    color: 'black',
    borderRadius: 10,
    marginBottom: 50,
    paddingVertical: 8,
    borderBottomWidth: 1,
    fontSize:20
  },
  botao:{
    borderWidth: 1,
    backgroundColor:'#3DC2FF',
    borderRadius: 30,
    width: 300,
    height: 50,
    marginBottom: 15,
    borderColor: '#3DC2FF',
    justifyContent: 'center',
    alignItems: 'center'
  }

})