import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import Botao from './componentes/Botao';
import Display from './componentes/Display';

const App = () => {
  const [valor, setValor] = useState('0');

  const addDigito = (digito) => setValor((valor) => valor === '0' ? digito : valor + digito);
  const limparDigitos = () => setValor('0');
  const setOperacao = (operecao) => console.warn(operecao);

  return (
    <SafeAreaView style={estilos.App}>
      <Display valor={valor} />

      <View style={estilos.botoes}>
        <Botao texto='AC' estilo='botaoTriplo' onPress={limparDigitos} />
        <Botao texto='/' estilo='operacao' onPress={setOperacao} />
        <Botao texto='7' onPress={addDigito} />
        <Botao texto='8' onPress={addDigito} />
        <Botao texto='9' onPress={addDigito} />
        <Botao texto='*' estilo='operacao' onPress={setOperacao} />
        <Botao texto='4' onPress={addDigito} />
        <Botao texto='5' onPress={addDigito} />
        <Botao texto='6' onPress={addDigito} />
        <Botao texto='-' estilo='operacao' onPress={setOperacao} />
        <Botao texto='1' onPress={addDigito} />
        <Botao texto='2' onPress={addDigito} />
        <Botao texto='3' onPress={addDigito} />
        <Botao texto='+' estilo='operacao' onPress={setOperacao} />
        <Botao texto='0' estilo='botaoDuplo' onPress={addDigito} />
        <Botao texto='.' onPress={addDigito} />
        <Botao texto='=' estilo='operacao' onPress={setOperacao} />
      </View>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center', 
    backgroundColor: '#F5FCFF'
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default App;
