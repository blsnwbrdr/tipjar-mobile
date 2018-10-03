import React, { Component } from 'react';
import { StatusBar, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// SCREENS
import ListScreen from './../screens/ListScreen';
import InfoScreen from './../screens/InfoScreen';
import SearchScreen from './../screens/SearchScreen';
import SearchInfoScreen from './../screens/SearchInfoScreen';
import CalculatorScreen from './../screens/CalculatorScreen';

// STYLE CONSTANTS
import { colorOrange, colorDarkGrey, colorLightGrey } from './../styles/Constants';

const HomeStack = createStackNavigator(
  {
    List: {
      screen: ListScreen,
      navigationOptions: {
        header: null,
      },
    },
    Info: {
      screen: InfoScreen,
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colorOrange,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontFamily: 'patrick-hand',
        fontSize: 24,
      },
    },
  },
);

const SearchStack = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        header: null,
      },
    },
    SearchInfo: {
      screen: SearchInfoScreen,
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colorOrange,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontFamily: 'patrick-hand',
        fontSize: 24,
      },
    },
  },
);

export default createBottomTabNavigator(
  {
    List: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'List'
      },
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarLabel: 'Search'
      },
    },
    Calculator: {
      screen: CalculatorScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'List':
            iconName = 'ios-list';
            break;
          case 'Search':
            iconName = 'ios-search';
            break;
          case 'Calculator':
            iconName = 'ios-calculator';
        }
        return (
          <Ionicons
            name={iconName}
            size={25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: colorLightGrey,
      },
      activeTintColor: colorOrange,
      inactiveTintColor: colorDarkGrey,
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
