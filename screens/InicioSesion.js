import { View, Button, TextInput, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react'
export default function InicioSesion(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                props.navigation.navigate('BottomTab', { userRol: user.email });
            }
        })
        return unsubscribe;
    }, [])


    const handleLogin = async () => {
        try {
            const Credenciales = await signInWithEmailAndPassword(auth, email, password)
            if (Credenciales) {
                props.navigation.navigate('BottomTab', { email });
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    const regi = () => {
        try {
            props.navigation.navigate('Registro')
        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        <ScrollView>
            <View >
                <TextInput placeholder="Correo Electronico"
                    onChangeText={(value) => setEmail(value)} />
            </View>
            <View >
                <TextInput placeholder="Contraseña de usuario"
                    onChangeText={(value) => setPassword(value)}
                    secureTextEntry={true} />
            </View>
            <View>
                <Button title="Iniciar Sesión" onPress={() => handleLogin()} />
            </View>

            <TouchableOpacity onPress={regi}>
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>¿No tienes cuenta?Registrate</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

export const Roles = () => {
    const auth = getAuth();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                props.navigation.navigate('BottomTab', { userRol: user.email });
                console.log(user.email);
                return user.email;
            }
        })
    }, [])
};