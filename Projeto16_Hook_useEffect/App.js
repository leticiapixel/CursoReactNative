import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import HookSample from "./src/components/HookSample";

export default function App() {
  const [showSample, setShowSample] = React.useState(true)
  
  if (showSample)
    return (
      <View style={styles.container}>
        <HookSample />
        <Button title="Unmount" onPress={() => setShowSample(false)} />
      </View>
    );

  return (
    <View style={styles.container}>
      <Text>No component!</Text>
    </View>
  )  
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
