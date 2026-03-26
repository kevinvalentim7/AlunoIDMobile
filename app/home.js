import { ScrollView, StyleSheet } from "react-native";
import ContainerHome from "../src/components/containerHome";
import catracaID from "../assets/catracaID.png";
import carteirinhaID from "../assets/carteirinhaID.png"
import ContainerAnotacao from '../src/components/containerAnotacao';

export default function Home(){
  return(
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <ContainerHome 
        imagemContainer={carteirinhaID} 
        textoContainer='Acesse Sua' 
        primeiraLinha='Carteira De' 
        segundaLinha='Estudante'
      />

      <ContainerHome 
        imagemContainer={catracaID} 
        textoContainer='Registro De' 
        primeiraLinha='Entrada E' 
        segundaLinha='Saída'
      />

      <ContainerAnotacao/>

    </ScrollView>
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
    justifyContent: 'center'
  }
})