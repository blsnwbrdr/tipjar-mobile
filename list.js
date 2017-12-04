import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Button, TouchableWithoutFeedback } from 'react-native';

// JSON DATA
const data = require('./data/countryTipData.json');

// SORT COUNTRY LIST
function compare(a,b) {
  if (a.country < b.country)
    return -1;
  if (a.country > b.country)
    return 1;
  return 0;
}
data.sort(compare);

export class List extends Component {
  state = {
    data: data,
    viewOne: true,
  };

  constructor(props) {
    super(props);
    this.changeView = this.changeView.bind(this);
  };

  onPressLocation() {
    this.setState({
      viewOne: true
    });
  }

  changeView(country){
    for ( var x = 0; x < data.length; x++) {
      if (country === data[x].country) {
        this.setState({
         viewOne: !this.state.viewOne,
         data: data[x],
        })
      }
    }
  }

  render() {

    if(!this.state.viewOne) {
      return (
        <View>
          <Button
            onPress={ () => this.onPressLocation() }
            title="Choose a location"
            color="#494F56"
            accessibilityLabel="Choose a location"
          />
          <View style={styles.listContainer}>
            <Text style={styles.listText}>{this.state.data.country}</Text>
            <Text style={styles.listText}>{this.state.data.dining}</Text>
            <Text style={styles.listText}>{this.state.data.transportation}</Text>
            <Text style={styles.listText}>{this.state.data.accommodation}</Text>
            <Text style={styles.listText}>{this.state.data.currency}</Text>
            <Text style={styles.listText}>{this.state.data.thankyou}</Text>
            <Text style={styles.listText}>{this.state.data.goodbye}</Text>
          </View>
        </View>
      );
    } else if (this.state.viewOne) {
      return (
        <View>
          <Button
            onPress={ () => this.onPressLocation() }
            title="Choose a location"
            color="#494F56"
            accessibilityLabel="Choose a location"
          />
          <FlatList style={styles.listContainer}
            data = {this.state.data}
            keyExtractor = {(x, i) => i}
            renderItem = { ({item}) =>
              <TouchableWithoutFeedback onPress={ () => this.changeView(item.country) }>
                <View>
                  <Text style={styles.listText}>{item.country}</Text>
                </View>
              </TouchableWithoutFeedback>
            }
          />
        </View>
      );
    }
  }

}

// STYLE VARIABLES
const primaryColor = '#494F56';
const secondaryColor = '#B57A42';

// STYLESHEET
const styles = StyleSheet.create({
  buttonText: {
    fontFamily: 'hind',
    fontSize: 20,
    color: primaryColor,
    marginTop: 10,
    marginBottom: 10,
  },
  listContainer: {
    marginTop: 30,
  },
  listText: {
    fontFamily: 'hind',
    fontSize: 18,
    color: primaryColor,
    textAlign: 'center',
  }
});
