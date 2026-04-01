import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import logoID from "../../assets/logoID.png";
import avatar from "../../assets/avatar.png";
import { useRouter } from "expo-router";

export default function TopoAluno(){
  
  const router = useRouter();

  return(
      <View style={styles.container}>
        <Image 
          source={logoID} 
          style={styles.estiloImagem}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => router.replace('/dadosAluno')}>
          <Image source={avatar} style={styles.estiloAvatar} />
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },


  estiloImagem:{
    width: 185,
    height: 80,
    top: -20
  },
  estiloAvatar:{
    width: 40,
    left: 60,
    top: -15,
    height: 40,
  }

})