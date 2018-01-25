import { StyleSheet } from 'react-native';
import { colorDarkGrey, colorOrange, colorLightGrey } from './Constants';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: 'white',
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
  },
  countryListingContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
  },
  listContainer: {
    marginTop: 10,
    marginBottom: 40,
  },
  listButtonContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  listButtonText: {
    fontFamily: 'hind',
    fontSize: 18,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  locationButtonContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  locationButton: {
    width: 200,
    borderRadius: 50,
    borderColor: colorDarkGrey,
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
  },
  locationButtonText: {
    fontFamily: 'hind',
    fontSize: 22,
    textAlign: 'center',
    color: colorDarkGrey,
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
  },
  versionText: {
    fontFamily: 'hind',
    fontSize: 12,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingBottom: 20,
  }
});

export default Styles;
