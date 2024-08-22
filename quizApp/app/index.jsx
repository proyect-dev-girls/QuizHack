import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Animated, Easing, Image } from 'react-native';
import { Text, Appbar, Button } from "react-native-paper";
import { Link } from "expo-router";



const Index = () => {
  // Estado y animación para cambiar el color de fondo
  const [bgColor, setBgColor] = useState(new Animated.Value(0));
  const floatValue = new Animated.Value(0); // Animación de flotación

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bgColor, {
          toValue: 1,
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(bgColor, {
          toValue: 0,
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
      ])
    ).start();

    // Animación de flotación
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatValue, {
          toValue: -10,  // Subir el botón y la imagen
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(floatValue, {
          toValue: 0,  // Bajar el botón y la imagen
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();

  }, [bgColor, floatValue]);

  const backgroundColor = bgColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#f48ca4', '#a4cc64'],
  });

  return (
    <>
      <StatusBar style="light" />
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="Quiz App" titleStyle={styles.title} />
        <Link href="/Register">
          <Text style={styles.buttonText}>registro</Text>
          <Appbar.Action icon="account-plus" color="#fff" />
        </Link>
        <Appbar.Action icon="heart" onPress={() => console.log('Le diste un corazón!')} color="#fff" />
      </Appbar.Header>

      <Animated.View style={[styles.container, { backgroundColor }]}>
        <Animated.View style={[styles.floatingContainer, { transform: [{ translateY: floatValue }] }]}>
        <Image
        source={require('../assets/images/nene.png')} // Asegúrate de usar la ruta correcta
        style={styles.image}
      />
       
          <Link href="/BienvenidaGames"
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            ¡Juega ya!
          </Link>
         
        </Animated.View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#f48ca4',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100, // Ajusta el tamaño de la imagen aquí
    height: 100, // Ajusta el tamaño de la imagen aquí
    marginRight: 10, // Espacio entre la imagen y el botón
  },
  button: {
    backgroundColor: '#a4cc64',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Index;
