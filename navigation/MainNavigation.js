import React, { Component } from 'react';
import { StatusBar, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

// SCREENS
import ListScreen from './../screens/ListScreen';
import InfoScreen from './../screens/InfoScreen';
import SearchScreen from './../screens/SearchScreen';
import SearchInfoScreen from './../screens/SearchInfoScreen';
import CalculatorScreen from './../screens/CalculatorScreen';

// STYLE CONSTANTS
import { colorOrange, colorDarkGrey, colorLightGrey } from './../styles/Constants';

const HomeStack = StackNavigator(
  {
    List: {
      screen: ListScreen,
      navigationOptions: {
        headerStyle: {
          position: 'absolute',
          top: 0,
          left: 0,
        },
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

const SearchStack = StackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        headerStyle: {
          position: 'absolute',
          top: 0,
          left: 0,
        },
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

export default TabNavigator(
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
    tabBarComponent: TabBarBottom,
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
