import React from "react";
import { AppState, Text, View } from "react-native";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  //   this.state = {
  //     fly: "Brazil - Florida"
  //   }

  //   setTimeout(() => {
  //     this.setState({
  //       fly: "Florida - Tokio"
  //     })
  //   }, 4000)
  // }

  componentDidMount()
  {
    console.log ('fetch API!');

    AppState.addEventListener('change', this.handleChange);
  }

  componentWillUnmount()
  {
    console.log ('unmount');

    AppState.removeEventListener('change', this.handleChange);
  }

  handleChange = () => {
    console.log(AppState.currentState);
  }

  render() {
    return <>
        <Text>ClassComponent: LifeCycle </Text>
      </>
  }
}
