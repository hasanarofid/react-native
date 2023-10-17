import React from 'react'
import { Text, View } from 'react-native'

const Pemain =(props)=>{    
    return (
        <View>
            <Text>Goat adalah : {props.nama}</Text>
            <Text>Negara Goat adalah : {props.negara}</Text>
            <Text>Umur Goat adalah : {props.umur}</Text>
            <Text>Klub Goat adalah : {props.klub}</Text>
        </View>
    )
    

}

const prop2 = () => {
  return (
   <View>
        <Text>Belajar Props function </Text>
        <Pemain nama="Herman" negara="Senagal" umur="40" klub="Indo" />
        <Pemain nama="Dzumafo" negara="Kamerun" umur="40" klub="Indo" />
   </View>
  )
}

export default prop2
