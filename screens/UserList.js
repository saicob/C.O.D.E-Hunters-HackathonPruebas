import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import { ListItem, Avatar, Searchbar, SearchBar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import firebase from '../database/firebase'
import { getFirestore, collection, addDoc, doc, deleteDoc, getDocs, query, setDoc, where, orderBy, startAt, endAt } from 'firebase/firestore'

const db = getFirestore(firebase)

const UserList = ({ navigation }) => {
    const [lista, setUsers] = useState([])
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => {
        setSearchQuery(query);
    }
    useEffect(() => {
        const getLista = async () => {
            try {
                const citiesRef = collection(db, 'TablaRoles');
                const q = query(citiesRef, orderBy('email'), startAt(searchQuery), endAt(searchQuery + '\uf8ff'));
                const querySnapshot = await getDocs(q);
                const docs = []
                querySnapshot.forEach((doc) => {
                    const { Id,Rol, email,password} = doc.data()
                    docs.push({
                        id: doc.id,
                        Id,
                        Rol,
                        email,
                        password,
                    })
                })
                setUsers(docs);
            }
            catch (error) {
                console.log(error);
            }
        }
        getLista()
    }, [lista])


    return (
        <View>
            <SearchBar
                placeholder="Search"
                onChangeText={(onChangeSearch)}
                value={searchQuery}
            />
            {
                lista.map((user) => {
                    return (
                        <ListItem
                            key={user.id} bottomDivider onPress={() => {
                                navigation.navigate('UserDetail', { userId: user.id })
                            }}>
                            <ListItem.Chevron />
                            <ListItem.Content>
                                <ListItem.Title>{user.email}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </View>

    )
}
export default UserList