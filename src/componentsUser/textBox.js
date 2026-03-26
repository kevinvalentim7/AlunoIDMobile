import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function TextBox({ linha1, linha2, largura }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textoSub}>{linha1}</Text>

      <Text
        style={[styles.textBox, { width: largura }]}
        placeholder={linha2}
        placeholderTextColor="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
  },

  textoSub: {
    color: '#1C3D6E',
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 18
  },

  textBox: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F0F4F8',
    height: 23,
    borderColor: '#F0F4F8',
    paddingHorizontal: 10,
  },
});