import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

export default function App() {

  const [username, setUsername] = React.useState('')

  let obj = {
    user: 'fulano',
    age: 30,
  }

  

  AsyncStorage.setItem('obj', JSON.stringify(obj))
    .then( () => console.log('salvo!'))
    .catch( err => console.log(err))

  AsyncStorage.getItem('obj')  
    .then( str => {
      // console.log(value)
      const obj2 = JSON.parse(str)

      console.log(obj2.user)
      console.log(obj2.age)

      setUsername(obj2.user)
  })
  .catch( err => console.log(err))

  // AsyncStorage.removeItem('num')

  // AsyncStorage.getAllKeys()
  //   .then( keys => keys.forEach( k => console.log(k)))
  
  return (
    <View style={styles.container}>
      <Text>{username}</Text>
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
