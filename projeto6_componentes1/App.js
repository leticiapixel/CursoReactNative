import React from "react";
import { SafeAreaView, StatusBar, Image,  StyleSheet, Text, View, TextInput, Button, Switch } from "react-native";



export default function App() {

  const [textValue, onChangeText] = React.useState('Insert your text')
  const [isEnabled, setIsEnabled] = React.useState(false)
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.textTitle}>titulo {textValue}</Text>
      <Text style={styles.textContent}>Hello</Text>
      {/* <Image
        source={require('./assets/images/icon.png')} /> */}

        <TextInput
          style={styles.inputText} 
          onChangeText={text => onChangeText(text)}
          value={textValue}
          />

          <Button
            title="Press Me!"
            onPress={() => console.log('pressed!')}
            />
 
          <Button
            title="Press Me!"
            onPress={() => console.log('pressed!')}
            disabled={true}
            />

           <Switch
              value={isEnabled}
              onValueChange={setIsEnabled}
            />
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },

  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textContent: {
    fontStyle: 'italic',
  },

  inputText: {
     height: 40,
     borderWidth: 1,
  }
});
