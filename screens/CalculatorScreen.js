import React, { useState } from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import CalculatorStyles from './../styles/CalculatorStyles';

export default CalculatorScreen = ({ navigation }) => {
  const [inputValue, setInputValue] = useState(0);
  const [previousInputValue, setPreviousInputValue] = useState(0);
  const [percentPressed, setPercentPressed] = useState(false);
  const [digits, setDigits] = useState(0);

  // CLOSE CALCULATOR
  const onPressCloseCalculator = () => {
    navigation.navigate('List');
  };

  // NUMBER BUTTON PRESS
  const onPressCalcButton = (input) => {
    if (digits < 5) {
      let newDigits = digits + 1;
      setDigits(newDigits);
      if (inputValue === 0) {
        setInputValue(input);
        setDigits(0);
      } else if (percentPressed === true) {
        setInputValue(input);
        setPercentPressed(false);
      } else {
        let newInputValue = inputValue + '' + input;
        setInputValue(newInputValue);
      }
    }
  };

  // PERCENT BUTTON PRESS
  const onPressPercentButton = (percent) => {
    setDigits(0);
    if (percentPressed === false) {
      setPreviousInputValue(inputValue);
      setPercentPressed(true);
      let percentValue = Math.round(inputValue * percent * 100) / 100;
      setInputValue(percentValue);
    } else {
      let percentValue = Math.round(previousInputValue * percent * 100) / 100;
      setInputValue(percentValue);
    }
  };

  // CLEAR BUTTON PRESS
  const onPressClearButton = () => {
    setInputValue(0);
    setPercentPressed(false);
    setDigits(0);
  };

  return (
    <SafeAreaView style={CalculatorStyles.container}>
      <StatusBar barStyle='dark-content' />
      <View style={CalculatorStyles.displayContainer}>
        <Text style={CalculatorStyles.displayText}>{inputValue}</Text>
      </View>
      <View style={CalculatorStyles.calcPad}>
        <View style={CalculatorStyles.percentRow}>
          <TouchableHighlight
            style={CalculatorStyles.calcPercentButton}
            underlayColor='white'
            onPress={() => onPressPercentButton(0.05)}
          >
            <Text style={CalculatorStyles.calcButtonText}>5%</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={CalculatorStyles.calcPercentButton}
            underlayColor='white'
            onPress={() => onPressPercentButton(0.1)}
          >
            <Text style={CalculatorStyles.calcButtonText}>10%</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={CalculatorStyles.calcPercentButton}
            underlayColor='white'
            onPress={() => onPressPercentButton(0.15)}
          >
            <Text style={CalculatorStyles.calcButtonText}>15%</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={CalculatorStyles.calcPercentButton}
            underlayColor='white'
            onPress={() => onPressPercentButton(0.2)}
          >
            <Text style={CalculatorStyles.calcButtonText}>20%</Text>
          </TouchableHighlight>
        </View>
        <View style={CalculatorStyles.calcRow}>
          <TouchableHighlight
            style={CalculatorStyles.calcNumberButton}
            underlayColor='white'
            onPress={() => onPressCalcButton(1)}
          >
            <Text style={CalculatorStyles.calcButtonText}>1</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={CalculatorStyles.calcNumberButton}
            underlayColor='white'
            onPress={() => onPressCalcButton(2)}
          >
            <Text style={CalculatorStyles.calcButtonText}>2</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={CalculatorStyles.calcNumberButton}
            underlayColor='white'
            onPress={() => onPressCalcButton(3)}
          >
            <Text style={CalculatorStyles.calcButtonText}>3</Text>
          </TouchableHighlight>
        </View>
        <View style={CalculatorStyles.calcRow}>
          <TouchableHighlight
            style={CalculatorStyles.calcNumberButton}
            underlayColor='white'
            onPress={() => onPressCalcButton(4)}
          >
            <Text style={CalculatorStyles.calcButtonText}>4</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={CalculatorStyles.calcNumberButton}
            underlayColor='white'
            onPress={() => onPressCalcButton(5)}
          >
            <Text style={CalculatorStyles.calcButtonText}>5</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={CalculatorStyles.calcNumberButton}
            underlayColor='white'
            onPress={() => onPressCalcButton(6)}
          >
            <Text style={CalculatorStyles.calcButtonText}>6</Text>
          </TouchableHighlight>
        </View>
        <View style={CalculatorStyles.calcRow}>
          <TouchableHighlight
            style={CalculatorStyles.calcNumberButton}
            underlayColor='white'
            onPress={() => onPressCalcButton(7)}
          >
            <Text style={CalculatorStyles.calcButtonText}>7</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={CalculatorStyles.calcNumberButton}
            underlayColor='white'
            onPress={() => onPressCalcButton(8)}
          >
            <Text style={CalculatorStyles.calcButtonText}>8</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={CalculatorStyles.calcNumberButton}
            underlayColor='white'
            onPress={() => onPressCalcButton(9)}
          >
            <Text style={CalculatorStyles.calcButtonText}>9</Text>
          </TouchableHighlight>
        </View>
        <View style={CalculatorStyles.calcRow}>
          <TouchableHighlight
            style={CalculatorStyles.calcOtherButton}
            underlayColor='white'
            onPress={() => onPressCloseCalculator()}
          >
            <Text style={CalculatorStyles.calcButtonText}>close</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={CalculatorStyles.calcNumberButton}
            underlayColor='white'
            onPress={() => onPressCalcButton(0)}
          >
            <Text style={CalculatorStyles.calcButtonText}>0</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={CalculatorStyles.calcOtherButton}
            underlayColor='white'
            onPress={() => onPressClearButton()}
          >
            <Text style={CalculatorStyles.calcButtonText}>C</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};
