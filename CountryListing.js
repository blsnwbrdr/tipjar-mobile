import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Styles from './styles/Styles';

// JSON DATA
const countryTipData = require('./data/countryTipData.json');
const currencyData = require('./data/currencyData.json');

// SORT COUNTRY LIST
function compare(a,b) {
  if (a.country < b.country)
    return -1;
  if (a.country > b.country)
    return 1;
  return 0;
}
countryTipData.sort(compare);

export class CountryListing extends Component {
  constructor(props) {
    super(props);
    this.onPressTipData = this.onPressTipData.bind(this);
    this.onPressList = this.onPressList.bind(this);
    this.state = {
      listView: true,
      countryTipData: countryTipData,
    };
  }

  // DISPLAY COUNTRY DATA
  onPressTipData(country){
    for ( var x = 0; x < countryTipData.length; x++) {
      if (country === countryTipData[x].country) {
        for ( var i = 0; i < currencyData.length; i++) {
          if (countryTipData[x].currency === currencyData[i].currency) {
            this.setState({
             listView: false,
             countryTipData: countryTipData[x],
             currencyData: Math.round(currencyData[i].conversion * 100) / 100,
            })
          }
        }
      }
    }
  }

  // DISPLAY COUNTRY LIST
  onPressList() {
    this.setState({
      listView: true,
      countryTipData: countryTipData,
    });
  }

  render() {
    const showList = this.state.listView;
    if(showList) {
      return (
        <View style={Styles.countryListingContainer}>
          <ScrollView style={Styles.scrollContainer}>
            <FlatList style={Styles.listContainer}
              data = {this.state.countryTipData}
              keyExtractor = {(x, i) => i}
              renderItem = { ({item}) =>
                <View style={Styles.listButtonContainer}>
                  <TouchableOpacity onPress={ () => this.onPressTipData(item.country) }>
                    <View style={Styles.listButton}>
                      <Text style={Styles.listButtonText}>{item.country}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              }
            />
            <View>
              <Text style={Styles.versionText}>v1.2.1</Text>
            </View>
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={Styles.countryListingContainer}>
          <View style={Styles.locationButtonContainer}>
            <TouchableOpacity onPress={ () => this.onPressList() }>
              <View style={Styles.locationButton}>
                <Text style={Styles.locationButtonText}>Choose a location</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView style={Styles.scrollContainer}>
            <View style={Styles.countryContainer}>
              <Text style={Styles.countryHeader}>{this.state.countryTipData.country}</Text>
              <Text style={Styles.countryIcon}>
                <FontAwesome name="cutlery" size={32} color="#494F56" />
              </Text>
              <Text style={Styles.countryTitle}>Dining:</Text>
              <Text style={Styles.countryText}>{this.state.countryTipData.dining}</Text>
              <Text style={Styles.countryIcon}>
                <FontAwesome name="taxi" size={32} color="#494F56" />
              </Text>
              <Text style={Styles.countryTitle}>Transportation:</Text>
              <Text style={Styles.countryText}>{this.state.countryTipData.transportation}</Text>
              <Text style={Styles.countryIcon}>
                <FontAwesome name="building" size={32} color="#494F56" />
              </Text>
              <Text style={Styles.countryTitle}>Accomodation:</Text>
              <Text style={Styles.countryText}>{this.state.countryTipData.accommodation}</Text>
              <Text style={Styles.countryIcon}>
                <FontAwesome name="money" size={32} color="#494F56" />
              </Text>
              <Text style={Styles.countryTitle}>Currency*:</Text>
              <Text style={Styles.countryText}>1 USD = {this.state.currencyData} {this.state.countryTipData.currency}</Text>
              <Text style={Styles.countryIcon}>
                <FontAwesome name="language" size={32} color="#494F56" />
              </Text>
              <Text style={Styles.countryTitle}>Thank you:</Text>
              <Text style={Styles.countryText}>{this.state.countryTipData.thankyou}</Text>
              <Text style={Styles.countryTitle}>Goodbye:</Text>
              <Text style={Styles.countryText}>{this.state.countryTipData.goodbye}</Text>
              <Text style={Styles.disclaimerText}>*Currency data is not live. Exchange rates are historical and periodically updated.</Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}
