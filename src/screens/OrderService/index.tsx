import {
  View,
  Text,
  Image,
} from 'react-native';
import React from 'react';
import { styles } from './styles';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import icon from "../../assets/icon.png";


export function OrderService() {
  const services = [
    {
      id: '1',
      type: 'Lavagem a seco',
    },
    {
      id: '2',
      type: 'Lavagem completa',
    },
    {
      id: '3',
      type: 'Limpar vidros',
    },
    {
      id: '4',
      type: 'Limpar vidros',
    },
    {
      id: '5',
      type: 'Limpar bancos',
    },
    {
      id: '6',
      type: 'Limpar bancos',
    },
    {
      id: '7',
      type: 'Lavagem completa',
    },

  ]

  const Item = ({ id, type }) => (
    <View style={styles.item}>
      <Text style={styles.servicesText}>Código do serviço</Text>
      <Text style={styles.services}>{id}</Text>
      <Text style={styles.servicesText}>Tipo do serviço</Text>
      <Text style={styles.services}>{type}</Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.textButton}>X</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item id={item.id} type={item.type} />
  );
  return (
    <Background>
      <Image style={styles.icon} source={icon} resizeMode="stretch" />
      <View>
        <Text style={styles.title}>Ordens de Serviço</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Serviços Abertos</Text>
      </View>
      <FlatList
        data={services}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />

    </Background>
  );
}