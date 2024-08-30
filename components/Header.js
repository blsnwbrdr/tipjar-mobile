import React from 'react';
import { View, Text, Image } from 'react-native';

// STYLES
import HeaderStyles from './../styles/HeaderStyles';

export default Header = () => {
  return (
    <View style={HeaderStyles.container}>
      <Text style={HeaderStyles.titleText}>TIP JAR</Text>
      <Image
        style={HeaderStyles.img}
        source={require('./../assets/header-icon.png')}
      />
      <Text style={HeaderStyles.subTitleText}>
        A globetrotting guide to gratuity
      </Text>
    </View>
  );
};
