import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput,Button } from 'react-native'

export default class hitungPajak extends Component {
    state = {
        nama : '',
        divisi : '',
        gaji : '',
        gajisetahun : '',
        hitung : '',
        tarif : '',
        jumlah : '',



    }

    hitungPtkp = () => {
    
      let gaji=this.state.gaji;
      let hitung = gaji*12;
      var persen = '';
      
    if(gaji <= '4500000') {
      persen = 1;
    }else if(gaji >= '4600000' && gaji <= '5000000'){
      persen = 2;
    }else if(gaji >= '5100000' && gaji <= '6000000'){
      persen = 3;
    }else if(gaji >= '6100000'){
      persen = 5;
    }  
    let total = gaji*(persen/100);

        this.setState({gajisetahun: hitung});
        this.setState({tarif: persen});
        this.setState({jumlah: total});

        // this.setState({detail: { umur : '38',klub : 'Al-Bassr' }});
    }
  render() {
    return (
      <View>
        <View  style={{flexDirection:'row',justifyContent:'center'}}>
         <Text style={styles.judul}> Aplikasi Hitung Pajak </Text>

        </View>

        <TextInput
        style={styles.input}
        placeholder='Masukan nama '
        onChangeText={(nama) => this.setState({nama})}
    value={this.state.nama}
      />

<TextInput
        style={styles.input}
        placeholder='Masukan Divisi'
        onChangeText={(divisi) => this.setState({divisi})}
        value={this.state.divisi} 
      />

      
<TextInput
        style={styles.input}
        placeholder='Masukan Gaji Perbulan'
        onChangeText={(gaji) => this.setState({gaji})}
        value={this.state.gaji} 
      />
        <Button
                onPress={()=>this.hitungPtkp()}
                title='Hitung PTKP'
            />
        <View>
        <View  style={{flexDirection:'row',justifyContent:'center'}}>
         <Text style={styles.judul}> Hasil Perhitungan </Text>

        </View>
        <View>
            <Text  style={styles.label}>Nama : {this.state.nama} </Text>
            <Text style={styles.label}>Divisi :{this.state.divisi}</Text>
            <Text style={styles.label}>Gaji per Bulan :{this.state.gaji}</Text>
            <Text style={styles.label}>Gaji Setahun :{this.state.gajisetahun}</Text>
            <Text style={styles.label}>Tarif PTKP :{this.state.tarif}%</Text>
            <Text style={styles.label}>Tarif Bayar PTKP :{this.state.jumlah}</Text>




        </View>
        </View>
      </View>


    )
  }
}

const styles = StyleSheet.create({
    judul :{
      fontSize:20,
        fontWeight: 'bold',
        marginBottom:5,
        justifyContent:'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      label: {
        fontSize:15,
        margin:5,
      }
})

