import React, { Component } from 'react';
import { View, Text } from 'react-native';

// STYLES
import FooterStyles from './../styles/FooterStyles';

export default class Footer extends Component {

  render() {
    return (
      <View style={FooterStyles.container}>
        <Text style={FooterStyles.text}>v1.5.4</Text>
      </View>
    )
  }
}
