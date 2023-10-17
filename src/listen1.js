import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Touchable, TouchableOpacity } from 'react-native'

function coba_alert(){
  alert('yessss tampilkan alert');
}

export default class listen1 extends Component {
    state = {
        Mobil : [
            {id : 1, name : "Toyota"},
            {id : 2, name : "Honda"},
            {id : 3, name : "Suzuki"},
            {id : 4, name : "Bmw"},
            {id : 5, name : "Mazda"},
        ]
    }
    klik = (Mobil) =>{
      alert('Tampilkan '+ Mobil)
    }
  render() {
    return (
      <View>
        <Text> Belajar Props Class </Text>
        {
          this.state.Mobil.map((item,index)=>(
            <TouchableOpacity onPress={()=>this.klik(item.name)}>
              <Text>{item.name}</Text>

            </TouchableOpacity>
          ))
        }
        <Button 
          title='Tampilkan alert'
          onPress={coba_alert}
        />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({})
