import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, StatusBar, FlatList, TouchableOpacity, View, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

// COMPONENTS
import Header from './../components/Header';
import Footer from './../components/Footer';

// STYLES
import ListStyles from './../styles/ListStyles';

export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayList: false,
      displayLoading: true,
      displayError: false,
      countryTipData: [],
    };
  }

  componentDidMount(){
    // AsyncStorage.clear()
    this.downloadData();
  }

  getCountryTipData = async () => {
    let countryTipData = await AsyncStorage.getItem('tip-data');
    if (countryTipData) {
      countryTipData = JSON.parse(countryTipData);
      this.setState({
        countryTipData: countryTipData,
      })
    } else {
      this.setState({
        displayError: true,
      })
    }
  }

  // DOWNLOAD DATA BASED ON INTERNET CONNECTION STATUS
  downloadData = () => {
    NetInfo.isConnected.fetch().then(isConnected => {
      // console.log('Initial ' + (isConnected ? 'online' : 'offline'));
    });
    connectivityChange = (isConnected) => {
      console.log('Now ' + (isConnected ? 'online' : 'offline'));
      if (isConnected) {
        fetch('https://brandonscode.herokuapp.com/tipjar/tip-data')
          .then(res => res.json())
          .then(
            (result) => {
              AsyncStorage.setItem('tip-data', JSON.stringify(result))
                .then( () => {
                  this.getCountryTipData();
                });
            }
          )
        fetch('https://brandonscode.herokuapp.com/tipjar/currency-data')
          .then(res => res.json())
          .then(
            (result) => {
              AsyncStorage.setItem('currency-data', JSON.stringify(result))
                .then( () => {
                  this.setState({
                    displayLoading: false,
                    displayList: true,
                  })
                });
            }
          )
      } else {
        this.getCountryTipData();
        this.setState({
          displayLoading: false,
          displayList: true,
        })
      }
      NetInfo.isConnected.removeEventListener('connectionChange', connectivityChange);
    }
    NetInfo.isConnected.addEventListener('connectionChange', connectivityChange);
  }

  render() {

    const displayList = this.state.displayList;
    const displayLoading = this.state.displayLoading;
    const displayError = this.state.displayError;

    return (
      <SafeAreaView style={ListStyles.safeViewContainer}>
        <StatusBar barStyle="dark-content" />
        <View style={ListStyles.container}>
          <Header />
          {
            displayList &&
              <FlatList style={ListStyles.listContainer}
                data = {this.state.countryTipData}
                keyExtractor = {(x, i) => i.toString()}
                renderItem = { ({item}) =>
                  <View style={ListStyles.listButtonContainer}>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Info',item.country) }>
                      <View style={ListStyles.listButton}>
                        <Text style={ListStyles.listButtonText}>{item.country}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                }
                ListFooterComponent = {
                  <Footer />
                }
              />
          }
          {
            displayLoading &&
              <View style={ListStyles.otherView}>
                <Text style={ListStyles.otherText}>Updating data</Text>
              </View>
          }
          {
            displayError &&
              <View style={ListStyles.otherView}>
                <Text style={ListStyles.otherText}>Sorry...</Text>
                <Text style={ListStyles.otherTextSmall}>For your first use, an internet connection is needed to download our tip data. Once downloaded, the app can be used offline.</Text>
              </View>
          }
        </View>
      </SafeAreaView>
    );
  }
}
