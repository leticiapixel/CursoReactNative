import React from "react";
import { StyleSheet, Text, View } from "react-native";

import SearchBar from "./src/components/SearchBar";

export default function App() {
  
  return (
    <View style={styles.container}>

      <SearchBar
        placeholder={'Search'}
        onSearch={ (value) => console.log('Search for:'+ value)}
        renderIcon={false} 
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
