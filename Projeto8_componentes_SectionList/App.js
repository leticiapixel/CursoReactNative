import React from "react";
import { SafeAreaView, SectionList, StyleSheet, Text, View } from "react-native";

import cars from './src/services/cars2'

const Item = ({item}) => (
  <View style={styles.item}>
    <Text>{item.id}</Text>
    <Text>{item.brand}</Text>
    <Text>{item.model}</Text>
  </View>
)

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={cars}
        keyExtractor={ (item) => item.id.toString()}
        renderItem={ ({item}) => <Item item={item} />}
        renderSectionHeader={ ({section: {type}}) => (
          <Text style={styles.header}>{type}</Text>  
   ) }
      />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    borderWidth:1,
    borderRadius: 4,
    backgroundColor: 'lightgrey',
    margin: 4
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
