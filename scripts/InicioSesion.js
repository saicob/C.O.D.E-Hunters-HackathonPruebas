import { View, Button, TextInput, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { getFirestore, collection, addDoc, doc, getDocs, query, setDoc, where, orderBy, startAt, endAt } from 'firebase/firestore'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import appfirebase from '../database/firebase';
import { useEffect, useState } from 'react';
//import Home from './scripts/Home';



export default function InicioSesion(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //verifica si el usuario ya esta logeado y lo redirige a home
    useEffect(() => {
        const auth = getAuth(appfirebase)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user)
                props.navigation.navigate('Home');
        })

        return unsubscribe;
    },[])

    const handleLogin = async () => {
        const auth = getAuth(appfirebase);

        try {
            const aña = await signInWithEmailAndPassword(auth, email, password)
            console.log(aña);
            
            if (aña) {
                reset();
                props.navigation.navigate("Home");
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    const regi = async () => {
        try {
            
            props.navigation.navigate('Registro')
        }
        catch {
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
                    secureTextEntry={ true} />
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
