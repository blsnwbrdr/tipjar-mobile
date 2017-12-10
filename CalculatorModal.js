import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

export class CalculatorModal extends Component {
  state = {
    isModalVisible: false,
  };

  onPressModal() {
    this.setState({isModalVisible: true})
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.calculatorButton} onPress={ () => this.onPressModal() }>
          <Text style={styles.calculatorButtonText}>Calculator</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Modal</Text>
          </View>
        </Modal>
      </View>
    )
  }
}

// STYLE VARIABLES
const colorDarkGrey = '#494F56';
const colorOrange = '#B57A42';
const colorLightGrey = "#F0F0F0";

// STYLESHEET
const styles = StyleSheet.create({
  calculatorButton: {
    backgroundColor: colorOrange,
  },
  calculatorButtonText: {
    fontFamily: 'hind',
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },
});
