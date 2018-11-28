import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, ScrollView, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// STYLES
import SearchInfoStyles from './../styles/SearchInfoStyles';

export default class InfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryTipData: [],
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
    let countryTipData = await AsyncStorage.getItem('tip-data');
    countryTipData = JSON.parse(countryTipData);
    this.setState({
      countryTipData: countryTipData
    })
    let currencyData = await AsyncStorage.getItem('currency-data');
    currencyData = JSON.parse(currencyData);
    this.setState({
      currencyData: currencyData,
    })
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
      <SafeAreaView style={SearchInfoStyles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={SearchInfoStyles.scrollContainer}>
          <View style={SearchInfoStyles.countryContainer}>
            <Text style={SearchInfoStyles.countryIcon}>
              <FontAwesome name="cutlery" size={32} color="#494F56" />
            </Text>
            <Text style={SearchInfoStyles.countryTitle}>Dining*:</Text>
            <Text style={SearchInfoStyles.countryText}>{this.state.countryTipData.dining}</Text>
            <Text style={SearchInfoStyles.countryIcon}>
              <FontAwesome name="taxi" size={32} color="#494F56" />
            </Text>
            <Text style={SearchInfoStyles.countryTitle}>Transportation:</Text>
            <Text style={SearchInfoStyles.countryText}>{this.state.countryTipData.transportation}</Text>
            <Text style={SearchInfoStyles.countryIcon}>
              <FontAwesome name="building" size={32} color="#494F56" />
            </Text>
            <Text style={SearchInfoStyles.countryTitle}>Accomodation:</Text>
            <Text style={SearchInfoStyles.countryText}>{this.state.countryTipData.accommodation}</Text>
            <Text style={SearchInfoStyles.countryIcon}>
              <FontAwesome name="money" size={32} color="#494F56" />
            </Text>
            <Text style={SearchInfoStyles.countryTitle}>Currency**:</Text>
            <Text style={SearchInfoStyles.countryText}>1 USD = {this.state.countryCurrencyData} {this.state.countryTipData.currency}</Text>
            <Text style={SearchInfoStyles.countryIcon}>
              <FontAwesome name="language" size={32} color="#494F56" />
            </Text>
            <Text style={SearchInfoStyles.countryTitle}>Thank you:</Text>
            <Text style={SearchInfoStyles.countryText}>{this.state.countryTipData.thankyou}</Text>
            <Text style={SearchInfoStyles.countryTitle}>Goodbye:</Text>
            <Text style={SearchInfoStyles.countryText}>{this.state.countryTipData.goodbye}</Text>
            <Text style={SearchInfoStyles.disclaimerText}>*If paying with a credit card, it is highly recommended to have cash available for leaving tips. Many countries do not have a spot for gratuity on their credit card slips.</Text>
            <Text style={SearchInfoStyles.disclaimerText}>**Currency data is not live. Exchange rates are updated daily.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
