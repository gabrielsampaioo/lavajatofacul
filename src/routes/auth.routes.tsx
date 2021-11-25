import React from "react";
import { createStackNavigator } from '@react-navigation/stack';


import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { RegisterCar } from "../screens/RegisterCar";
import { RegisterService } from "../screens/RegisterService";
import { OrderService } from "../screens/OrderService";


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
      <Stack.Screen
        name='RegisterCar'
        component={RegisterCar}
      />
      <Stack.Screen
        name='RegisterService'
        component={RegisterService}
      />
      <Stack.Screen
        name='OrderService'
        component={OrderService}
      />

    </Stack.Navigator>
  )
}