import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';

const estilos = StyleSheet.create({
    button: {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        borderWidth: 1,
        borderColor: '#888',
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: '#F0F0F0'
    }
});

const Botao = ({ onPress, texto }) => {
    return (
        <TouchableHighlight onPress={onPress}>
            <Text style={estilos.button}>{texto}</Text>
        </TouchableHighlight>
    );
};

export default Botao;
