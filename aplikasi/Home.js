import React, { useState, useEffect } from 'react';
import {ScrollView,Image, Button, View, Text,StyleSheet  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Header';
import Slider from './Slider';
import Berita from './Berita';
import ListPoli from './ListPoli';
import Riwayat from './Riwayat';





function HomeScreen({ navigation }) {
  return (
    <ScrollView>
    <Slider />
    <Berita />
    <ListPoli />
    <Riwayat />
  </ScrollView>
  );
}

function DetailBerita({ navigation, route }) {
    const { itemId, otherParam } = route.params;
    const [detail,setData] = useState([]);
    const getApiBerita = async()=>{
      const url = 'https://6530a4df6c756603295edef7.mockapi.io/berita/'+itemId;
      let results = await fetch(url);
      results = await results.json();
      setData(results);
    }
    useEffect(()=>{
      getApiBerita()
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.newsContainer}>
        <Image source={{uri : detail.foto}} style={styles.newsImage} />
        <View style={styles.newsTextContainer}>
          <Text style={styles.newsTitle}>{detail.judul}</Text>
          <Text style={styles.newsDescription}>{detail.content}</Text>
          <Text style={styles.newsDescription}>{detail.tanggal}</Text>

        </View>
      </View>
      
        <Button
          title="Halaman depan"
          onPress={() =>
            navigation.navigate('Home')
          }
        />
      </View>
    );
  }

  // detail poli
  function DetailPoli({ navigation, route }){
    const { itemId, otherParam } = route.params;
    console.warn(itemId);
  }

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <NavigationContainer>
         <Header />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailBerita} />
        <Stack.Screen name="DetailPoli" component={DetailPoli} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    scrollViewContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16, // Add padding for spacing
      },
      newsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      newsImage: {
        width: 100,
        height: 100,
        marginRight: 10,
      },
      newsTextContainer: {
        flex: 1,
      },
      newsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      newsDescription: {
        fontSize: 16,
      },
      newsDate: {
        fontSize: 14,
        color: 'gray',
        marginTop: 5, // Add margin to separate from description
      },
      button: {
        marginTop: 20, // Add margin to separate from the news details
      },
  });
export default Home;
