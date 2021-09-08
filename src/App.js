import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={estilos.App}>
      <Text style={estilos.Text}>Testando</Text>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  App: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 24,
    textAlign: 'center'
  }
});

export default App;
