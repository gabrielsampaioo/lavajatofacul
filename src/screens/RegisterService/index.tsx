import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Background } from '../../components/Background';

import icon from "../../assets/icon.png";
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export function RegisterService() {
  return (
    <ScrollView>
      <Background>
        <View style={styles.container}>
          <Image style={styles.icon} source={icon} resizeMode="stretch" />
          <View>
            <Text style={styles.title}>Cadastrar Serviço</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>Preencha com as informações necessárias</Text>
          </View>
          <View>
            <View style={styles.scrollview}>
              <View>
                <Text style={styles.registerText}>Nome do cliente</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View>
                <Text style={styles.registerText}>Placa do veículo</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View>
                <Text style={styles.registerText}>Data</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View>
                <Text style={styles.registerText}>Codigo do serviço</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View>
                <Text style={styles.registerText}>Tipo do serviço</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View>
                <Text style={styles.registerText}>Quantidade</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View>
                <Text style={styles.registerText}>Preço Total</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} >
                  <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Background>
    </ScrollView>
  )
}