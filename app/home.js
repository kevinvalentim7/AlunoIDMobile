import { ScrollView, StyleSheet, Touchable, TouchableOpacity, View, Text } from "react-native";
import ContainerHome from "../src/components/containerHome";
import catracaID from "../assets/catracaID.png";
import carteirinhaID from "../assets/carteirinhaID.png";
import ContainerAnotacao from '../src/components/containerAnotacao';
import { useRouter } from "expo-router";
import BarraBar from "../src/componentsGeral/barraBar";
import TopoAluno from "../src/componentsGeral/topoAluno";
import { Stack } from "expo-router";
import decodeToken from "../src/utils/tokenToJson";
import { useEffect, useState } from "react";

export default function Home(){

  const router = useRouter();  

  const [token, setToken] = useState(null);

  useEffect(() => {
    async function fetchToken() {
      const decoded = await decodeToken();
      setToken(decoded);
      console.log(decoded);
    }
    fetchToken();

  }, []);

  return(
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{headerShown: false}} />
      <TopoAluno/>  

      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <ContainerHome 
          imagemContainer={carteirinhaID} 
          textoContainer='Acesse Sua' 
          primeiraLinha='Carteira De' 
          segundaLinha='Estudante'
          rota='/carterinhaAluno'
        />

        <ContainerHome 
          imagemContainer={catracaID} 
          textoContainer="Registro de"
          primeiraLinha="Entrada E" 
          segundaLinha="Saída"
          rota='/registroEntradaSaida'
        />

        <ContainerAnotacao/>


      <TouchableOpacity onPress={()=> {alert(JSON.stringify(token))}}>
        <Text>
          Dados do Token
        </Text>
      </TouchableOpacity>


      </ScrollView>

      
      <BarraBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
  },

  content: {
    paddingVertical: 20,
    alignItems: 'center',
    paddingBottom: 80
  }
});