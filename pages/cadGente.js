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

  Alert.alert("Cadastro", "Registros cadastrados com sucesso")
navigation.navigate("Home")
  }

  return (
    <SafeAreaView style={estilo.container}>
    <ImageBackground
        source={require('../assets/fundo.jpg')}
        style={estilo.backgroundImage}
      >
<View>
        <Text style={styles.titulo}> Escreve o nome</Text>
      </View>
      <TextInput autoCapitalize = 'words' style={styles.input} placeholder="Digite o Nome" onChangeText={setNome} value={nome}/>
      <TextInput style={styles.input} placeholder="Digite o Sexo" onChangeText={setSexo} value={sexo}/>
      <TextInput style={styles.input} placeholder="Digite a Causa" onChangeText={setCausa} value={causa}/>
      <TextInput style={styles.input} placeholder="Digite o Dia" onChangeText={setDia} value={dia}/>
      <TextInput style={styles.input} placeholder="Digite a Hora " onChangeText={setHora} value={hora}/>
      <TextInput style={styles.input} placeholder="Alguma observação" onChangeText={setObs} value={obs}/>

      <TouchableOpacity
        style={estilo.btnenviar}
        onPress={() => {
          addNota();
        }}>
        <Text style={estilo.btntxtenviar}> Enviar </Text>
      </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
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
   backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  btnenviar: {
    marginTop: 20,
  },
  btntxtenviar: {
    fontSize: 25,
  },
  titulo: {
    marginVertical: 40,
    fontSize: 25,
    textAlign: 'center',
    marginTop: 200,
    color: 'white'
  },
});