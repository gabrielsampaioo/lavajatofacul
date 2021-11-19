import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";


const Stack = createStackNavigator();


export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'none'
      }}
    >
      <Stack.Screen
        name='SignIn'
        component={SignIn}
      />
      <Stack.Screen
        name='Home'
        component={Home}
      />
    </Stack.Navigator>
  )
}