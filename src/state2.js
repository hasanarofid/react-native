import React, { useState } from 'react'
import { View,Text, Button } from 'react-native';

const state2 = () => {
    const [nama,SetNama] = useState('Lionel Messi');
    const [negara,SetNegara] = useState('Argentina');
    const [detail,SetDetail] = useState({umur : "35",klub : "Miami"});

    const goatAdalah = () =>{
        SetNama("Cristiano Ronaldo");
        SetNegara("Cristiano Ronaldo");
        SetDetail({umur : "38",klub : "Al-Nassr"});
    }

  return (
    <View>
        <Text>Belajar State Function</Text>
        <View>
            <Text>Goat Adalah : {nama}</Text>
            <Text>Negara Goat Adalah : {negara}</Text>

            <Text>Umur Goat Adalah : {detail.umur}</Text>

            <Text>Klub Goat Adalah : {detail.klub}</Text>

            <Button
                onPress={()=>goatAdalah()}
                title='Goat Adalah'
            />


        </View>
    </View>
  )
}

export default state2
