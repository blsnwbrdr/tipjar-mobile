import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableWithoutFeedback } from 'react-native';

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

export class List extends Component {

  constructor(props) {
    super(props);
    this.onPressTipData = this.onPressTipData.bind(this);
    this.onPressList = this.onPressList.bind(this);
    this.state = {listView: true,countryTipData: countryTipData,};
  }

  onPressTipData(country){
    for ( var x = 0; x < countryTipData.length; x++) {
      if (country === countryTipData[x].country) {
        for ( var i = 0; i < currencyData.length; i++) {
          if (countryTipData[x].currency === currencyData[i].currency) {
            this.setState({
             listView: false,
             countryTipData: countryTipData[x],
             currencyData: currencyData[i],
            })
          }
        }
      }
    }
  }

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
        <View style={styles.mainContainer}>
          <ScrollView ref="scrollView" style={styles.scrollContainer}>
            <FlatList style={styles.listContainer}
              data = {this.state.countryTipData}
              keyExtractor = {(x, i) => i}
              renderItem = { ({item}) =>
                <TouchableWithoutFeedback onPress={ () => this.onPressTipData(item.country) }>
                  <View>
                    <Text style={styles.listText}>{item.country}</Text>
                  </View>
                </TouchableWithoutFeedback>
              }
            />
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.locationButtonContainer}>
            <TouchableWithoutFeedback onPress={ () => this.onPressList() }>
              <View style={styles.locationButton}>
                <Text style={styles.locationButtonText}>Choose a location</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <ScrollView ref="scrollView">
            <View style={styles.countryContainer}>
              <Text style={styles.countryHeader}>{this.state.countryTipData.country}</Text>
              <Text style={styles.countryTitle}>Dining:</Text>
              <Text style={styles.countryText}>{this.state.countryTipData.dining}</Text>
              <Text style={styles.countryTitle}>Transportation:</Text>
              <Text style={styles.countryText}>{this.state.countryTipData.transportation}</Text>
              <Text style={styles.countryTitle}>Accomodation:</Text>
              <Text style={styles.countryText}>{this.state.countryTipData.accommodation}</Text>
              <Text style={styles.countryTitle}>Currency:</Text>
              <Text style={styles.countryText}>1 USD = {this.state.countryTipData.currency} {this.state.currencyData.conversion}</Text>
              <Text style={styles.countryTitle}>Thank you:</Text>
              <Text style={styles.countryText}>{this.state.countryTipData.thankyou}</Text>
              <Text style={styles.countryTitle}>Goodbye:</Text>
              <Text style={styles.countryText}>{this.state.countryTipData.goodbye}</Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
}

// STYLE VARIABLES
const colorDarkGrey = '#494F56';
const colorOrange = '#B57A42';
const colorLightGrey = "#F8F8F8";

// STYLESHEET
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
  },
  locationButtonContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  locationButton: {
    width: 200,
    borderRadius: 50,
    borderColor: colorDarkGrey,
    borderWidth: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
  },
  locationButtonText: {
    fontFamily: 'hind',
    fontSize: 22,
    textAlign: 'center',
    color: colorDarkGrey,
  },
  listContainer: {
    marginTop: 10,
    marginBottom: 40,
  },
  listText: {
    fontFamily: 'hind',
    fontSize: 18,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingBottom: 10,
  },
  countryContainer: {
    marginTop: 20,
    marginBottom: 40,
    paddingLeft: 25,
    paddingRight: 25,
  },
  countryHeader: {
    fontFamily: 'patrick-hand',
    fontSize: 42,
    color: colorOrange,
    textAlign: 'center',
    paddingBottom: 20,
  },
  countryTitle: {
    fontFamily: 'hind',
    fontSize: 22,
    color: colorDarkGrey,
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: colorOrange,
  },
  countryText: {
    fontFamily: 'hind',
    fontSize: 18,
    color: colorDarkGrey,
    textAlign: 'center',
    paddingBottom: 15,
  }
});
