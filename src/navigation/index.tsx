import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { normalize } from '../util/helper';
import { colors } from '../util/constants';
import Home from '../screens/home';
import Bookmarks from '../screens/bookmarks';

const Tab = createBottomTabNavigator();

const getTabIcon = (color: string, size: number, routeName: string) => {
  switch (routeName) {
    case 'Home':
      return <Ionicons name="ios-home-outline" size={size} color={color} />;
    case 'Bookmarks':
      return (
        <Ionicons name="ios-bookmarks-outline" size={size} color={color} />
      );
    default:
      return null;
  }
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.darkBackground,
        tabBarInactiveTintColor: colors.gray,
        tabBarLabelStyle: {
          fontSize: normalize(10),
        },
        tabBarHideOnKeyboard: true,
        headerTitleAlign: "center"
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          title: 'Home',
          tabBarIcon: ({ size, color }) => getTabIcon(color, size, route.name),
        })}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={({ route }) => ({
          title: 'Bookmarks',
          tabBarIcon: ({ size, color }) => getTabIcon(color, size, route.name),
        })}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default function NavigationRoot() {
  return Platform.OS === 'ios' ? (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  ) : (
    <Navigation />
  );
}
