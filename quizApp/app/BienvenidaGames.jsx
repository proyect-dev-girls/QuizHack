import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Image } from "react-native";
import { Text, Appbar, Button } from "react-native-paper";
import { Link } from 'expo-router';

const BienvenidaGames = () => {
  return (
    <>
      <View style={styles.container}>
        <Appbar.Content title="Bienvenido a Quiz" titleStyle={styles.title} />
        
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/nene.png')}
            style={styles.image}
          />
          <Text style={styles.speechBubble}>
            ¡Hola soy dudas! ¿Listo para crear un quiz?
          </Text>
        </View>

        <Button
          mode="contained"
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          <Link href="/crear-quiz" style={styles.linkText}>
            ¡Empezá a crear tus quiz!
          </Link>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  speechBubble: {
    maxWidth: 200,
    backgroundColor: '#f48ca4',
    padding: 10,
    borderRadius: 15,
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#a4cc64',
    borderRadius: 25,
  },
  buttonContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  linkText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default BienvenidaGames;
