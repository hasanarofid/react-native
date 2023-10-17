import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default class inputExample extends Component {
    state = {
        nama : ''
    }
  render() {
    return (
      <View>
         <Text style={styles.judul}> Aplikasi Hitung Pajak </Text>
        <View style={{ borderBlockEndColor:'red' }}></View>
        <TextInput 
        placeholder='Masukan nama anda'
        keyboardType='default'
        onChangeText={(text)=>this.setState({nama : text})}
        />
        <Text>Halo {this.state.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    atas :{
        padding : 15
    },
})
