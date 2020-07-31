import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

import axios from 'axios'

export default function Weather({ route }) {
  const { data } = route.params

  const [city, setCity] = useState('')
  const [datas, setDatas] = useState([data])

  async function requestAPI() {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city, {
      params: {
        appid: 'SUA_KEY_AQUI',
        lang: 'pt_br',
        units: 'metric',
      }
    })

    setDatas([
      ...datas,
      response.data
    ])
    setCity('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput style={styles.inputInfo} placeholder="Insira o nome da cidade" placeholderTextColor='#eee' value={city} onChangeText={(cidade) => setCity(cidade)}/>
        <TouchableOpacity style={styles.buttonInfo} onPress={requestAPI}>
          <Text style={styles.buttonInfoText}>Enviar</Text>
        </TouchableOpacity>
      </View>

      { datas.map((element, index) => {
        return (
          <View key={index} style={styles.cardView}>
            <View style={styles.cardTemperatureView}>
              <Text style={styles.cardTemperature}>{ element.main.temp + '°\n' + element.name }</Text>
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardInfoText}>{ element.weather[0].description }</Text>
              <Text style={styles.cardInfoText}>{ new Date(element.sys.sunrise * 1000).toLocaleTimeString() }</Text>
              <Text style={styles.cardInfoText}>{ new Date(element.sys.sunset * 1000).toLocaleTimeString() }</Text>
            </View>
          </View>
        )
      }) }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#457B9D',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  inputView: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardView: {
    flexDirection: 'row',
    height: 200,
    width: '80%',
    backgroundColor: '#aaa',
    marginTop: 30,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#457B9D',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  cardTemperature: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center'
  },
  cardTemperatureView: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardInfo: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardInfoText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
})
