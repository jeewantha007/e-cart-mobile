import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Home/HomePage';
import CartPage from '../Cart/CartPage';
import OrderPage from '../Orders/OrderPage';
import CategoryPage from '../Category/CategoryPage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Category') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Orders') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
       
       
      })}
    >
      <Tab.Screen name="Home"  options={{headerShown:false}} component={HomePage} />
      <Tab.Screen name="Category" component={CategoryPage} />
      <Tab.Screen name="Cart" component={CartPage} />
      <Tab.Screen name="Orders" component={OrderPage} />
    </Tab.Navigator>
  );
}
