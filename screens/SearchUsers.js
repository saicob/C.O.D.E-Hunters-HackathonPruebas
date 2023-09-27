import React, { useEffect, useState } from "react"
import { ScrollView, Button, View, Alert, ActivityIndicator, StyleSheet, TextInput } from "react-native"
import { getFirestore, collection, addDoc, doc, deleteDoc, getDoc, setDoc, getDocs, updateDoc } from 'firebase/firestore'
import firebase from '../database/firebase'
import { Searchbar } from 'react-native-paper';

const db = getFirestore(firebase)

const BuscarUsuarios = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => {
        setSearchQuery(query);
        props.navigation.navigate('UserList', {
            userId: searchQuery
        })
    }
    return (
        <Searchbar
            placeholder="Search"
            onChangeText={(onChangeSearch)}
            value={searchQuery}
        />

    );

};

export default BuscarUsuarios