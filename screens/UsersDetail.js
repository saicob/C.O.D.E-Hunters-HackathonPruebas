import React, { useEffect, useState } from "react"
import { ScrollView, Button, View, Alert, ActivityIndicator, StyleSheet, TextInput } from "react-native"
import { getFirestore, collection, addDoc, doc, deleteDoc, getDoc, setDoc, getDocs, updateDoc } from 'firebase/firestore'
import firebase from '../database/firebase'
import { Searchbar } from 'react-native-paper';

const db = getFirestore(firebase)


const UsersDetail = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    

    const onChangeSearch = query => {
        setSearchQuery(query);
        props.navigation.navigate('UsersDetail', {
            userId: searchQuery
        })
    }
    const initialState = {
        id: "",
        Rol: "",
        email: "",
        password: "",
    };
    const [user, setusers] = useState(initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUserByID(props.route.params.userId);
    }, [])

    const handleTextChange = (name, value) => {
        setusers({ ...user, [name]: value });
    };
    const deleteUser = async (id) => {
        setLoading(true)
        await deleteDoc(doc(db, "users", id))
        setLoading(false)
        props.navigation.navigate("Home Screen");
    };
    const openConfirmationAlert = () => {
        Alert.alert(
            "Removing the User",
            "Are you sure?",
            [
                { text: "Yes", onPress: () => deleteUser(props.route.params.userId) },
                { text: "No", onPress: () => console.log("canceled") },
            ],
            {
                cancelable: true,
            }
        );
    };
    const updateUser = async (id) => {
        const dbref = doc(db, 'TablaRoles', id)
        await setDoc(dbref, {
            name: user.email,
            email: user.password,
            phone: user.phone,
        });
        setusers(initialState);
        props.navigation.navigate("UserList");
    };
    const getUserByID = async (id) => {
        const dbref = doc(db, 'TablaRoles', id)
        const docst = await getDoc(dbref)
        const user = docst.data();
        console.log(user);
        setusers({ ...user, id: doc.id });

        setLoading(false);
    }
    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#9e9e9e" />
            </View>
        )
    }
    return (
        
        <ScrollView style={styles.container}>
            <View>
                <TextInput
                    placeholder="Name"
                    autoCompleteType="username"
                    style={styles.inputGroup}
                    value={user.id}
                    onChangeText={(value) => handleTextChange("name", value)}
                />
            </View>
            <View>
                <TextInput
                    autoCompleteType="email"
                    placeholder="Email"
                    style={styles.inputGroup}
                    value={user.email}
                    onChangeText={(value) => handleTextChange("email", value)}
                />
            </View>
            <View>
                <TextInput
                    placeholder="Phone"
                    autoCompleteType="tel"
                    style={styles.inputGroup}
                    value={user.Rol}
                    onChangeText={(value) => handleTextChange("phone", value)}
                />
            </View>
            <View style={styles.btn}>
                <Button
                    title="Delete"
                    onPress={() => openConfirmationAlert()}
                    color="#E37399"
                />
            </View>
            <View>
                <Button title="Update" onPress={() => updateUser(props.route.params.userId)} color="#19AC52" />
            </View>
        </ScrollView>
    );
}

export default UsersDetail
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    loader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    btn: {
        marginBottom: 7,
    },
});