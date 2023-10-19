import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// News component
const News = ({ title, description, image,tanggal, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.newsContainer}>
        <Image source={{uri : image}} style={styles.newsImage} />
        <View style={styles.newsTextContainer}>
          <Text style={styles.newsTitle}>{title}</Text>
          <Text style={styles.newsDescription}>{description}</Text>
          <Text style={styles.newsDescription}>{tanggal}</Text>

        </View>
      </View>
      
    </TouchableOpacity>
  );
};
const Stack = createNativeStackNavigator();
// Main component
const Berita = () => {
  const navigation = useNavigation();

  const [newsData,setData] = useState([]);
  const getApiBerita = async()=>{
    const url = 'https://6530a4df6c756603295edef7.mockapi.io/berita';
    let results = await fetch(url);
    results = await results.json();
    setData(results);
  }
  useEffect(()=>{
    getApiBerita()
  },[])


  return (
    <ScrollView>
      <Text style={{ fontSize: 20, textAlign: 'center', padding: 10, fontWeight: 'bold' }}>
        Berita Terkini
      </Text>
      {newsData.map((news, index) => (
        <News
          key={index}
          title={news.judul}
          description={news.content}
          tanggal={news.tanggal}
          image={news.foto}
          onPress={() => {
            navigation.navigate('Details', {
              itemId: news.id,
              otherParam: 'Detail Berita',
            });
          }}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  newsDescription: {
    fontSize: 14,
  },
});

export default Berita;
