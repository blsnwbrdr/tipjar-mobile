import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert, FlatList, TouchableWithoutFeedback } from 'react-native';
import { AppLoading, Font } from 'expo';
import { List } from './list.js';

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
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.titleText}>TIP JAR</Text>
              <Text style={styles.subTitleText}>A globetrotting guide to gratuity</Text>
            </View>
            <List />
          </ScrollView>
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
const primaryColor = '#494F56';
const secondaryColor = '#B57A42';

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 50,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  titleText: {
    fontFamily: 'patrick-hand',
    fontSize: 80,
    color: secondaryColor,
    marginBottom: 15,
  },
  subTitleText: {
    fontFamily: 'nothing-you-could-do',
    fontSize: 18,
    color: primaryColor,
    marginBottom: 10,
  },
});
