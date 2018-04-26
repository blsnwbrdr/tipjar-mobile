import React, { Component } from 'react';
import { NetInfo, AsyncStorage } from 'react-native';
import { AppLoading, Font } from 'expo';
import MainNavigation from './navigation/MainNavigation';

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  componentDidMount() {
    this.downloadCurrencyData();
  }

  // DOWNLOAD CURRENCY DATA BASED ON INTERNET CONNECTION STATUS
  downloadCurrencyData = () => {
    NetInfo.isConnected.fetch().then(isConnected => {
      console.log('Initial ' + (isConnected ? 'online' : 'offline'));
    });
    connectivityChange = (isConnected) => {
      console.log('Now ' + (isConnected ? 'online' : 'offline'));
      if (isConnected === true) {
        fetch('https://brandonscode.herokuapp.com/currency-data')
          .then(res => res.json())
          .then(
            (result) => {
              AsyncStorage.setItem('currency-data', JSON.stringify(result), () => {
                console.log('save new currency data');
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
            startAsync={this.loadResourcesAsync}
            onError={this.handleLoadingError}
            onFinish={this.handleFinishLoading}
          />
        );
      } else {
        return  <MainNavigation />
      }
    }

  // ASYNC LOAD FONTS
  loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'patrick-hand': require('./assets/fonts/PatrickHand-Regular.ttf'),
        'nothing-you-could-do': require('./assets/fonts/NothingYouCouldDo.ttf'),
        'hind': require('./assets/fonts/hind-regular.otf'),
      }),
    ]);
  };
  handleLoadingError = (error) => {
    console.warn(error);
  };
  handleFinishLoading = () => {
    this.setState({
      isLoadingComplete: true
    });
  };
}
