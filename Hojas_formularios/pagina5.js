import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TabView, TabBar } from 'react-native-tab-view';
import appfirebase from '../database/firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default function Pag5() {
    const { handleSubmit, control, reset, watch, formState: { errors } } = useForm();
    
    return (
        <ScrollView>
            <View>
                <Text>MUSCULOSESQUÉLETICOS:</Text>
                <Text>Extremidades superiores</Text>
                <Controller
                    name="ExtremidadesSuperiores"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} multiline/>}
                />
                
                <Text>Extremidades inferiores</Text>
                <Controller
                    name="Extremidades superiores"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} multiline />}
                />
            </View>

            <View>
                <Text>Genitourinario(cuando aplique caso)</Text>
                <Controller
                    name="Genitourinario"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} multiline />}
                />
            </View>

            <View>
                <Text>Examen ginecológico</Text>
                <Controller
                    name="ExamenGinecológico"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} multiline />}
                />
            </View>

            <View>
                <Text>Examen neurológico (describir en el orden siguiente estado de conciencia, funciones vitales, actividad, orientación en
                    tiempo, espacio y persona, memoria y aprendizaje, signos meníngeos, fuerza y tono muscular, coordinación, sensibilidad y
                    reflejos):</Text>
                <Controller
                    name="ExamenNeurológico"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} multiline />}
                />
            </View>
        </ScrollView>
    )
}