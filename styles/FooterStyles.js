import { StyleSheet } from 'react-native';
import { colorDarkGrey } from './Constants';

const FooterStyles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingBottom: 25,
  },
  text: {
    fontFamily: 'hind',
    fontSize: 12,
    color: colorDarkGrey,
    textAlign: 'center',
  }
})

export default FooterStyles;
