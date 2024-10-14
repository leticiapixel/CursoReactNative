import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HookSample() {
    const [t1, setT1] = React.useState(0);
    const [t2, setT2] = React.useState(0);

    React.useEffect( () => {
        console.log("Primeiro render! equivalente ao componenteDidMount");

        
        
    }, []);

    React.useEffect( () => {
        console.log("efeito t1");
        
    }, [t1, t2]);

    return (
        <View style={styles.hooksample}>
            <Text>t1: {t1}</Text>
            <Text>t2: {t2}</Text>

            <Button title="effect1" onPress={() => setT1(t1 + 1)} />
            <Button title="effect2" onPress={() => setT2(t2 + 1)} />    
        </View>
    )
}

const styles = StyleSheet.create({
    hooksample: {
      backgroundColor: "#faa",
      alignItems: "center",
      justifyContent: "center",
    },
  });