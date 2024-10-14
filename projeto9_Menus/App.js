import React from "react";
import { StyleSheet, Button, View } from "react-native";

import ActionSheet from "react-native-actionsheet";
import Menu, {MenuItem, MenuDivider} from "react-native-material-menu";

export default function App() {

  let _actionSheet = null;
  let _menu = null;

  const onMenuSelected = (index) => {
    console.log(index);
  }
  
  return (
    <View style={styles.container}>
      <Button
        title="show action sheet"
        onPress={ () => _actionSheet.show() }
        />
      
      <ActionSheet
        ref={ ref => _actionSheet = ref }
        options={ ['Cancel', 'Menu item 1', 'Menu item 2']}
        cancelButtonIndex={0}
        destructiveButtonIndex={ 2 }
        onPress={(index) => {onMenuSelected(index)}}
      />

      <Menu
        ref={ ref => _menu = ref }
        button={
          <Button
            title='show menu'
            onPress={ () => _menu.show() }
           />
        }
      >
          <MenuItem onPress={ () => onMenuSelected(1) } > Menu item 1</MenuItem>
          <MenuItem onPress={ () => onMenuSelected(2) } > Menu item 2</MenuItem>
          <MenuItem onPress={ () => onMenuSelected(0) }  > cancelar</MenuItem>
      </Menu>
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
