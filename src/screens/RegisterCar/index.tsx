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

export function RegisterCar() {
  return (
    <ScrollView>
      <Background>
        <View style={styles.container}>
          <Image style={styles.icon} source={icon} resizeMode="stretch" />
          <View>
            <Text style={styles.title}>Cadastrar Veículo</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>Preencha com as informações do carro</Text>
          </View>
          <View>
            <View style={styles.scrollview}>
              <View>
                <Text style={styles.registerText}>Placa do veículo</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View>
                <Text style={styles.registerText}>Modelo</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View>
                <Text style={styles.registerText}>Tipo</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View>
                <Text style={styles.registerText}>Marca</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View>
                <Text style={styles.registerText}>Cor</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View>
                <Text style={styles.registerText}>Nome do proprietário</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View>
                <Text style={styles.registerText}>Telefone</Text>
                <TextInput
                  style={styles.registerInput}
                />
              </View>
              <View>
                <Text style={styles.registerText}>Observação</Text>
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