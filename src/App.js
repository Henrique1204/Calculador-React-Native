import React, { useState, useCallback } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import Botao from './componentes/Botao';
import Display from './componentes/Display';

const estadoInicial = {
  valor: '0',
  limparDisplay: false,
  operacao: null,
  valores: [0, 0],
  valorAtual: 0
};

const App = () => {
  const [valor, setValor] = useState(estadoInicial.valor);
  const [limparDisplay, setLimparDisplay] = useState(estadoInicial.limparDisplay);
  const [operacao, setOperacao] = useState(estadoInicial.operacao);
  const [valores, setValores] = useState(estadoInicial.valores);
  const [valorAtual, setValorAtual] = useState(estadoInicial.valorAtual);

  const addDigito = useCallback((digito) => {
    if (digito === '.' && valor.includes('.')) return;

    const valorDisplay = valor === '0' || limparDisplay ? '' + digito : valor + digito;
    setValor(valorDisplay);

    if (digito !== '.') {
      const valoresCopia = [...valores];
      valoresCopia[valorAtual] = parseFloat(valorDisplay);

      setValores(valoresCopia);
    }
  }, [valor, limparDisplay, valores, valorAtual]);

  const limparDigitos = () => {
    setValor(estadoInicial.valor);
    setLimparDisplay(estadoInicial.limparDisplay);
    setOperacao(estadoInicial.operacao);
    setValores(estadoInicial.valores);
    setValorAtual(estadoInicial.valorAtual);
  };

  const definirOperacao = useCallback((op) => {
    if (valorAtual === 0) {
      setOperacao(op);
      setLimparDisplay(true);
      setValorAtual(1);
    } else {
      const equals = op === '=';
      const valoresCopia = [...valores];

      try {
        valoresCopia[0] = eval(`${valoresCopia[0]} ${operacao} ${valoresCopia[1]}`);
      } catch(e) {
        console.warn(`${valoresCopia[0]} ${operecao} ${valoresCopia[1]}`);
        valoresCopia[0] = valores[0];
      }

      valoresCopia[1] = 0;

      setValor(valoresCopia[0]);
      setOperacao(equals ? null : op);
      setValorAtual(equals ? 0 : 1);
      setLimparDisplay(true);
      setValores(valoresCopia);
    }
  }, [valorAtual, valores]);

  return (
    <SafeAreaView style={estilos.App}>
      <Display valor={valor} />

      <View style={estilos.botoes}>
        <Botao texto='AC' estilo='botaoTriplo' onPress={limparDigitos} />
        <Botao texto='/' estilo='operacao' onPress={definirOperacao} />
        <Botao texto='7' onPress={addDigito} />
        <Botao texto='8' onPress={addDigito} />
        <Botao texto='9' onPress={addDigito} />
        <Botao texto='*' estilo='operacao' onPress={definirOperacao} />
        <Botao texto='4' onPress={addDigito} />
        <Botao texto='5' onPress={addDigito} />
        <Botao texto='6' onPress={addDigito} />
        <Botao texto='-' estilo='operacao' onPress={definirOperacao} />
        <Botao texto='1' onPress={addDigito} />
        <Botao texto='2' onPress={addDigito} />
        <Botao texto='3' onPress={addDigito} />
        <Botao texto='+' estilo='operacao' onPress={definirOperacao} />
        <Botao texto='0' estilo='botaoDuplo' onPress={addDigito} />
        <Botao texto='.' onPress={addDigito} />
        <Botao texto='=' estilo='operacao' onPress={definirOperacao} />
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
