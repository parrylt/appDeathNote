import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import Firebase from '../Firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts, ShadowsIntoLight_400Regular } from '@expo-google-fonts/shadows-into-light';
import { Aboreto_400Regular } from '@expo-google-fonts/aboreto';

export default function VerGente({ navigation }) {
  const [deathnote, setDeathnote] = useState([]);

  function deleteNota(id) {
    Firebase.collection('deathnote').doc(id).delete();

    Alert.alert('Você pode ter apagado o nome, mas a pessoa ainda morrerá.');
  }

  useEffect(() => {
    Firebase.collection('deathnote').onSnapshot((query) => {
      const lista = [];
      query.forEach((doc) => {
        lista.push({ ...doc.data(), id: doc.id });
      });
      setDeathnote(lista);
    });
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    ShadowsIntoLight_400Regular, Aboreto_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/fundo.jpg')}
        style={styles.backgroundImage}>
        <View>
          <Text style={styles.titulo}> Vítimas</Text>
        </View>
        <FlatList
          data={deathnote}
          renderItem={({ item }) => {
            return (
              <View style={styles.diarios}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('CadGente', {
                      id: item.id,
                      nome: item.nome,
                      sexo: item.sexo,
                      causa: item.causa,
                      dia: item.dia,
                      hora: item.hora,
                      obs: item.obs,
                    })
                  }>
                  <View style={styles.itens}>
                    <Text style={styles.titulodiario}>
                      {' '}
                      Nome: <Text style={styles.textodiario}>{item.nome} </Text>
                    </Text>
                    <Text style={styles.titulodiario}>
                      {' '}
                      Sexo: <Text style={styles.textodiario}>{item.sexo} </Text>
                    </Text>
                    <Text style={styles.titulodiario}>
                      {' '}
                      Causa:{' '}
                      <Text style={styles.textodiario}>{item.causa} </Text>
                    </Text>
                    <Text style={styles.titulodiario}>
                      {' '}
                      Dia: <Text style={styles.textodiario}>{item.dia} </Text>
                    </Text>
                    <Text style={styles.titulodiario}>
                      {' '}
                      Hora: <Text style={styles.textodiario}>{item.hora} </Text>
                    </Text>
                    <Text style={styles.titulodiario}>
                      {' '}
                      Observação:{' '}
                      <Text style={styles.textodiario}>{item.obs} </Text>
                    </Text>
                  </View>
                </TouchableOpacity>

                <View style={styles.botaodeletar}>
                  <TouchableOpacity
                    onPress={() => {
                      deleteNota(item.id);
                    }}>
                    <MaterialCommunityIcons
                      name="delete-empty"
                      size={50}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  titulo: {
    marginTop: 110,
    marginLeft: 140,
    fontSize: 30,
    marginBottom: 40,
    zIndex: 2,
    color: 'white',
    fontFamily: 'ShadowsIntoLight_400Regular',
  },
  itens: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
  },
  titulodiario: {
    fontSize: 13,
  },
  textodiario: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  diarios: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  botaodeletar: {
    textAlignVertical: 'center',
    marginVertical: 10,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});