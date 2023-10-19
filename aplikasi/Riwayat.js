import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is 0-based, so add 1
  const year = date.getFullYear();

  // Ensure day and month have leading zeros if they are single digits
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}-${formattedMonth}-${year}`;
}

const Riwayat = () => {

  const [dataRiwayat,setDataRiwayat] = useState([]);
  const getApiRiwayat = async()=>{
    const url = 'https://6530a4df6c756603295edef7.mockapi.io/rsds';
    let results = await fetch(url);
    results = await results.json();
    setDataRiwayat(results);
  }
  useEffect(()=>{
    getApiRiwayat()
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Riwayat Transaksi</Text>
      <FlatList
        data={dataRiwayat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionDate}>{ formatDate(item.tanggal)}</Text>
            <Text style={styles.transactionDescription}>{item.nama_pasien}</Text>
            <Text style={styles.transactionDescription}>{item.nama_poli}</Text>
            <Text style={styles.transactionAmount}>{item.no_antrian}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    fontSize: 20, 
    textAlign: 'center',
     padding: 10,
    fontWeight: 'bold',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  transactionDate: {
    fontSize: 16,
  },
  transactionDescription: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Riwayat;
