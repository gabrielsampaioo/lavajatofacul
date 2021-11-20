import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import icon from "../../assets/icon.png";

import { Background } from "../../components/Background";

import { styles } from './styles';


export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <Background>

      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={icon}
          resizeMode="stretch"
        />
        <View style={styles.cpf}>
          <Text style={styles.text}>
            CPF
          </Text>
          <TextInput
            style={styles.cpfInput}
            placeholder="  000.000.000-00"
            keyboardType="numbers-and-punctuation"

          />
        </View>
        <View style={styles.senha}>
          <Text style={styles.text}>
            SENHA
          </Text>
          <TextInput
            style={styles.senhaInput}
            placeholder="  Digite sua senha"
            keyboardType="default"
          />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSignIn}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </Background>
  )
}