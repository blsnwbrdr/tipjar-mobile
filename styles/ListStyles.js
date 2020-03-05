import { StyleSheet } from 'react-native';
import { colorDarkGrey } from './Constants';

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
    marginTop: 10,
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
  otherView: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  otherText: {
    fontFamily: 'hind',
    fontSize: 18,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  otherTextSmall: {
    fontFamily: 'hind',
    fontSize: 16,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  }
});

export default ListStyles;
