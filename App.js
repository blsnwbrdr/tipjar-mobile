import React, { Component } from 'react';
import { NetInfo, AsyncStorage, StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { AppLoading, Font } from 'expo';
import { CountryListing } from './CountryListing';
import { CalculatorModal } from './CalculatorModal';
import Styles from './styles/Styles';

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };


  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      // console.log('First, is ' + (isConnected ? 'online' : 'offline'));
    });
    function connectivityChange(isConnected) {
      // console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
      if (isConnected === true) {
        fetch('https://brandonscode.herokuapp.com/currency-data')
          .then(res => res.json())
          .then(
            (result) => {
              // console.log('Connected to currency database');
              AsyncStorage.setItem('currency-data', JSON.stringify(result), () => {
                // console.log('Currency data stored');
              });
            }
          )
      }
      NetInfo.isConnected.removeEventListener('connectionChange', connectivityChange);
    }
    NetInfo.isConnected.addEventListener('connectionChange', connectivityChange);
  }

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
        <View style={Styles.container}>
          <StatusBar barStyle="dark-content" />
          <View style={Styles.headerContainer}>
            <Text style={Styles.titleText}>TIP JAR</Text>
            <Text style={Styles.subTitleText}>A globetrotting guide to gratuity</Text>
          </View>
          <CountryListing />
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
    this.setState({
      isLoadingComplete: true
    });
  };
}
