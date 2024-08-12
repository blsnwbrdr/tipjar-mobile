import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// STYLES
import SearchStyles from './../styles/SearchStyles';

export default class CloseKeyboard extends Component {
  render() {
    const keyboard = this.props.keyboard;
    if (keyboard === 'on') {
      return (
        <TouchableOpacity
          style={SearchStyles.closeButton}
          onPress={() => this.props.closeKeyboard()}
        >
          <View style={SearchStyles.closeButtonView}>
            <FontAwesome name='close' size={40} />
          </View>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  }
}
