import { StyleSheet } from 'react-native';
import { colorSecondary, colorMediumGrey, fontBody } from './Constants';

const CalculatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  displayContainer: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  displayText: {
    fontFamily: fontBody,
    color: 'white',
    fontSize: 64,
    textAlign: 'right',
    padding: 10,
  },
  calcPad: {
    flex: 8,
    backgroundColor: 'white',
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
    color: 'white',
    backgroundColor: colorMediumGrey,
    borderWidth: 1,
    borderColor: colorSecondary,
    borderRadius: 5,
  },
  calcNumberButton: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colorSecondary,
    borderRadius: 5,
  },
  calcOtherButton: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorMediumGrey,
    borderWidth: 1,
    borderColor: colorSecondary,
    borderRadius: 5,
  },
  calcButtonText: {
    fontFamily: fontBody,
    fontSize: 22,
    color: 'black',
  },
});

export default CalculatorStyles;
