import React from "react";
import { StyleSheet, Text, View } from "react-native";

import GlobalStyle from './assets/styles/global';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={GlobalStyle.head}>Head</Text>
      <Text style={GlobalStyle.content}>Content</Text>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
