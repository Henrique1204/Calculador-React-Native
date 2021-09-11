import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const estilo = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        alignItems: 'flex-end',
    },
    valorDisplay: {
        fontSize: 60,
        color: '#FFF'
    }
});

const Display = ({ valor }) => {
    return (
        <View style={estilo.display}>
            <Text style={estilo.valorDisplay} numberOfLines={1}>{valor}</Text>
        </View>
    );
};

export default Display;
