import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import {
  RedHatDisplay_400Regular,
  RedHatDisplay_500Medium,
  RedHatDisplay_700Bold,
} from '@expo-google-fonts/red-hat-display';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';


export default function App() {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular,
    RedHatDisplay_500Medium,
    RedHatDisplay_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <Background>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}

