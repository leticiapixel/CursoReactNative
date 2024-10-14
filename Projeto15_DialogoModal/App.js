import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Modal, Text } from "react-native";

export default function App() {

  const [modalVisible, setModalVisible] = React.useState(false)

  return (
    <View style={styles.container}>

      <Modal
        visible={modalVisible}
        animationType="fade"
      >
        <View style={styles.modal} >
          <Text>Conteudo</Text>
          <Button
          title="Fechar Modal"
          onPress={ () => setModalVisible(false) }
          />
        </View>

      </Modal>

      <StatusBar style="auto" />
       <Button 
        title="Mostrar Modal" 
        onPress={ () => setModalVisible(true) }
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
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 24,
    borderRadius: 8,
    backgroundColor: 'lightgrey',
    marginVertical: 64,
  }
});
