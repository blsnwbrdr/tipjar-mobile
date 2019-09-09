import React, { Component } from 'react';
import { StatusBar, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

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
    defaultNavigationOptions: {
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
    defaultNavigationOptions: {
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

const BottomNavigation = createBottomTabNavigator(
  {
    List: {
      screen: HomeStack,
      defaultNavigationOptions: {
        tabBarLabel: 'List'
      },
    },
    Search: {
      screen: SearchStack,
      defaultNavigationOptions: {
        tabBarLabel: 'Search'
      },
    },
    Calculator: {
      screen: CalculatorScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
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

const MainNavigation = createAppContainer(BottomNavigation);

export default MainNavigation;
