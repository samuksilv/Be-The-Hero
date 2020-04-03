import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native'

import logoImg from "../../assets/logo.png";

import styles from "./styles";
import { FlatList } from 'react-native-gesture-handler';

export default function Incidents() {

  const navigation = useNavigation();

  async function navigateToDetail() {
    navigation.navigate('Detail'); 
  }

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}> 0 casos</Text>.
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        style={styles.incidentList}
        KeyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>caso numeor 01</Text>

            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentValue}>1200</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText} >Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}
