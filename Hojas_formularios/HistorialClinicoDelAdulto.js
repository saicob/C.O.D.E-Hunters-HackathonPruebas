import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, ScrollView, Alert, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TabView, TabBar } from 'react-native-tab-view';
import appfirebase from '../database/firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Pag4 from './pagina4';
import Pag5 from './pagina5';
import Pag1 from './pagina1';
import Pag2 from './pagina2';

const db = getFirestore(appfirebase)

export default function HistorialClinico(props) {
    
    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'form1':
                return (
                    <Pag1/>
                    );
            case 'form2':
                return <Pag2/>
            case 'form3':
                return (
                    null
                );
            case 'form4':
                return (
                    <ScrollView>
                        <Pag4/>
                    </ScrollView>
                )
            case 'form5':
                return (
                    <ScrollView>
                        <Pag5 />
                        <Button title="Registrar"/>
                    </ScrollView>
                );
        }
    }

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'form1', title: 'Página 1' },
        { key: 'form2', title: 'Página 2' },
        { key: 'form3', title: 'Página 3' },
        { key: 'form4', title: 'Página 4' },
        { key: 'form5', title: 'Página 5' }
    ]);
    return (
        <TabView navigationState={{index, routes}} renderScene = {renderScene} onIndexChange={setIndex} renderTabBar={renderTabBar}/>
    )
}

const renderTabBar = (props) => (
    <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'blue' }}
        style={{ backgroundColor: 'white' }}
        labelStyle={{ color: 'blue' }}
    />
    );