import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import Botao from './componentes/Botao';
import Display from './componentes/Display';

const App = () => {
  const [valor, setValor] = useState(0);

  return (
    <SafeAreaView style={estilos.App}>
      <Display valor={valor} />

      <View style={estilos.botoes}>
        <Botao texto='AC' />
        <Botao texto='/' />
        <Botao texto='7' />
        <Botao texto='8' />
        <Botao texto='9' />
        <Botao texto='*' />
        <Botao texto='4' />
        <Botao texto='5' />
        <Botao texto='6' />
        <Botao texto='-' />
        <Botao texto='1' />
        <Botao texto='2' />
        <Botao texto='3' />
        <Botao texto='+' />
        <Botao texto='0' />
        <Botao texto='.' />
        <Botao texto='=' />
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
