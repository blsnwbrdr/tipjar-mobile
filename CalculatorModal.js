import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';

export class CalculatorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      inputValue: 0,
      previousInputValue: 0,
      percentPressed: false,
      digits: 0,
    }
  }

  onPressOpenModal() {
    this.setState({
      isModalVisible: true
    })
  }
  onPressCloseModal() {
    this.setState({
      isModalVisible: false
    })
  }
  onPressCalcButton(input) {
    if (this.state.digits < 8) {
      let newDigits = this.state.digits + 1;
      this.setState({
        digits: newDigits,
      })
      if (this.state.inputValue === 0) {
        this.setState({
          inputValue: input
        })
      } else if (this.state.percentPressed === true) {
        this.setState({
          inputValue: input,
          percentPressed: false,
          })
      } else {
        let inputValue = this.state.inputValue + '' + input;
        this.setState({
          inputValue: inputValue
        })
      }
      console.log(newDigits);
    }
  }
  onPressPercentButton(percent) {
    this.setState({
      digits: 0,
    })
    if (this.state.percentPressed === false) {
      this.setState({
        previousInputValue: this.state.inputValue,
        percentPressed: true,
      })
      let percentValue = Math.round(this.state.inputValue * percent * 100) / 100;
      this.setState({
        inputValue: percentValue
      })
    } else {
      let percentValue = Math.round(this.state.previousInputValue * percent * 100) / 100;
      this.setState({
        inputValue: percentValue
      })
    }
  }
  onPressClear() {
    this.setState({
      inputValue: 0,
      percentPressed: false,
      digits: 0,
    })
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.calculatorLaunchButton} onPress={ () => this.onPressOpenModal() }>
          <Text style={styles.calculatorLaunchButtonText}>Calculator</Text>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isModalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.calcDisplay}>
              <Text style={styles.calcDisplayText}>{this.state.inputValue}</Text>
            </View>
            <View style={styles.calcPad}>
              <View style={styles.calcRow}>
                <TouchableHighlight
                  style={styles.calcButton}
                  underlayColor="white"
                  onPress={ () => this.onPressPercentButton(.05) }>
                  <Text style={styles.calcButtonText}>5%</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.calcButton}
                  underlayColor="white"
                  onPress={ () => this.onPressPercentButton(.1) }>
                  <Text style={styles.calcButtonText}>10%</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.calcButton}
                  underlayColor="white"
                  onPress={ () => this.onPressPercentButton(.15) }>
                  <Text style={styles.calcButtonText}>15%</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.calcButton}
                  underlayColor="white"
                  onPress={ () => this.onPressPercentButton(.2) }>
                  <Text style={styles.calcButtonText}>20%</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.calcRow}>
                <TouchableHighlight
                  style={styles.numberButton}
                  underlayColor="white"
                  onPress={ () => this.onPressCalcButton(1) }>
                  <Text style={styles.calcButtonText}>1</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.numberButton}
                  underlayColor="white"
                  onPress={ () => this.onPressCalcButton(2) }>
                  <Text style={styles.calcButtonText}>2</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.numberButton}
                  underlayColor="white"
                  onPress={ () => this.onPressCalcButton(3) }>
                  <Text style={styles.calcButtonText}>3</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.calcRow}>
                <TouchableHighlight
                  style={styles.numberButton}
                  underlayColor="white"
                  onPress={ () => this.onPressCalcButton(4) }>
                  <Text style={styles.calcButtonText}>4</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.numberButton}
                  underlayColor="white"
                  onPress={ () => this.onPressCalcButton(5) }>
                  <Text style={styles.calcButtonText}>5</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.numberButton}
                  underlayColor="white"
                  onPress={ () => this.onPressCalcButton(6) }>
                  <Text style={styles.calcButtonText}>6</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.calcRow}>
                <TouchableHighlight
                  style={styles.numberButton}
                  underlayColor="white"
                  onPress={ () => this.onPressCalcButton(7) }>
                  <Text style={styles.calcButtonText}>7</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.numberButton}
                  underlayColor="white"
                  onPress={ () => this.onPressCalcButton(8) }>
                  <Text style={styles.calcButtonText}>8</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.numberButton}
                  underlayColor="white"
                  value='9'
                  onPress={ () => this.onPressCalcButton(9) }>
                  <Text style={styles.calcButtonText}>9</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.calcRow}>
                <TouchableHighlight
                  style={styles.calcButton}
                  underlayColor="white"
                  onPress={ () => this.onPressCloseModal() }>
                  <Text style={styles.calcButtonText}>close</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.numberButton}
                  underlayColor="white"
                  onPress={ () => this.onPressCalcButton(0) }>
                  <Text style={styles.calcButtonText}>0</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.calcButton}
                  underlayColor="white"
                  onPress={ () => this.onPressClear() }>
                  <Text style={styles.calcButtonText}>C</Text>
                </TouchableHighlight>
              </View>
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
const colorBlue = '#427DB5';
const colorLightBlue = '#D0DFEC';

// STYLESHEET
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    paddingTop: 75,
    paddingBottom: 25,
  },
  calculatorLaunchButton: {
    backgroundColor: colorOrange,
    paddingTop: 10,
    paddingBottom: 10,
  },
  calculatorLaunchButtonText: {
    fontFamily: 'hind',
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },
  closeButton: {
    alignItems: 'flex-end',
    paddingTop: 20,
  },
  calcDisplay: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  calcDisplayText: {
    fontFamily: 'hind',
    color: 'white',
    fontSize: 64,
    textAlign: 'right',
    padding: 10,
  },
  calcPad: {
    flex: 9,
    backgroundColor: colorLightGrey,
  },
  calcRow: {
    flex: 1,
    flexDirection: 'row',
  },
  calcButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorLightBlue,
    borderWidth: 1,
    borderColor: colorBlue,
  },
  numberButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colorBlue,
  },
  calcButtonText: {
    fontFamily: 'hind',
    fontSize: 22,
    color: 'black',
  }
});
