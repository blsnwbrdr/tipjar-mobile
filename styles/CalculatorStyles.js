import { StyleSheet } from 'react-native';
import { colorOrange, colorLightOrange, colorLightGrey } from './Constants';

const CalculatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorLightGrey,
  },
  displayContainer: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  displayText: {
    fontFamily: 'hind',
    color: 'white',
    fontSize: 64,
    textAlign: 'right',
    padding: 10,
  },
  calcPad: {
    flex: 8,
    backgroundColor: colorLightGrey,
  },
  calcRow: {
    flex: 3,
    flexDirection: 'row',
  },
  percentRow: {
    flex: 2,
    flexDirection: 'row',
  },
  calcPercentButton: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorLightOrange,
    borderWidth: 1,
    borderColor: colorOrange,
    borderRadius: 5,
  },
  calcNumberButton: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colorOrange,
    borderRadius: 5,
  },
  calcOtherButton: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorLightOrange,
    borderWidth: 1,
    borderColor: colorOrange,
    borderRadius: 5,
  },
  calcButtonText: {
    fontFamily: 'hind',
    fontSize: 22,
    color: 'black',
  }
});

export default CalculatorStyles;
