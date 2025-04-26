import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Home/HomePage';
import CartPage from '../Cart/CartPage';
import OrderPage from '../Orders/OrderPage';
import CategoryPage from '../Category/CategoryPage';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (

    <Tab.Navigator>
     <Tab.Screen options={{headerShown: false}}   name="Home" component={HomePage} />
     <Tab.Screen   name="Category" component={CategoryPage} />
     <Tab.Screen  name="Cart" component={CartPage} />
     <Tab.Screen name="Orders" component={OrderPage} />
   
   </Tab.Navigator>
  
  )
}