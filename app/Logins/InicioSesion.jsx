import React, { useState } from "react";
import { view, TextInput, button, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';


export default function LoginScreen() {
    const router = useRouter()
    const [ name, setName] = useState('');
    const [ departamento, setDepartamento ] = useState('');
}