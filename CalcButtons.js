import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export class CalcButtons extends Component {

  render() {
    return (
      <TouchableHighlight
        style={styles.calcButton}
        underlayColor="white"
        onPress={this.props.onPress}>
        <Text style={styles.calcButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    )
  }
}

// STYLE VARIABLES
const colorDarkGrey = '#494F56';
const colorOrange = '#B57A42';
const colorLightGrey = "#F0F0F0";

// STYLESHEET
const styles = StyleSheet.create({
  calcButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colorOrange,
  },
  calcButtonText: {
    fontSize: 22,
    color: 'black',
  }
});
