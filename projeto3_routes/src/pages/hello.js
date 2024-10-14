import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";


export default function Hello(props) {
  return (
    <View style={styles.container}>
      <Text>Page Hello</Text>
      
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
