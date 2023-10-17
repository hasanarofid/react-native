import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class layouting extends Component {
  render() {
    return (
      <View>
        <Text style={styles.judul}> Belajr layouting </Text>
        <View style={styles.atas}></View>

        <Text> Macam - Macam Lampu Vertikal </Text>
        <View style={styles.flek}>
            <View style={styles.lampumerah} />
            <View style={styles.lampuKuning} />
            <View style={styles.lampuHijau} />
        </View>

        <Text> Macam - Macam Lampu Horizontal </Text>
        <View style={styles.flek2}>
            <View style={styles.lampumerah} />
            <View style={styles.lampuKuning} />
            <View style={styles.lampuHijau} />
        </View>

        <Text> Macam - Macam Lampu Justify </Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
            <View style={styles.lampumerah} />
            <View style={styles.lampuKuning} />
            <View style={styles.lampuHijau} />
        </View>

        <Text> Macam - Macam Lampu Justify </Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
            <View style={styles.lampumerah} />
            <View style={styles.lampuKuning} />
            <View style={styles.lampuHijau} />
        </View>


      </View>

      
    )
  }
}

const styles = StyleSheet.create({
    atas :{
        padding : 15
    },
    judul : {
        fontSize : 20,
        alignContent : 'center',
        borderColor:'black',
        justifyContent:'center'
    },
lampumerah : {
    width : 30,
    height:10,
    backgroundColor:'red',
},
lampuKuning : {
    width : 30,
    height : 20,
    backgroundColor : 'yellow'
},
lampuHijau : {
    width : 30,
    height : 20,
    backgroundColor : 'green'
},
flek : { flexDirection:'row'},
flek2 : { flexDirection:'column'}



})
