import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";

import cars from './src/services/cars1'

const Item = ({item}) => (
  <View style={styles.item}>
    <Text>{item.id}</Text>
    <Text>{item.brand}</Text>
    <Text>{item.model}</Text>
    <Text>{item.type}</Text>
  </View>
)

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <Item item = {item} /> }
        keyExtractor={ item => item.id.toString() }
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
  }
});
