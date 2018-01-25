import { StyleSheet } from 'react-native';
import { colorOrange, colorLightGrey, colorBlue, colorLightBlue } from './Constants';

const CalculatorStyles = StyleSheet.create({
  launchButton: {
    backgroundColor: colorOrange,
    paddingTop: 10,
    paddingBottom: 15,
  },
  launchButtonText: {
    fontFamily: 'hind',
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    paddingTop: 75,
    paddingBottom: 25,
  },
  closeButton: {
    alignItems: 'flex-end',
    paddingTop: 20,
  },
  displayContainer: {
    flex: 1,
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
  calcNumberButton: {
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

export default CalculatorStyles;
