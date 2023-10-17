import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class state1 extends Component {
    state = {
        nama : 'Lionel Messi',
        negara : 'Argentina',
        detail : {umur : '35',klub : 'Miami'}
    }
    goatAdalah = () => {
        this.setState({nama: 'Cristiano Ronaldo'});
        this.setState({negara: 'Portugal'});
        this.setState({detail: { umur : '38',klub : 'Al-Bassr' }});
    }
  render() {
    return (
      <View>
        <Text> Belajar State Class </Text>
        <View>
            <Text >Goat adalah : {this.state.nama}</Text>
            <Text >Negara Goat adalah : {this.state.negara}</Text>
            <Text >Umur : {this.state.detail.umur}</Text>
            <Text >Klub : {this.state.detail.klub}</Text>
            <Button
                onPress={()=>this.goatAdalah()}
                title='Goat Adalah'
            />
            

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
