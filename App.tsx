import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <ImageBackground 
        source={require('./assets/livingroom.jpeg')}
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
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingTop: 60, 
    paddingBottom: 40, 
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', 
    textShadowColor: 'rgba(0, 0, 0, 0.8)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  signInButton: {
    backgroundColor: '#ffffff', 
    marginLeft: 10, 
  },
  signInButtonText: {
    color: '#000000', 
    fontWeight: 'bold',
    fontSize: 18,
  },
  apartmentInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  infoLineContainer: {
    marginBottom: 10, 
  },
  apartmentText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', 
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  seeMoreButtonContainer: {
    marginTop: 20, 
    alignItems: 'center',
  },
  seeMoreButton: {
    backgroundColor: '#ffffff', 
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  seeMoreButtonText: {
    color: '#000000', 
    fontWeight: 'bold',
    fontSize: 18,
  }
});