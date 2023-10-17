import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import vivo from "./assets/vivoy51-removebg-preview.png"

const gambar = () => {
  return (
    <ScrollView>
        <Text>Menampilkan Gambar</Text>
        <View>
            <Text>Sub judul</Text>
            <Image
             source={require("./assets/Mark_Kassen__Tony_Cárdenas_and_Chris_Evans__cropped_-removebg-preview.png")}
            style={{width:200,height:200}}
            />

        <Image
             source={{
                uri : 'https:/picsum.photos/300/300'
             }}
             style={{width:200,height:200}}
            />
        

            
            <Image
             source={vivo}
            style={{width:200,height:200}}
            />

        </View>

    </ScrollView>
  )
}

export default gambar
