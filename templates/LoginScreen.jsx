import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert } from 'react-native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (newUsername) => {
        setUsername(newUsername);
    };

    const handlePasswordChange = (newPassword) => {
        setPassword(newPassword);
    };

    const handleLogin = () => {
        // Realiza aquí la comparación con la base de datos o autenticación.
        if (username === 'usuario' && password === 'contraseña') {
            // Inicio de sesión exitoso
            Alert.alert('Inicio de Sesión Exitoso', 'Bienvenido, usuario.');
        } else {
            // Inicio de sesión fallido
            Alert.alert('Inicio de Sesión Fallido', 'Nombre de usuario o contraseña incorrectos.');
        }
    };

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                placeholder='Nombre de Usuario'
                onChangeText={handleUsernameChange}
                value={username}
                keyboardType='default'
            />

            <TextInput
                style={styles.input}
                placeholder='Contraseña'
                onChangeText={handlePasswordChange}
                value={password}
                keyboardType='default'
                secureTextEntry={true}
            />

            <Button
                title='Iniciar Sesión'
                onPress={handleLogin}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default LoginScreen;
