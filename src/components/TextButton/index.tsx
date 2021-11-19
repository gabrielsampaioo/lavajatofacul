import React from "react";
import {
  Text, View, StyleSheet, Pressable, ButtonProps, Button,
} from 'react-native';

import { styles } from "./styles";


export function TextButton(Props) {
  const { onPress, title = '...' } = Props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}