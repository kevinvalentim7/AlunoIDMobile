import { Image, View, StyleSheet } from "react-native";
import logoID from "../../assets/logoID.png"

export default function TopoAluno(){
  return(
    <View style={{top: 38 }}>
      <View style={styles.linha} />

      <View style={styles.container}>
        <Image 
          source={logoID} 
          style={styles.estiloImagem}
          resizeMode="contain"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  linha:{
    borderTopWidth: 2,
    borderColor: 'black',
  },

  estiloImagem:{
    width: 180,
    height: 70,
    top: -20
  }
})