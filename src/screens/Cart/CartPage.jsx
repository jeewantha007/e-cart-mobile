import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CartPage() {
  return (
    <View>
      <Text>CartPage</Text>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Ionicons name="home-outline" size={40} color="tomato" />
    </View>
    </View>
  )
}