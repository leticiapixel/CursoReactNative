import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";


export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Page Home</Text>
      <Button
            title = "Go to Hello"
            onPress = { () => { props.navigation.navigate('Hello')}} 
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
