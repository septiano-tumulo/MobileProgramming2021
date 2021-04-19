import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

const index = ({label}) => {
    return (
        <TouchableOpacity style={styles.button}>
        <Text style={styles.labelButton}>{label}</Text>
        </TouchableOpacity>
    )
}

export default index

const styles = StyleSheet.create({
    button: {

        backgroundColor: '#C238CE',
        paddingVertical: 15,
        borderRadius: 20,
    },
    labelButton: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: '500',
    }
});