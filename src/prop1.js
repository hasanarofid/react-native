import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

class Pemain extends Component{
    render(){
        return(
            <View>
                <Text>Nama : {this.props.nama}</Text>
                <Text>Alamat : {this.props.alamat}</Text>
                <Text>Telpon : {this.props.tlp}</Text>
            </View>
        )
    }
}

export default class prop1 extends Component {
  render() {
    return (
      <View>
        <Text> Belajar props clas </Text>
        <Pemain nama="Lionel Messsi" alamat="Argentina" tlp="487878" />
        <Pemain nama="Ronaldo" alamat="Portugal" tlp="87797" />
        <Pemain nama="Totti" alamat="Italia" tlp="78784" />

      </View>
    )
  }
}

const styles = StyleSheet.create({})
