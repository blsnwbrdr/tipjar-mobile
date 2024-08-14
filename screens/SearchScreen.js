import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Keyboard,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// STYLES
import { colorMediumGrey } from './../styles/Constants';
import SearchStyles from './../styles/SearchStyles';

export default Search = ({ navigation }) => {
  const [displaySearchBar, _setDisplaySearchBar] = useState(false);
  const displaySearchBarRef = useRef(displaySearchBar);
  const setDisplaySearchBar = (newDisplaySearchBar) => {
    displaySearchBarRef.current = newDisplaySearchBar;
    _setDisplaySearchBar(newDisplaySearchBar);
  };
  const [countryTipData, _setCountryTipData] = useState([]);
  const countryTipDataRef = useRef(countryTipData);
  const setCountryTipData = (newCountryTipData) => {
    countryTipDataRef.current = newCountryTipData;
    _setCountryTipData(newCountryTipData);
  };
  const [countryTipDataMatch, setCountryTipDataMatch] = useState('');

  // GET STORED TIP DATA
  useEffect(() => {
    AsyncStorage.getItem('tip-data', (err, result) => {
      if (result) {
        setDisplaySearchBar(true);
        const countryTipData = JSON.parse(result);
        setCountryTipData(countryTipData);
      }
    });
  });

  // SEARCH FUNCTION
  const searchText = (text) => {
    const pattern = new RegExp(text, 'gi');
    let userMatches = [];
    for (let x = 0; x < countryTipDataRef.current.length; x++) {
      if (text === '') {
        setCountryTipDataMatch('');
      } else if (countryTipDataRef.current[x].country.search(pattern) >= 0) {
        userMatches.push(countryTipDataRef.current[x]);
        setCountryTipDataMatch(userMatches);
      }
    }
  };

  // CLOSE KEYBOARD
  const closeKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={SearchStyles.safeViewContainer}>
      <StatusBar barStyle='dark-content' />
      <View style={SearchStyles.bodyContainer}>
        {displaySearchBarRef.current && (
          <TextInput
            style={SearchStyles.input}
            autoCorrect={false}
            placeholder='Search'
            placeholderTextColor={colorMediumGrey}
            clearButtonMode='always'
            onChangeText={(text) => searchText(text)}
          />
        )}
        <TouchableWithoutFeedback onPress={() => closeKeyboard()}>
          <View
            style={SearchStyles.container}
            keyboardShouldPersistTaps='always'
          >
            <FlatList
              style={SearchStyles.listContainer}
              keyboardShouldPersistTaps='always'
              data={countryTipDataMatch}
              keyExtractor={(x, i) => i.toString()}
              renderItem={({ item }) => (
                <View style={SearchStyles.listButtonContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('SearchInfo', item.country)
                    }
                  >
                    <View style={SearchStyles.listButton}>
                      <Text style={SearchStyles.listButtonText}>
                        {item.country}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};
