import { Button, Text, View } from 'react-native'
import React, { useState } from 'react'

const Konter = () =>{
    const [number,setNumber] = useState(0);
    return(
        <View>
            <Text>{number}</Text>
            <Button 
                onPress={()=>setNumber(number+1)}
                title='Tambah (+)'
            />
        </View>
    )
    
}

const Dinamis = () =>{
   
    return(
        <View>
            <Text>Belahar State 3</Text>
            <View></View>
            <Konter/>
        </View>
    )
    
}

export default  Dinamis