import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
  SafeAreaView
} from 'react-native';
import Firebase from '../Firebase';
import { useFonts, ShadowsIntoLight_400Regular } from '@expo-google-fonts/shadows-into-light';
import { Aboreto_400Regular } from '@expo-google-fonts/aboreto';

export default function CadGente({navigation}) {
  const [nome, setNome] = useState(null);
  const [sexo, setSexo] = useState(null);
  const [causa, setCausa] = useState(null);
  const [dia, setDia] = useState(null);
  const [hora, setHora] = useState(null);
  const [obs, setObs] = useState(null);

  function addNota() {
    Firebase.collection('deathnote').add({
      nome: nome,
      sexo: sexo,
      causa: causa,
      dia: dia,
      hora: hora,
      obs: obs
    });
    setNome({nome:''})
    setSexo({sexo: ''})
    setCausa({causa: ''})
    setDia({dia: ''})
    setHora({hora: ''})
    setObs({obs: ''})

  Alert.alert("Justiça!", "Você matou alguém com sucesso")
navigation.navigate("Home")
  }

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
        style={styles.backgroundImage}
      >
      <View>
        <Text style={styles.titulo}>Mate Alguém Aqui</Text>
      </View>
      <TextInput autoCapitalize = 'words' style={styles.input} placeholder="Digite o Nome" onChangeText={setNome} value={nome}/>
      <TextInput style={styles.input} placeholder="Digite o Sexo" onChangeText={setSexo} value={sexo}/>
      <TextInput style={styles.input} placeholder="Digite a Causa" onChangeText={setCausa} value={causa}/>
      <TextInput style={styles.input} placeholder="Digite o Dia" onChangeText={setDia} value={dia}/>
      <TextInput style={styles.input} placeholder="Digite a Hora " onChangeText={setHora} value={hora}/>
      <TextInput style={styles.input} placeholder="Alguma observação?" onChangeText={setObs} value={obs}/>

      <TouchableOpacity
        style={styles.btnenviar}
        onPress={() => {
          addNota();
        }}>
        <Text style={styles.btntxtenviar}> Enviar </Text>
      </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  input: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
    borderRadius: 10,
  },
  btnenviar: {
    marginTop: 10,
    marginLeft: 140
  },
  btntxtenviar: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'Aboreto_400Regular',
  },
   backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  titulo: {
    marginVertical: 40,
    fontSize: 25,
    textAlign: 'center',
    marginTop: 140,
    color: 'white',
    fontFamily: 'Aboreto_400Regular',
  },
});