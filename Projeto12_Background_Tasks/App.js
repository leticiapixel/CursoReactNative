import React from "react";
import { StyleSheet, Button, View } from "react-native";

import MyTask from "./src/services/MyTask";

export default function App() {

  const registerMyTask = () => {
    MyTask.register()
      .then( () => console.log ('task registered!'))
      .catch( error => console.log(error))
  }

  const unRegisterMyTask = () => {
    MyTask.unregister()
      .then( () => console.log ('task unregistered!'))
      .catch( error => console.log(error))
  }
  
  return (
    <View style={styles.container}>
      <Button
        title='Register'
        onPress={ () => registerMyTask()}
        />

      <Button
        title='Unregister'
        onPress={ () => unRegisterMyTask()}
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
