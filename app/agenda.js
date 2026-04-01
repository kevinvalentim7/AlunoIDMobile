import { View, StyleSheet } from "react-native";
import Calendario from "../src/componentsCalendario/calendario";
import BarraBar from "../src/componentsGeral/barraBar";
import TopoAluno from "../src/componentsGeral/topoAluno";
import { Stack } from "expo-router";

export default function Agenda(){
  return(
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.content}>
        <TopoAluno/>
        <Calendario/>
      </View>

      <BarraBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1, 
    color: 'white',
  }
});