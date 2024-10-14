import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {Ionicons} from '@expo/vector-icons';

export default function SearchBar(props) {

  const [value, onChangeValue] = React.useState('')
  
  return (
    <View style={styles.container}>

        <View style ={styles.default}>

        {  (props.renderIcon != undefined ? props.renderIcon : true) &&
            <Ionicons
                style={styles.icon}
                name="ios-search"
                size={24} 
            />
        }
            <TextInput
                style={styles.textInput}
                value={value}
                placeholder={props.placeholder}
                onEndEditing={ () => props.onSearch (value)}
                onChangeText={text => onChangeValue(text)}
            />
        </View>
      
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
  },
  default: {
    flex: 1,
    flexDirection: 'row',
    height: 32,
    borderWidth: 0.5,
    marginHorizontal: 4,
  },
  icon: {
    margin: 4,
  }
});
