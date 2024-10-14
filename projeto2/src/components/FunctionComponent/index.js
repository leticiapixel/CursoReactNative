import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function FunctionComponent(props) {

  const [fly, setFly ] = useState('Brazil - Florida - Hooks')

  setTimeout(() => {
        setFly("Florida - Tokio - Hooks")
    }, 4000);

  return (
    <View>
      <Text>FunctionComponent {props.name}</Text>
      <Text>Fly: {fly} </Text>
    </View>
  );
}
