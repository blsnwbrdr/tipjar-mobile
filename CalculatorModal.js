import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';

export class CalculatorModal extends Component {
  state = {
    isModalVisible: false,
  };

  onPressOpenModal() {
    this.setState({isModalVisible: true})
  }
  onPressCloseModal() {
    this.setState({isModalVisible: false})
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.calculatorButton} onPress={ () => this.onPressOpenModal() }>
          <Text style={styles.calculatorButtonText}>Calculator</Text>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isModalVisible}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={ () => this.onPressCloseModal() }>
              <FontAwesome name='times' size={32} color="#fff" />
            </TouchableOpacity>
            <View>
              
            </View>
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
  modalContainer: {
    flex: 1,
  },
  calculatorButton: {
    backgroundColor: colorOrange,
    paddingTop: 10,
    paddingBottom: 10,
  },
  calculatorButtonText: {
    fontFamily: 'hind',
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },
  closeButton: {
    alignItems: 'flex-end',
  }
});
