import { StyleSheet } from 'react-native';
import { colorOrange, colorLightGrey, colorDarkGrey } from './Constants';

const SearchStyles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  bodyContainer: {
    flex: 9,
    backgroundColor: 'white',
  },
  closeButton: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 40,
  },
  closeButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: colorDarkGrey,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 10,
    marginTop: 40,
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 25,
  },
  container: {
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
})

export default SearchStyles
