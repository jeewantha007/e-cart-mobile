import React from 'react';
import { View, Text } from 'react-native';
import HomePage from './src/screens/Home/HomePage';
import ProductCard from './src/components/ProductCard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartPage from './src/screens/Cart/CartPage';
import OrderPage from './src/screens/Orders/OrderPage';
import { NavigationContainer } from '@react-navigation/native';
import CategoryPage from './src/screens/Category/CategoryPage';
import Register from './src/screens/Register/Register';
import Login from './src/screens/Login/Login';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './src/screens/BottomTab/BottomTab';


const Stack = createStackNavigator();

function App() {
  return (
<NavigationContainer>
<Stack.Navigator>
    <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
    <Stack.Screen options={{headerShown:false}} name="Register" component={Register} />
    <Stack.Screen options={{headerShown:false}} name="BottomDrawer" component={BottomTab} />
  </Stack.Navigator>

</NavigationContainer>

   
    
    // <Login/>
 
  );
}

export default App;
