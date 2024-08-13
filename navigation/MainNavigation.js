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
import { colorOrange, colorDarkGrey } from './../styles/Constants';

// DEFINE LISTSTACK AS NATIVE STACK NAVIGATOR
const ListStack = createNativeStackNavigator();

const ListStackScreen = () => {
  return (
    <ListStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colorOrange,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontFamily: 'patrick-hand',
          fontSize: 24,
        },
      }}
    >
      <ListStack.Screen
        name='List'
        component={ListScreen}
        options={{ headerShown: false }}
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
          backgroundColor: colorOrange,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontFamily: 'patrick-hand',
          fontSize: 24,
        },
      }}
    >
      <SearchStack.Screen
        name='Search'
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen name='SearchInfo' component={SearchInfoScreen} />
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
          tabBarActiveTintColor: colorOrange,
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
