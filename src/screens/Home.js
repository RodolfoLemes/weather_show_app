import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios'

export default function Home({ navigation }) {
  const [city, setCity] = useState('')

  async function requestAPI() {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city, {
      params: {
        appid: '9422a4dbd1cc9b3a0e4d8412b8b2b5e6',
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
      <Text>Bem-vindo ao Weather Show App</Text>
      <View>
        <TextInput placeholder="Insira o nome da cidade" value={city} onChangeText={(cidade) => setCity(cidade)}/>
        <TouchableOpacity onPress={requestAPI}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
