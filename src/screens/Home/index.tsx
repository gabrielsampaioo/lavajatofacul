import React from "react";
import {
  View,
  Text,
} from 'react-native';


import { styles } from './styles';
import { useNavigation } from "@react-navigation/core";


export function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>
        Página HOme
      </Text>
    </View>
  )
}