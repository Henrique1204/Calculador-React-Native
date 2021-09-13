import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';

const estilos = StyleSheet.create({
    botao: {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        borderWidth: 1,
        borderColor: '#888',
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: '#F0F0F0'
    },
    operacao: {
        color: '#FFF',
        backgroundColor: '#FA8231'
    },
    botaoDuplo: {
        width: Dimensions.get('window').width / 2,
    },
    botaoTriplo: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
});

const Botao = ({ onPress, texto, estilo }) => {
    return (
        <TouchableHighlight onPress={() => onPress(texto)}>
            <Text style={{ ...estilos.botao, ...estilos[estilo] }}>{texto}</Text>
        </TouchableHighlight>
    );
};

export default Botao;
