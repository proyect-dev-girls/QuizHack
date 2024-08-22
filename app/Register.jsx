import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text, Title} from "react-native-paper";


const Register =()=>  {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [department, setDepartment] = useState('');
  
    const handleRegister = async () => {
      if (!username || !age || !department) {
        alert('Por favor, completa todos los campos');
        return;
      }
  
      if (isNaN(age) || age <= 0) {
        alert('Por favor, ingresa una edad válida');
        return;
      }
  
      const userData = {
        username,
        age,
        department,
      };
  
      try {
        const response = await fetch('https://tuapi.com/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          alert('Registro exitoso');
        } else {
          alert(`Error en el registro: ${data.message}`);
        }
      } catch (error) {
        alert(`Error en el registro: ${error.message}`);
      }
    };
  
    return (
      <View style={styles.container}>
        <Title style={styles.title}>Registro</Title>
  
        <TextInput
          label="Nombre de Usuario"
          value={username}
          onChangeText={setUsername}
          mode="outlined"
          style={styles.input}
        />
  
        <TextInput
          label="Edad"
          value={age}
          onChangeText={setAge}
          mode="outlined"
          keyboardType="numeric"
          style={styles.input}
        />
  
        <TextInput
          label="Departamento"
          value={department}
          onChangeText={setDepartment}
          mode="outlined"
          style={styles.input}
        />
  
        <Button
          mode="contained"
          onPress={handleRegister}
          style={styles.button}
          contentStyle={styles.buttonContent}
        >
          Registrar
        </Button>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f0f0f0',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      marginBottom: 15,
    },
    button: {
      marginTop: 20,
    },
    buttonContent: {
      paddingVertical: 8,
    },
  });

  
  export default Register;   
