import React, { Component } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import MainNavigation from './navigation/MainNavigation';

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

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
