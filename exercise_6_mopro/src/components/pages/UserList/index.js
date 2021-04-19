import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Card from '../../molecules/Card';
import Axios from 'axios';
import Button from '../../atoms/Button';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Axios
    Axios
    .get('http://10.0.2.2:3004/users')
    .then((res) => setUsers(res.data));
  }, [users]);

const handleSubmit = () => {
  const data = {
        email: 's21910222@student.unklab.ac.id',
        first_name: 'Septiano',
        last_name: 'Tumulo',
  };
  Axios.post('http://10.02.2:3004/users', data)
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users List</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Button label="Save" onSubmit={handleSubmit}/>
        {users.map(item => 
          <Card
          key={item.id}
          fullName={`${item.fist_name} ${item.last_name}`}
          email={item.email}
          imageUrl={item.avatar}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
  card: {
    marginTop: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 10,
  },
});