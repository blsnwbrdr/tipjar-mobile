import { StyleSheet } from 'react-native';
import { colorDarkGrey, colorOrange, colorLightGrey } from './Constants';

const InfoStyles = StyleSheet.create({
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
  countryHeader: {
    fontFamily: 'patrick-hand',
    fontSize: 42,
    color: colorOrange,
    textAlign: 'center',
    paddingBottom: 20,
  },
  countryTitle: {
    fontFamily: 'hind',
    fontSize: 22,
    color: colorDarkGrey,
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: colorOrange,
  },
  countryText: {
    fontFamily: 'hind',
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
    fontFamily: 'hind',
    fontSize: 12,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingTop: 10,
  }
});

export default InfoStyles;
