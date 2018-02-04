import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

export class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Placeholder',
      height: 40,
    };
  }
  updateSize = (height) => {
    this.setState({
      height
    });
    console.log(height);
  }

  render() {
    const {height} = this.state;
    let newStyle = {height}

    return (
      <TextInput
        style = {[height]}
        style = {{borderColor: 'gray', borderWidth: 1, padding: 20}}
        multiline = {true}
        onContentSizeChange = {(e) => this.updateSize(e.nativeEvent.contentSize.height)}
        onChangeText = {(text) => this.setState({text})}
        value = {this.state.text}
       />
    )
  }
}
