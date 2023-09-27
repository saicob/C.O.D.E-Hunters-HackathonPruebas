import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { getFirestore, collection, addDoc, doc, deleteDoc, getDoc, setDoc,query, where } from 'firebase/firestore'
import appfirebase from '../database/firebase'
import { useEffect } from 'react';

const db = getFirestore(appfirebase)

const  HomeScreen = () =>{
  return (
    <View>
      <Text>Hola mundo</Text>
    </View>
  )
}        
export default HomeScreen;