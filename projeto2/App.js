import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FunctionComponent from "./src/components/FunctionComponent";
import ClassComponent from "./src/components/ClassComponent";

export default class App extends React.Component {
  // return (
  //   <View style={styles.container}>
  //     <Text>Hello</Text>
 
  //     <FunctionComponent name="fulano" />

  //     <ClassComponent name="ciclano" />
  //   </View>
  // );

  constructor(props){
    super(props);

    this.state = {
      renderMyComponent: true
    }

  }

  render(){
    if(this.state.renderMyComponent)
      return (
        <View style={styles.container}>
          <ClassComponent />
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <Text>(No Component)</Text>
        </View>
      );
  }
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
