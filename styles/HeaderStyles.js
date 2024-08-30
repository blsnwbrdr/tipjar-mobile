import { StyleSheet } from 'react-native';
import { colorPrimary, colorSecondary, fontHeaderBig } from './Constants';

const HeaderStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  titleText: {
    fontFamily: fontHeaderBig,
    fontSize: 60,
    color: colorPrimary,
    marginBottom: 0,
  },
  subTitleText: {
    fontFamily: fontHeaderBig,
    fontSize: 16,
    color: colorSecondary,
  },
});

export default HeaderStyles;
