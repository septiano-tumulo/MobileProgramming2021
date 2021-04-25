import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';

const App = () =>{
    return (
    <View style={styles.container}>
    <Text style={styles.title}>Registration</Text>
    <Gap height={40} />
    <TextInput label="Name" placeholder="Masukan nama lengkap anda"/>
    <Gap height={24} />
    <TextInput label="Username" placeholder="Masukan Username Anda"/>
    <Gap height={24} />
    <TextInput label="E-Mail" placeholder="Masukan email anda"/>
    <Gap height={24} />
    <TextInput label="Address" placeholder="Masukan alamat anda"/>
    <Gap height={24} />
    <TextInput label="Phone Number" placeholder="Masukan Nomor telepon anda"/>
    <Gap height={48} />
    <Button label="Register" />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 25,
    },
    title: {
        fontSize: 36,
        fontWeight: '500',
    },
    
});

export default App;