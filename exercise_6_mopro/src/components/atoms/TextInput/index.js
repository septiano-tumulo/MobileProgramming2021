import React from 'react'
import { StyleSheet, Text, View, TextInput as Input } from 'react-native'

const TextInput = ({label, placeholder}) => {
    return (
        <View>
    <Text style={styles.labelInput}>{label}</Text>
    <Input style={styles.input}placeholder={placeholder}/>
    <Text style={styles.labelInput}>Username</Text>
        </View>
    )
}

export default TextInput;

const styles = StyleSheet.create({
    labelInput: {
        fontSize: 14,
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#DED5D5',
        borderRadius: 10,
        paddingLeft: 15,
        paddingVertical: 15,
        marginTop: 5,
    },
})