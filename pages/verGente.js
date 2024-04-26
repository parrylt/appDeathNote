import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList,TouchableOpacity,Alert} from 'react-native';
import Firebase from '../Firebase';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function VerGente({navigation}){

const [deathnote, setDeathnote] = useState([]);

function deleteNota(id){
  
  Firebase.collection("deathnote").doc(id).delete();

  Alert.alert("A nota foi Deletada.");
}

useEffect(()=>{
  Firebase.collection("deathnote").onSnapshot((query)=>{
    const lista=[];
    query.forEach((doc) =>{
      lista.push({...doc.data(),id: doc.id});
    });
  setDeathnote(lista);
  });
},[]);

  return(
<View style={styles.container}>
<ImageBackground
        source={require('../assets/fundo.jpg')}
        style={estilo.backgroundImage}
      >
  <View >
    <Text style={styles.titulo}> Vitimas</Text>
  </View>

  <FlatList 
  data={deathnote}
  renderItem={({item})=>{
   return(
     <View style={styles.diarios}>

<TouchableOpacity onPress={()=>navigation.navigate("CadGente",{
  id: item.id,
  nome: item.nome,
  sexo: item.sexo,
  causa: item.causa,
  dia: item.dia,
  hora: item.hora,
  obs: item.obs
})}>
    <View style={styles.itens}>
<Text style={styles.titulodiario}> Nome: <Text style={styles.textodiario}>{item.nome} </Text></Text>
<Text style={styles.titulodiario}> Sexo: <Text style={styles.textodiario}>{item.sexo} </Text></Text>
<Text style={styles.titulodiario}> Causa: <Text style={styles.textodiario}>{item.causa} </Text></Text>
<Text style={styles.titulodiario}> Dia: <Text style={styles.textodiario}>{item.dia} </Text></Text>
<Text style={styles.titulodiario}> Hora: <Text style={styles.textodiario}>{item.hora} </Text></Text>
<Text style={styles.titulodiario}> Observação: <Text style={styles.textodiario}>{item.obs} </Text></Text>
    </View>
</TouchableOpacity>

    <View style={styles.botaodeletar}>
<TouchableOpacity onPress={()=>{deleteNota(item.id)}}>
 <MaterialCommunityIcons name="delete-empty" size={70} color="red" />
</TouchableOpacity>

    </View>
    </View>
     );
  }}
  />
<TouchableOpacity style={styles.addbutton} onPress={()=> navigation.navigate("CadGente")}>
  <MaterialCommunityIcons name="plus-circle-outline" size={70} color="green" />
</TouchableOpacity>
</ImageBackground>
</View>
   
  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center'
},
titulo:{
  marginTop: 50,
  fontSize:30,
},
itens:{
  marginHorizontal: 10,
  marginVertical: 10,
  padding: 10,
 
},
titulodiario:{
fontSize: 13,
color:'#fff'
},
textodiario:{
fontSize: 15,
fontWeight: "bold",
},
backgroundImage: {
  flex: 1,
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
},
diarios:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 10,
  marginVertical: 10,
  padding: 10,
  backgroundColor: '#0000CD',
  borderRadius:10
},
botaodeletar:{
  textAlignVertical: 'center',
  marginVertical: 10,

},
addbutton:{
backgroundColor: '#ffffff',
borderRadius: 50,
position: 'absolute',
left: 20,
bottom: 40,
justifyContent: "center",
alignItems: "center"
}
});