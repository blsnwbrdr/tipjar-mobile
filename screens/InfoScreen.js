import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, StatusBar, ScrollView, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';

// STYLES
import InfoStyles from './../styles/InfoStyles';

export default InfoScreen = ({ route }) => {
  const [countryTipData, _setCountryTipData] = useState([]);
  const countryTipDataRef = useRef(countryTipData);
  const setCountryTipData = (newCountryTipData) => {
    countryTipDataRef.current = newCountryTipData;
    _setCountryTipData(newCountryTipData);
  };
  const [currencyData, _setCurrencyData] = useState([]);
  const currencyDataRef = useRef(currencyData);
  const setCurrencyData = (newCurrencyData) => {
    currencyDataRef.current = newCurrencyData;
    _setCurrencyData(newCurrencyData);
  };

  // GET COUNTRY TIP AND CURRENCY DATA
  useEffect(() => {
    AsyncStorage.getItem('tip-data', (err, tipResult) => {
      const countryTipData = JSON.parse(tipResult);
      AsyncStorage.getItem('currency-data', (err, currencyResult) => {
        const currencyData = JSON.parse(currencyResult);

        const country = route.params;
        for (var x = 0; x < countryTipData.length; x++) {
          if (country === countryTipData[x].country) {
            for (var i = 0; i < currencyData.length; i++) {
              if (countryTipData[x].currency === currencyData[i].currency) {
                const countryCurrencyData =
                  Math.round(currencyData[i].conversion * 100) / 100;
                setCountryTipData(countryTipData[x]);
                setCurrencyData(countryCurrencyData);
              }
            }
          }
        }
      });
    });
  }, []);

  return (
    <SafeAreaView style={InfoStyles.container}>
      <StatusBar barStyle='dark-content' />
      <ScrollView style={InfoStyles.scrollContainer}>
        <View style={InfoStyles.countryContainer}>
          <Text style={InfoStyles.countryIcon}>
            <FontAwesome name='cutlery' size={32} color='#494F56' />
          </Text>
          <Text style={InfoStyles.countryTitle}>Dining*:</Text>
          <Text style={InfoStyles.countryText}>
            {countryTipDataRef.current.dining}
          </Text>
          <Text style={InfoStyles.countryIcon}>
            <FontAwesome name='taxi' size={32} color='#494F56' />
          </Text>
          <Text style={InfoStyles.countryTitle}>Transportation:</Text>
          <Text style={InfoStyles.countryText}>
            {countryTipDataRef.current.transportation}
          </Text>
          <Text style={InfoStyles.countryIcon}>
            <FontAwesome name='building' size={32} color='#494F56' />
          </Text>
          <Text style={InfoStyles.countryTitle}>Accommodation:</Text>
          <Text style={InfoStyles.countryText}>
            {countryTipDataRef.current.accommodation}
          </Text>
          <Text style={InfoStyles.countryIcon}>
            <FontAwesome name='money' size={32} color='#494F56' />
          </Text>
          <Text style={InfoStyles.countryTitle}>Currency**:</Text>
          <Text style={InfoStyles.countryText}>
            1 USD = {currencyDataRef.current}{' '}
            {countryTipDataRef.current.currency}
          </Text>
          <Text style={InfoStyles.countryIcon}>
            <FontAwesome name='language' size={32} color='#494F56' />
          </Text>
          <Text style={InfoStyles.countryTitle}>Thank you:</Text>
          <Text style={InfoStyles.countryText}>
            {countryTipDataRef.current.thankyou}
          </Text>
          <Text style={InfoStyles.countryTitle}>Goodbye:</Text>
          <Text style={InfoStyles.countryText}>
            {countryTipDataRef.current.goodbye}
          </Text>
          <Text style={InfoStyles.disclaimerText}>
            *If paying with a credit card, it is highly recommended to have cash
            available for leaving tips. Many countries do not have a spot for
            gratuity on their credit card slips.
          </Text>
          <Text style={InfoStyles.disclaimerText}>
            **Currency data is not live. Exchange rates are updated
            periodically.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
