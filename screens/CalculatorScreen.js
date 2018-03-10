import React, { Component } from 'react';
import { StatusBar, SafeAreaView, Text, View, TouchableHighlight } from 'react-native';
import CalculatorStyles from './../styles/CalculatorStyles';

export default class CalculatorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
      previousInputValue: 0,
      percentPressed: false,
      digits: 0,
    }
  }

  // CLOSE CALCULATOR
  onPressCloseCalculator() {
    this.props.navigation.navigate('List');
  }

  // NUMBER BUTTON PRESS
  onPressCalcButton(input) {
    if (this.state.digits < 5) {
      let newDigits = this.state.digits + 1;
      this.setState({
        digits: newDigits,
      })
      if (this.state.inputValue === 0) {
        this.setState({
          inputValue: input,
          digits: 0,
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
    }
  }

  // PERCENT BUTTON PRESS
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

  // CLEAR BUTTON PRESS
  onPressClearButton() {
    this.setState({
      inputValue: 0,
      percentPressed: false,
      digits: 0,
    })
  }

  render() {
    return (
      <SafeAreaView style={CalculatorStyles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={CalculatorStyles.displayContainer}>
          <Text style={CalculatorStyles.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={CalculatorStyles.calcPad}>
          <View style={CalculatorStyles.percentRow}>
            <TouchableHighlight
              style={CalculatorStyles.calcPercentButton}
              underlayColor="white"
              onPress={ () => this.onPressPercentButton(.05) }>
              <Text style={CalculatorStyles.calcButtonText}>5%</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={CalculatorStyles.calcPercentButton}
              underlayColor="white"
              onPress={ () => this.onPressPercentButton(.1) }>
              <Text style={CalculatorStyles.calcButtonText}>10%</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={CalculatorStyles.calcPercentButton}
              underlayColor="white"
              onPress={ () => this.onPressPercentButton(.15) }>
              <Text style={CalculatorStyles.calcButtonText}>15%</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={CalculatorStyles.calcPercentButton}
              underlayColor="white"
              onPress={ () => this.onPressPercentButton(.2) }>
              <Text style={CalculatorStyles.calcButtonText}>20%</Text>
            </TouchableHighlight>
          </View>
          <View style={CalculatorStyles.calcRow}>
            <TouchableHighlight
              style={CalculatorStyles.calcNumberButton}
              underlayColor="white"
              onPress={ () => this.onPressCalcButton(1) }>
              <Text style={CalculatorStyles.calcButtonText}>1</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={CalculatorStyles.calcNumberButton}
              underlayColor="white"
              onPress={ () => this.onPressCalcButton(2) }>
              <Text style={CalculatorStyles.calcButtonText}>2</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={CalculatorStyles.calcNumberButton}
              underlayColor="white"
              onPress={ () => this.onPressCalcButton(3) }>
              <Text style={CalculatorStyles.calcButtonText}>3</Text>
            </TouchableHighlight>
          </View>
          <View style={CalculatorStyles.calcRow}>
            <TouchableHighlight
              style={CalculatorStyles.calcNumberButton}
              underlayColor="white"
              onPress={ () => this.onPressCalcButton(4) }>
              <Text style={CalculatorStyles.calcButtonText}>4</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={CalculatorStyles.calcNumberButton}
              underlayColor="white"
              onPress={ () => this.onPressCalcButton(5) }>
              <Text style={CalculatorStyles.calcButtonText}>5</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={CalculatorStyles.calcNumberButton}
              underlayColor="white"
              onPress={ () => this.onPressCalcButton(6) }>
              <Text style={CalculatorStyles.calcButtonText}>6</Text>
            </TouchableHighlight>
          </View>
          <View style={CalculatorStyles.calcRow}>
            <TouchableHighlight
              style={CalculatorStyles.calcNumberButton}
              underlayColor="white"
              onPress={ () => this.onPressCalcButton(7) }>
              <Text style={CalculatorStyles.calcButtonText}>7</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={CalculatorStyles.calcNumberButton}
              underlayColor="white"
              onPress={ () => this.onPressCalcButton(8) }>
              <Text style={CalculatorStyles.calcButtonText}>8</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={CalculatorStyles.calcNumberButton}
              underlayColor="white"
              onPress={ () => this.onPressCalcButton(9) }>
              <Text style={CalculatorStyles.calcButtonText}>9</Text>
            </TouchableHighlight>
          </View>
          <View style={CalculatorStyles.calcRow}>
            <TouchableHighlight
              style={CalculatorStyles.calcOtherButton}
              underlayColor="white"
              onPress={ () => this.onPressCloseCalculator() }>
              <Text style={CalculatorStyles.calcButtonText}>close</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={CalculatorStyles.calcNumberButton}
              underlayColor="white"
              onPress={ () => this.onPressCalcButton(0) }>
              <Text style={CalculatorStyles.calcButtonText}>0</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={CalculatorStyles.calcOtherButton}
              underlayColor="white"
              onPress={ () => this.onPressClearButton() }>
              <Text style={CalculatorStyles.calcButtonText}>C</Text>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
