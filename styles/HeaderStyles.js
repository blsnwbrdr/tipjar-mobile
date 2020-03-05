import { StyleSheet } from 'react-native';
import { colorOrange, colorDarkGrey } from './Constants';

const HeaderStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  titleText: {
    fontFamily: 'patrick-hand',
    fontSize: 60,
    color: colorOrange,
    marginBottom: 0,
  },
  subTitleText: {
    fontFamily: 'nothing-you-could-do',
    fontSize: 16,
    color: colorDarkGrey,
  }
})

export default HeaderStyles;
