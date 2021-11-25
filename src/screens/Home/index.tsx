import {
  View,
  Text,
  Image,
} from 'react-native';
import icon from "../../assets/icon.png";
import React from 'react';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Background } from '../../components/Background';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { SignIn } from '../SignIn';


export function Home() {
  const navigation = useNavigation();
  function logout() {
    navigation.navigate('SignIn');
  }
  function registerCar() {
    navigation.navigate('RegisterCar');
  }
  function registerService() {
    navigation.navigate('RegisterService');
  }
  function OrderService() {
    navigation.navigate('OrderService');
  }

  const [user, setUser] = useState<string | null>('');

  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      setUser(json.name)
    }
    getUser();
  }, [])

  return (
    <Background>
      <View style={styles.container}>
        <Image style={styles.icon} source={icon} resizeMode="stretch" />
        <Text style={styles.welcomeText}>
          Seja Bem vindo {user}
        </Text>
        <View style={styles.opcoes}>
          <View >
            <SimpleLineIcons name="magnifier" size={100} color="black" onPress={OrderService} />
            <Text style={styles.orderText}>Ordens de Serviço</Text>
          </View>
          <View >
            <SimpleLineIcons name="notebook" size={100} color="black" onPress={registerService} />
            <Text style={styles.serviceText}>Cadastrar Serviço</Text>
          </View>
        </View>
        <View style={styles.opcoes2}>
          <View >
            <AntDesign name="car" size={100} color="black" onPress={registerCar} />
            <Text style={styles.carText}>Cadastrar Veiculo</Text>
          </View>
          <View>
            <SimpleLineIcons name="logout" size={100} color="black" onPress={logout} />
            <Text style={styles.logoutText}>Sair</Text>
          </View>
        </View>

      </View>
    </Background>
  )
}