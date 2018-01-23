import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { AppLoading, Font } from 'expo';
import { CountryView } from './CountryView';
import { CalculatorModal } from './CalculatorModal';

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>TIP JAR</Text>
            <Text style={styles.subTitleText}>A globetrotting guide to gratuity</Text>
          </View>
          <CountryView />
          <CalculatorModal />
        </View>
      );
    }
  }

  // ASYNC LOAD FONTS
  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'patrick-hand': require('./assets/fonts/PatrickHand-Regular.ttf'),
        'nothing-you-could-do': require('./assets/fonts/NothingYouCouldDo.ttf'),
        'hind': require('./assets/fonts/hind-regular.otf'),
      }),
    ]);
  };
  _handleLoadingError = error => {
    console.warn(error);
  };
  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

// STYLE VARIABLES
const colorDarkGrey = '#494F56';
const colorOrange = '#B57A42';
const colorLightGrey = "#F0F0F0";

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  titleText: {
    fontFamily: 'patrick-hand',
    fontSize: 60,
    color: colorOrange,
    marginBottom: 0,
  },
  subTitleText: {
    fontFamily: 'nothing-you-could-do',
    fontSize: 16,
    color: colorDarkGrey,
  },
});
