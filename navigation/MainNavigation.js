import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

// SCREENS
import ListScreen from './../screens/ListScreen';
import InfoScreen from './../screens/InfoScreen';
import SearchScreen from './../screens/SearchScreen';
import SearchInfoScreen from './../screens/SearchInfoScreen';
import CalculatorScreen from './../screens/CalculatorScreen';

// STYLE CONSTANTS
import {
  colorPrimary,
  colorSecondary,
  colorDarkGrey,
  fontHeaderBig,
} from './../styles/Constants';

// DEFINE LISTSTACK AS NATIVE STACK NAVIGATOR
const ListStack = createNativeStackNavigator();

const ListStackScreen = () => {
  return (
    <ListStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colorSecondary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontFamily: fontHeaderBig,
          fontSize: 22,
        },
      }}
    >
      <ListStack.Screen
        name='List'
        component={ListScreen}
        options={{ headerShown: false, title: '' }}
      />
      <ListStack.Screen
        name='Info'
        component={InfoScreen}
        options={({ route }) => ({
          headerTitle: route.params,
        })}
      />
    </ListStack.Navigator>
  );
};

// DEFINE SEARCHSTACK AS NATIVE STACK NAVIGATOR
const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colorSecondary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontFamily: fontHeaderBig,
          fontSize: 22,
        },
      }}
    >
      <SearchStack.Screen
        name='Search'
        component={SearchScreen}
        options={{ headerShown: false, title: '' }}
      />
      <SearchStack.Screen
        name='SearchInfo'
        component={SearchInfoScreen}
        options={({ route }) => ({
          headerTitle: route.params,
        })}
      />
    </SearchStack.Navigator>
  );
}

// DEFINE TAB AS BOTTOM TAB NAVIGATOR
const Tab = createBottomTabNavigator();

export default MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color }) => {
            let iconName;

            switch (route.name) {
              case 'ListStack':
                iconName = 'list';
                break;
              case 'SearchStack':
                iconName = 'search';
                break;
              case 'Calculator':
                iconName = 'calculator';
            }

            return <FontAwesome name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: colorPrimary,
          tabBarInactiveTintColor: colorDarkGrey,
        })}
      >
        <Tab.Screen
          name='ListStack'
          component={ListStackScreen}
          options={{ title: 'List' }}
        />
        <Tab.Screen
          name='SearchStack'
          component={SearchStackScreen}
          options={{ title: 'Search' }}
        />
        <Tab.Screen name='Calculator' component={CalculatorScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
