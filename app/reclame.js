import { Text, View, TextInput, StyleSheet } from 'react-native';

export default function Reclame(){
  return(
    <View style={styles.container}>
      <TextInput   placeholder='digite aqui sua reclamação'>
      </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 6,  
    shadowOffset:{width: 2,height: 4},
    padding: 15,
    borderRadius: 20,
   
  }
})