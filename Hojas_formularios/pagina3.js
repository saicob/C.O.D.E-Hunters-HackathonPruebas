import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert, CheckBox } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TabView, TabBar } from 'react-native-tab-view';
import appfirebase from '../database/firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default function Pag3() {
    return (
        <ScrollView>
            <View>
                <Text>Cirugias previas realizadas</Text>
                <Controller name="Cirugiasprevias" control={control} rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} multiline/>} /> 
            </View>

            <View>
                <Text>Hospitalizaciones (registrar fecha y causa de la hospitalizacion)</Text>
                <Controller name="Hospitalizacion" control={control} rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} multiline />} /> 
            </View>

            <View>
                <Text>XI. Antecedentes Gineco-obstéticos</Text>
                {/* <Text> XII. Historial laboral */}
            </View>
        </ScrollView>
    )
}