import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <ImageBackground 
        source={require('./assets/livingroom.jpeg')} // Altere para o caminho da sua imagem
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Habitta</Text>
            <Text style={styles.text}>Início</Text>
            <Text style={styles.text}>Imóveis</Text>
            <Text style={styles.text}>Sobre</Text>
            <Text style={styles.text}>Contato</Text>
            <Button 
              mode="contained" 
              style={styles.signInButton}
              labelStyle={styles.signInButtonText}
              onPress={() => console.log('Sign in pressed')}
            >
              Sign in
            </Button>
          </View>

          {/* Texto do apartamento - centralizado no meio */}
          <View style={styles.apartmentInfoContainer}>
            <View style={styles.infoLineContainer}>
              <Text style={styles.apartmentText}>3 Quartos | 4 Banheiros | 250m²</Text>
            </View>
            <View style={styles.infoLineContainer}>
              <Text style={styles.apartmentText}>Apartamento de Luxo em NY</Text>
            </View>
            <View style={styles.infoLineContainer}>
              <Text style={styles.apartmentText}>R$ 100.000.000</Text>
            </View>
            
            {/* Botão Ver mais logo abaixo do texto */}
            <View style={styles.seeMoreButtonContainer}>
              <Button 
                mode="contained" 
                style={styles.seeMoreButton}
                labelStyle={styles.seeMoreButtonText}
                onPress={() => console.log('Veja mais pressed')}
              >
                Ver mais
              </Button>
            </View>
          </View>

          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Fundo semi-transparente escuro
    alignItems: 'center',
    justifyContent: 'space-between', // Distribui o espaço entre os elementos
    paddingTop: 60, // Espaço do topo
    paddingBottom: 40, // Espaço da base
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro semi-transparente
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Texto em cor branca
    textShadowColor: 'rgba(0, 0, 0, 0.8)', // Sombra escura para melhor contraste
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  signInButton: {
    backgroundColor: '#ffffff', // Fundo branco
    marginLeft: 10, // Espaço à esquerda do botão
  },
  signInButtonText: {
    color: '#000000', // Texto preto para contrastar com fundo branco
    fontWeight: 'bold',
    fontSize: 18,
  },
  apartmentInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Ocupa o espaço disponível no meio
  },
  infoLineContainer: {
    // Container transparente - só do tamanho do texto
    marginBottom: 10, // Menor espaçamento entre as linhas
  },
  apartmentText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Todo texto em branco
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)', // Sombra para melhor contraste
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  seeMoreButtonContainer: {
    marginTop: 20, // Espaço menor acima do botão (mais próximo do texto)
    alignItems: 'center',
  },
  seeMoreButton: {
    backgroundColor: '#ffffff', // Fundo branco
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  seeMoreButtonText: {
    color: '#000000', // Texto preto
    fontWeight: 'bold',
    fontSize: 18,
  }
});