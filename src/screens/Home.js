import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios'

export default function Home({ navigation }) {
  const [city, setCity] = useState('')

  async function requestAPI() {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city, {
      params: {
        appid: 'SUA_KEY_AQUI',
        lang: 'pt_br',
        units: 'metric',
      }
    })

    setCity('')
    navigation.navigate('Weather', {
      data: response.data
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.homeImageView}>
        <Image source={require('../../assets/cloud.png')} style={styles.homeImage}/>
      </View>
      <View style={styles.homeInfoView}>
        <Text style={styles.mainInfo}>Bem-vindo ao Weather Show App</Text>
        <TextInput style={styles.inputInfo} placeholder="Insira o nome da cidade" placeholderTextColor='#eee' value={city} onChangeText={(cidade) => setCity(cidade)}/>
        <TouchableOpacity style={styles.buttonInfo} onPress={requestAPI}>
          <Text style={styles.buttonInfoText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#457B9D',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  homeImageView: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeImage: {
    height: 120,
    width: 120,
  },
  homeInfoView: {
    height: '40%',
    width: '100%',
    marginTop: '10%',
    alignItems: 'center'
  },
  mainInfo: {
    color: '#fff',
    fontSize: 18,
  },
  inputInfo: {
    height: 43,
    width: '70%',
    color: '#fff',
    fontSize: 14,
    borderBottomWidth: 2,
    borderColor: '#fff',
    marginTop: 10,
  },
  buttonInfo: {
    height: 50,
    width: '70%',
    backgroundColor: '#A8DADC',
    marginTop: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInfoText: {
    color: '#1D3557',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
