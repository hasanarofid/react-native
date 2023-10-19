import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const poliData = [
  { id: '1', name: 'Poli Gigi' },
  { id: '2', name: 'Poli Penyakit Dalam' },
  { id: '3', name: 'Poli Ortopedi' },
  { id: '4', name: 'Poli Urologi' },
  { id: '5', name: 'Poli Umum' },

  // Tambahkan poli lainnya sesuai kebutuhan
];
const Stack = createNativeStackNavigator();
const PoliList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Daftar Poli</Text>
      <FlatList
        data={poliData}
        keyExtractor={(item) => item.id}
        horizontal={true} // Set horizontal to true
        contentContainerStyle={styles.poliListContainer} // Add a container style
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.poliButton}
            onPress={() => {
              navigation.navigate('DetailPoli', {
                itemId: item.name,
                otherParam: 'Daftar Poli',
              });
            }}
          >
            <Text style={styles.poliButtonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    flex: 1,
    textAlign: 'center',
  },
  poliListContainer: {
    alignItems: 'center', // Center the list horizontally
  },
  poliButton: {
    backgroundColor: 'green',
    padding: 10,
    marginHorizontal: 10, // Add some horizontal margin between buttons
    borderRadius: 5,
  },
  poliButtonText: {
    color: 'white',
    fontSize: 16,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PoliList;
