import React from "react";
import { StyleSheet, Text, View } from "react-native";



export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "stretch",
    justifyContent: "space-evenly",
  },

  box1: {
    backgroundColor: "red",
    flexGrow: 1,
    height: '50%',
  },

  box2: {
    backgroundColor: "green",
    flexGrow: 100, 
  },

  box3: {
    backgroundColor: "blue",
    width: 150,
    height: 50,
  }
});
