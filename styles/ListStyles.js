import { StyleSheet } from 'react-native';
import { colorDarkGrey, fontBody } from './Constants';

const ListStyles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  countryListingContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    marginTop: 5,
    paddingTop: 5,
  },
  listButtonContainer: {
    alignItems: 'center',
    paddingBottom: 8,
  },
  listButtonText: {
    fontFamily: fontBody,
    fontSize: 18,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  otherView: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  otherText: {
    fontFamily: fontBody,
    fontSize: 18,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  otherTextSmall: {
    fontFamily: fontBody,
    fontSize: 16,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },
});

export default ListStyles;
