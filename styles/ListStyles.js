import { StyleSheet } from 'react-native';
import { colorDarkGrey, colorOrange, colorLightGrey } from './Constants';

const ListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
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
  },
  countryListingContainer: {
    flex: 1,
    backgroundColor: 'white',
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
  versionText: {
    fontFamily: 'hind',
    fontSize: 12,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingBottom: 30,
  }
});

export default ListStyles;
