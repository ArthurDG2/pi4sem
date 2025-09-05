import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Habitta!</Text>
          <View style={styles.buttonContainer}>
            <Button mode='outlined' style={styles.button}>
              Início
            </Button>
            <Button mode='outlined' style={styles.button}>
              Imóveis
            </Button>
            <Button mode='outlined' style={styles.button}>
              Sobre
            </Button>
            <Button mode='outlined' style={styles.button}>
              Contato
            </Button>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',       // Texto e botões lado a lado
    alignItems: 'center',       // Alinha verticalmente ao centro
    justifyContent: 'flex-start',   // Centraliza horizontalmente
    flexWrap: 'wrap',           // Permite quebra de linha se necessário
    gap: 20,                    // Espaço entre texto e botões
  },
  title: {
    fontSize: 24,               // Tamanho do texto
    fontWeight: 'bold',         // Texto em negrito
  },
  buttonContainer: {
    flexDirection: 'row',       // Botões lado a lado
    flexWrap: 'wrap',           // Permite quebra de linha
    gap: 10,                    // Espaço entre os botões
  },
  button: {
    marginHorizontal: 2,        // Pequeno espaço horizontal entre botões
  }
});
