import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Alert } from "react-native";

export default function App() {

  const showConfirme = () => {
    Alert.alert(
      "Confirmacao",
      "Deseja realmente excluir o post?",
      [
        {
          text: "Sim",
          onPress: () => console.log ("Acao selecionada: SIM"),
        },
        {
          text: "Nao",
          onPress: () => console.log ("Acao selecionada: NAO"),
        },
        {
          text: "Cancelar",
          onPress: () => console.log ("Acao selecionada: CANCELAR"),
        },
      ]
    );
  };
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
       <Button 
        title="Mostrar Dialogo" 
        onPress={ showConfirme }
        />
    </View>
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
