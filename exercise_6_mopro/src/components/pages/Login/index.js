import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';

const App = () =>{
    return (
    <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <Gap height={40} />
    <TextInput label="Email" placeholder="Masukan Email Anda"/>
    <Gap height={24} />
    <TextInput label="First_Name" placeholder="Masukan Masukan Nama Depan"/>
    <Gap height={24} />
    <TextInput label="Last_Name" placeholder="Masukan Nama Belakang"/>
    <Gap height={24} />
    <Button label="Login" />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical:25,
    },
    title: {
        fontSize: 36,
        fontWeight: '700',
    },
});
export default App;