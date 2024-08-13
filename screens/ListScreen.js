import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

// COMPONENTS
import Header from './../components/Header';
import Footer from './../components/Footer';

// STYLES
import ListStyles from './../styles/ListStyles';

export default ListScreen = ({ navigation }) => {
  const [displayList, _setDisplayList] = useState(false);
  const displayListRef = useRef(displayList);
  const setDisplayList = (newDisplayList) => {
    displayListRef.current = newDisplayList;
    _setDisplayList(newDisplayList);
  };
  const [displayLoading, _setDisplayLoading] = useState(true);
  const displayLoadingRef = useRef(displayLoading);
  const setDisplayLoading = (newDisplayLoading) => {
    displayLoadingRef.current = newDisplayLoading;
    _setDisplayLoading(newDisplayLoading);
  };
  const [displayError, _setDisplayError] = useState(false);
  const displayErrorRef = useRef(displayError);
  const setDisplayError = (newDisplayError) => {
    displayErrorRef.current = newDisplayError;
    _setDisplayError(newDisplayError);
  };
  const [countryTipData, _setCountryTipData] = useState([]);
  const countryTipDataRef = useRef(countryTipData);
  const setCountryTipData = (newCountryTipData) => {
    countryTipDataRef.current = newCountryTipData;
    _setCountryTipData(newCountryTipData);
  };

  // DOWNLOAD AND STORE DATA BASED ON INTERNET CONNECTION STATUS
  useEffect(() => {
    // AsyncStorage.clear();
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        fetch('https://brandonscode.herokuapp.com/tipjar/tip-data')
          .then((res) => res.json())
          .then((result) => {
            AsyncStorage.setItem('tip-data', JSON.stringify(result)).then(
              () => {
                getCountryTipData();
              }
            );
          });
        fetch('https://brandonscode.herokuapp.com/tipjar/currency-data')
          .then((res) => res.json())
          .then((result) => {
            AsyncStorage.setItem('currency-data', JSON.stringify(result)).then(
              () => {
                setDisplayLoading(false);
                setDisplayList(true);
              }
            );
          });
      } else {
        getCountryTipData();
        setDisplayLoading(false);
        setDisplayList(true);
      }
    });
  }, []);

  // GET STORED TIP AND CURRENCY DATA
  const getCountryTipData = () => {
    AsyncStorage.getItem('tip-data', (err, tipResult) => {
      AsyncStorage.getItem('currency-data', (err, currencyResult) => {
        if (tipResult && currencyResult) {
          const countryTipData = JSON.parse(tipResult);
          setCountryTipData(countryTipData);
        } else {
          setDisplayError(true);
        }
      });
    });
  };

  return (
    <SafeAreaView style={ListStyles.safeViewContainer}>
      <StatusBar barStyle='dark-content' />
      <View style={ListStyles.container}>
        <Header />
        {displayListRef.current && (
          <FlatList
            style={ListStyles.listContainer}
            data={countryTipDataRef.current}
            keyExtractor={(x, i) => i.toString()}
            renderItem={({ item }) => (
              <View style={ListStyles.listButtonContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Info', item.country)}
                >
                  <View style={ListStyles.listButton}>
                    <Text style={ListStyles.listButtonText}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            ListFooterComponent={<Footer />}
          />
        )}
        {displayLoadingRef.current && (
          <View style={ListStyles.otherView}>
            <Text style={ListStyles.otherText}>Updating data</Text>
          </View>
        )}
        {displayErrorRef.current && (
          <View style={ListStyles.otherView}>
            <Text style={ListStyles.otherText}>Sorry...</Text>
            <Text style={ListStyles.otherTextSmall}>
              For your first use, an internet connection is needed to download
              our tip data. Once downloaded, the app can be used offline.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
