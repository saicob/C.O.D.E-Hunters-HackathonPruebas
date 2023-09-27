import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import '@react-navigation/elements'
import CreateUsers from "./CreateUsers";
import { getAuth, signOut } from 'firebase/auth';
import { StyleSheet, TouchableOpacity, View, Animated, Text } from "react-native";
import { Roles } from './InicioSesion';

const Stack = createNativeStackNavigator();
const drawer = createDrawerNavigator();
const FloatingButton = (props) =>{
    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth)
            props.navigation.navigate('InicioSesion')
        }
        catch {
            console.log(error);
        }
    }
    const [icon_1] = useState(new Animated.Value(40));
    const [icon_2] = useState(new Animated.Value(40));
    const [icon_3] = useState(new Animated.Value(40));
    const [icon_4] = useState(new Animated.Value(40));

    const [pop, setPop] = useState(false);
    const popIn = () => {
        setPop(true);
        Animated.timing(icon_1, {
            toValue: 130,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_2, {
            toValue: 200,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_3, {
            toValue: 270,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_4, {
            toValue: 340,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }
    const popOut = () => {
        setPop(false);
        Animated.timing(icon_1, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_2, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_3, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_4, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }
    return (
        <View style={{ flex: 1, padding: 'auto' }} >
            <Text onPress={() => { handleLogout() }} style={{ color: 'blue', textDecorationLine: 'underline', textAlign: 'center' }}>Salir de Sesión  </Text>
            <Animated.View style={[styles.secundario, { bottom: icon_1 }]}>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("HistorialClinico");
                }}>
                    <MaterialCommunityIcons name="map" size={23} color={"#FFFF"} />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.secundario, { bottom: icon_2 }]}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="database" size={23} color={"#FFFF"} />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.secundario, { bottom: icon_3 }]}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("CreateUsers")}}>
                    <MaterialCommunityIcons name="account-plus-outline" size={23} color={"#FFFF"} />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.secundario, { bottom: icon_4 }]}>
                <TouchableOpacity onPress={() => { props.navigation.navigate("UserList"); }}>
                    <MaterialCommunityIcons name="account-edit-outline" size={23} color={"#FFFF"} />
                </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    pop === false ? popIn() : popOut();
                }}>
                <MaterialCommunityIcons name="home" size={25} color={"#FFFF"} />
            </TouchableOpacity>
        </View>
    )
    user
}
const BottomTab = (props) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Main">
                {() => (
                    <drawer.Navigator screenOptions={{
                        drawerStyle: {
                            backgroundColor: "#fff",
                            width: 250
                        },
                        drawerActiveTintColor: "blue",
                        drawerLabelStyle: {
                            color: "#111"
                        }
                    }}>
                        <drawer.Screen name={"Home"} component={FloatingButton} options={{
                            drawerLabel: "Home",
                            drawerIcon: (color) => {
                                <MaterialCommunityIcons name='md-alarm' color={color} size={16} />
                            }
                        }} />
                        <drawer.Screen name="Añadir Usuarios" component={CreateUsers} options={{
                            drawerIcon: ({ color, size }) => {
                                <MaterialCommunityIcons name="perfil" color={color} size={size} />
                            }
                        }} />
                        <drawer.Screen name="Perfil" component={CreateUsers} options={{
                            drawerIcon: ({ color, size }) => {
                                <MaterialCommunityIcons name="perfil" color={color} size={size} />
                            }
                        }} />
                    </drawer.Navigator>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}
export default BottomTab;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 'auto',
    },
    button: {
        backgroundColor: '#f52d56',
        width: 80,
        height: 80,
        position: 'absolute',
        bottom: 40,
        right: 40,
        borderRadius: 80 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 13 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        padding: 'auto',
    },
    secundario: {
        backgroundColor: '#f52d56',
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 50,
        right: 50,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 13 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        padding: 'auto',
    },
    menu: {
        backgroundColor: "F02A4B"
    }
})
