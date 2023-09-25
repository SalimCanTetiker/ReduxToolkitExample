import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'

import Home from './pages/Home/Home'
import Favorite from './pages/Favorite/Favorite'


const Tab = createBottomTabNavigator()

const Router = () => {

  const favorite = useSelector((state) => state.favorite)
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{headerShown: false}}>
        <Tab.Screen name='Home' component={Home}
        options={{tabBarIcon: () => (<Icon name='home-circle-outline' size={35}/>)}} 
        />
        <Tab.Screen name='Favorite' component={Favorite} 
        options={{tabBarIcon: () => (<Icon name='heart-outline' size={35}/>), tabBarBadge: favorite.length }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router