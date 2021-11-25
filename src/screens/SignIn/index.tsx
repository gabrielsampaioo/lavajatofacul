import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import icon from "../../assets/icon.png";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Background } from "../../components/Background";
import { styles } from './styles';
import { TextInputMask } from "react-native-masked-text";

export function SignIn(this: any, {navigation}) {

  const [display, setDisplay] = useState('none');
  const [user, setUser] = useState('null');
  const [password, setPassword] = useState('null');
  const [login, setLogin] = useState('null');

  /*Envio de formulário*/
  async function sendForm() {
    let response = await fetch('http://192.168.15.15:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cpf: user,
        password: password,
      })
    })
    let json = await response.json();
    if (json === 'error') {
      setDisplay('flex');
      setTimeout(() => {
        setDisplay('none')
      }, 20000);
      await AsyncStorage.clear();
    }else{
      let userData=await AsyncStorage.setItem('userData', JSON.stringify(json));
      navigation.navigate('Home')
    }
}

  return (
    <Background>

      <View style={styles.container}>

        <Image style={styles.icon} source={icon} resizeMode="stretch" />
          
        <View style={styles.cpf}>
          <Text style={styles.text}> CPF </Text>
          <TextInputMask
            style={styles.cpfInput}
            placeholder="000.000.000-00"
            type={'cpf'}
            value={user}
            maxLength={14}
            keyboardType="number-pad"
            returnKeyType="done"
            onChangeText={value => {
              setUser(value)
            }}
          />
        </View>

        <View style={styles.senha}>
          <Text style={styles.text}> SENHA </Text>
          <TextInput
            style={styles.senhaInput}
            placeholder="  Digite sua senha"
            secureTextEntry= {true}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <View style={styles.error}>
          <Text style={styles.error__text(display)} > Usuário ou senha inválidos </Text>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={() => sendForm()}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </Background>
  )
}