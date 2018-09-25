import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, ScrollView, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// STYLES
import InfoStyles from './../styles/InfoStyles';

// JSON DATA
const countryTipData = require('./../data/countryTipData.json');
const currencyDataArchive = require('./../data/currencyData.json');

export default class InfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryTipData: countryTipData,
      currencyData: []
    }
  }

  // HEADER TITLE
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    const country = params;
      return {
        title: country,
      }
  };

  // GET COUNTRY TIP AND CURRENCY DATA
  componentDidMount = async () => {
    let response = await AsyncStorage.getItem('currency-data');
    response = JSON.parse(response);
    if (response === null) {
      this.setState({
        currencyData: currencyDataArchive,
      })
    } else {
      this.setState({
        currencyData: response,
      })
    }
    const { params } = this.props.navigation.state;
    const country = params;
    for ( var x = 0; x < countryTipData.length; x++) {
      if (country === countryTipData[x].country) {
        for ( var i = 0; i < this.state.currencyData.length; i++) {
          if (countryTipData[x].currency === this.state.currencyData[i].currency) {
            this.setState({
             countryTipData: countryTipData[x],
             countryCurrencyData: Math.round(this.state.currencyData[i].conversion * 100) / 100,
            })
          }
        }
      }
    }
  }

  render() {

    return (
      <SafeAreaView style={InfoStyles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={InfoStyles.scrollContainer}>
          <View style={InfoStyles.countryContainer}>
            <Text style={InfoStyles.countryIcon}>
              <FontAwesome name="cutlery" size={32} color="#494F56" />
            </Text>
            <Text style={InfoStyles.countryTitle}>Dining*:</Text>
            <Text style={InfoStyles.countryText}>{this.state.countryTipData.dining}</Text>
            <Text style={InfoStyles.countryIcon}>
              <FontAwesome name="taxi" size={32} color="#494F56" />
            </Text>
            <Text style={InfoStyles.countryTitle}>Transportation:</Text>
            <Text style={InfoStyles.countryText}>{this.state.countryTipData.transportation}</Text>
            <Text style={InfoStyles.countryIcon}>
              <FontAwesome name="building" size={32} color="#494F56" />
            </Text>
            <Text style={InfoStyles.countryTitle}>Accommodation:</Text>
            <Text style={InfoStyles.countryText}>{this.state.countryTipData.accommodation}</Text>
            <Text style={InfoStyles.countryIcon}>
              <FontAwesome name="money" size={32} color="#494F56" />
            </Text>
            <Text style={InfoStyles.countryTitle}>Currency**:</Text>
            <Text style={InfoStyles.countryText}>1 USD = {this.state.countryCurrencyData} {this.state.countryTipData.currency}</Text>
            <Text style={InfoStyles.countryIcon}>
              <FontAwesome name="language" size={32} color="#494F56" />
            </Text>
            <Text style={InfoStyles.countryTitle}>Thank you:</Text>
            <Text style={InfoStyles.countryText}>{this.state.countryTipData.thankyou}</Text>
            <Text style={InfoStyles.countryTitle}>Goodbye:</Text>
            <Text style={InfoStyles.countryText}>{this.state.countryTipData.goodbye}</Text>
            <Text style={InfoStyles.disclaimerText}>*If paying with a credit card, it is highly recommended to have cash available for leaving tips. Many countries do not have a spot for gratuity on their credit card slips.</Text>
            <Text style={InfoStyles.disclaimerText}>**Currency data is not live. Exchange rates are updated daily.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
