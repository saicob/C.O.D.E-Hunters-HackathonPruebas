import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert, CheckBox } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TabView, TabBar } from 'react-native-tab-view';
import appfirebase from '../database/firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default function Pag2() {
    const { handleSubmit, control, reset, watch, formState: { errors } } = useForm();
    const [enfermedadesInfectoContagiosas, setEnfermedadesInfectoContagiosas] = useState([]);
    const [enfermedadesHereditarias, setEnfermedadesHereditarias] = useState([]);


    return (
        <ScrollView>
            <Text>VIII. Antecedentes Familiares Patológicos</Text>
            <Text>Enfermedades Infecto-Contagiosas</Text>
            <View>
                {[
                    'Hepatitis', 'Sífilis', 'TB', 'Cólera', 'Amebiasis',
                    'Tosferina', 'Sarampión', 'Varicela', 'Rubéola', 'Parotiditis',
                    'Meningitis', 'Impétigo', 'Fiebre tifoidea', 'Escarlatina', 'Malaria',
                    'Escabiosis', 'Pediculosis', 'Tiña'
                ].map(enfermedad => (
                    <View key={enfermedad} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            value={enfermedadesInfectoContagiosas.includes(enfermedad)}
                            onValueChange={() => {
                                const selectedEnfermedades = enfermedadesInfectoContagiosas.includes(enfermedad)
                                    ? enfermedadesInfectoContagiosas.filter((enfermedadSeleccionada) => enfermedadSeleccionada !== enfermedad)
                                    : [...enfermedadesInfectoContagiosas, enfermedad];
                                setEnfermedadesInfectoContagiosas(selectedEnfermedades);
                            }}
                        />
                        <Text>{enfermedad}</Text>
                    </View>
                ))}

                {/* Checkbox para agregar otra enfermedad */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                        value={enfermedadesInfectoContagiosas.includes('Otra')}
                        onValueChange={() => {
                            const selectedEnfermedades = enfermedadesInfectoContagiosas.includes('Otra')
                                ? enfermedadesInfectoContagiosas.filter((enfermedadSeleccionada) => enfermedadSeleccionada !== 'Otra')
                                : [...enfermedadesInfectoContagiosas, 'Otra'];
                            setEnfermedadesInfectoContagiosas(selectedEnfermedades);
                        }}
                    />
                    <TextInput
                        placeholder="Otra enfermedad"
                        onChangeText={(otraEnfermedad) => {
                            if (enfermedadesInfectoContagiosas.includes('Otra')) {
                                const selectedEnfermedades = [...enfermedadesInfectoContagiosas];
                                const indexOfOtra = selectedEnfermedades.indexOf('Otra');
                                selectedEnfermedades[indexOfOtra] = otraEnfermedad;
                                setEnfermedadesInfectoContagiosas(selectedEnfermedades);
                            }
                        }}
                        editable={enfermedadesInfectoContagiosas.includes('Otra')}
                    />
                </View>
            </View>

            <View>
                <Text>{'\n'}Enfermedades hereditarias:</Text>
                <View>
                    {[
                        'Alergias', 'Diabetes mellitus', 'Hipertensión arterial', 'Enfermedad reumática',
                        'Enfermedades renales', 'Enfermedades oculares', 'Enfermedades cardiacas',
                        'Enfermedad hepática', 'Enfermedades musculares', 'Malformaciones congénitas',
                        'Desórdenes mentales', 'Enfermedades degenerativas del sistema nervioso central',
                        'Anomalías del crecimiento y desarrollo', 'Errores innatos del metabolismo'
                    ].map(enfermedad => (
                        <View key={enfermedad} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                value={enfermedadesHereditarias.includes(enfermedad)}
                                onValueChange={() => {
                                    const selectedEnfermedades = enfermedadesHereditarias.includes(enfermedad)
                                        ? enfermedadesHereditarias.filter((enfermedadSeleccionada) => enfermedadSeleccionada !== enfermedad)
                                        : [...enfermedadesHereditarias, enfermedad];
                                    setEnfermedadesHereditarias(selectedEnfermedades);
                                }}
                            />
                            <Text>{enfermedad}</Text>
                        </View>
                    ))}
                    {/* Checkbox para agregar otra enfermedad hereditaria */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            value={enfermedadesHereditarias.includes('Otra')}
                            onValueChange={() => {
                                const selectedEnfermedades = enfermedadesHereditarias.includes('Otra')
                                    ? enfermedadesHereditarias.filter((enfermedadSeleccionada) => enfermedadSeleccionada !== 'Otra')
                                    : [...enfermedadesHereditarias, 'Otra'];
                                setEnfermedadesHereditarias(selectedEnfermedades);
                            }}
                        />
                        <TextInput
                            placeholder="Otra enfermedad hereditaria"
                            onChangeText={(otraEnfermedad) => {
                                if (enfermedadesHereditarias.includes('Otra')) {
                                    const selectedEnfermedades = [...enfermedadesHereditarias];
                                    const indexOfOtra = selectedEnfermedades.indexOf('Otra');
                                    selectedEnfermedades[indexOfOtra] = otraEnfermedad;
                                    setEnfermedadesHereditarias(selectedEnfermedades);
                                }
                            }}
                            editable={enfermedadesHereditarias.includes('Otra')}
                        />
                    </View>
                </View>
            </View>

            <View>
                <Text>X. Antecedentes Personales Patológicos</Text>
                <Text>Enfermedades infecto-contagiosas previas(registrar fecha)</Text>
                <Controller name="eICprevias" control={control}
                    render={({ field }) => <TextInput {...field} multiline/>} /> 
            </View>
            <View>
                <Text>Enfermedades cronicas</Text>
                <Controller name="enfC" control={control}
                    render={({ field }) => <TextInput {...field} />} multiline/> 
            </View>
        </ScrollView>
    )
}