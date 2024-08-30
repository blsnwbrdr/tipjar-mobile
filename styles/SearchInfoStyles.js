import { StyleSheet } from 'react-native';
import {
  colorPrimary,
  colorDarkGrey,
  fontBody,
  fontHeaderSmall,
} from './Constants';

const SearchInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  countryContainer: {
    marginTop: 20,
    marginBottom: 40,
    paddingLeft: 25,
    paddingRight: 25,
  },
  countryTitle: {
    fontFamily: fontHeaderSmall,
    fontSize: 22,
    color: colorDarkGrey,
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: colorPrimary,
  },
  countryText: {
    fontFamily: fontBody,
    fontSize: 18,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingBottom: 15,
  },
  countryIcon: {
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  disclaimerText: {
    fontFamily: fontBody,
    fontSize: 12,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingTop: 10,
  },
});

export default SearchInfoStyles;
