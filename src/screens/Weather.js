import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import axios from 'axios'

export default function Weather({ route }) {
  const { data } = route.params

  const [city, setCity] = useState('')
  const [datas, setDatas] = useState([data])

  async function requestAPI() {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city, {
      params: {
        appid: '9422a4dbd1cc9b3a0e4d8412b8b2b5e6',
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
    <View>
      <View>
        <TextInput placeholder="Insira o nome da cidade" value={city} onChangeText={(cidade) => setCity(cidade)}/>
        <TouchableOpacity onPress={requestAPI}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>

      { datas.map((element, index) => {
        return (
          <View key={index}>
            <Text>{ element.main.temp + '° em ' + element.name }</Text>
            <Text>{ element.weather[0].description }</Text>
            <Text>{ new Date(element.sys.sunrise * 1000).toLocaleTimeString() }</Text>
            <Text>{ new Date(element.sys.sunset * 1000).toLocaleTimeString() }</Text>
          </View>
        )
      }) }

    </View>
  )
}