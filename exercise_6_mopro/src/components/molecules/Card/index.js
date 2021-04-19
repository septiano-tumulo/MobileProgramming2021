import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = ({email, first_name, last_name}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.email}>email: {email}</Text>
      <Text style={styles.first_name}>first_name: {first_name}</Text>
      <Text style={styles.last_name}>last_name: {last_name}</Text>
    </View>
  );
};

export default Card;


const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    alignItems: 'flex-start',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 25,
    marginVertical:25,
    flexDirection: 'row',
    
  },
  email: {
    fontSize: 14,
    fontWeight: '700',
  },
  first_name: {
    fontSize: 14,
    color: 'grey',
    marginTop: 10,
  },
  last_name: {
    fontSize: 14,
    color: 'grey',
    marginTop: 14,
  },
});