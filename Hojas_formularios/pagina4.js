import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TabView, TabBar } from 'react-native-tab-view';
import appfirebase from '../database/firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default function Pag4() {
    const { handleSubmit, control, reset, watch, formState: { errors } } = useForm();
    return (
        <ScrollView>
            <View>
                <Text> XIII. EXAMÉN FÍSICO: {'\n'} Signos vitales</Text>
                <Text>FC:</Text>
                <Controller
                    name="FC"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} />}
                />
                {errors.FC && (
                    <Text style={{ color: 'red' }}>FC es requerido</Text>
                )}
                <Text>FR:</Text>
                <Controller
                    name="FR"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} />}
                />
                {errors.FR && (
                    <Text style={{ color: 'red' }}>FR es requerido</Text>
                )}
                <Text>FA:</Text>
                <Controller
                    name="FA"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} />}
                />
                {errors.FA && (
                    <Text style={{ color: 'red' }}>FA es requerido</Text>
                )}
                <Text>Temperatura:</Text>
                <Controller
                    name="Temperatura"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} />}
                />
                {errors.Temperatura && (
                    <Text style={{ color: 'red' }}>Temperatura es requerido</Text>
                )}
            </View>

            <View>
                <Text>Datos antropométricos: </Text>
                <Text>Peso:</Text>
                <Controller
                    name="Peso"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} />}
                />
                {errors.Peso && (
                    <Text style={{ color: 'red' }}>Peso es requerido</Text>
                )}

                <Text>Talla:</Text>
                <Controller
                    name="Talla"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} />}
                />
                {errors.Talla && (
                    <Text style={{ color: 'red' }}>Talla es requerido</Text>
                )}

                <Text>Area superficie corporal: </Text>
                <Controller
                    name="AreaCorporal"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} />}
                />
                {errors.AreaCorporal && (
                    <Text style={{ color: 'red' }}>Area superficie corporal es requerido</Text>
                )}
                <Text>IMC:</Text>
                <Controller
                    name="IMC"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} />}
                />
                {errors.IMC && (
                    <Text style={{ color: 'red' }}>FR es requerido</Text>
                )}
            </View>

            <View>
                <Text>Aspecto General:</Text>
                <Controller
                    name="AspectoGral"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} multiline />}
                />
                {errors.AspectoGral && (
                    <Text style={{ color: 'red' }}>Aspecto General es requerido</Text>
                )}
            </View>

            <View>
                <Text>Piel y mucosa:</Text>
                <Controller
                    name="PielMucosa"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} multiline />}
                />
            </View>

            <View>
                <Text>Cabeza y cuello:</Text>
                <Text>Cráneo:</Text>
                <Controller
                    name="Craneo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextInput {...field} multiline />}
                />

                <Text>Ojos:</Text>
                <Controller
                    name="Ojos"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextInput {...field} multiline />}
                />

                <Text>Orejas y oídos:</Text>
                <Controller
                    name="OrejasOidos"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextInput {...field} multiline />}
                />

                <Text>Nariz:</Text>
                <Controller
                    name="Nariz"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextInput {...field} multiline />}
                />

                <Text>Boca:</Text>
                <Controller
                    name="Boca"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextInput {...field} multiline />}
                />

                <Text>Cuello:</Text>
                <Controller
                    name="Cuello"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextInput {...field} multiline />}
                />
            </View>

            <View>
                <Text>Torax: </Text>
                <Text>Caja Toraxica:</Text>
                <Controller
                    name="CajaToraxica"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextInput {...field} multiline />}
                />

                <Text>Mamas:</Text>
                <Controller
                    name="Mamas"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextInput {...field} multiline />}
                />

                <Text>Campos pulmonares:</Text>
                <Controller
                    name="CamposPulmonares"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextInput {...field} multiline />}
                />

                <Text>Cardiaco:</Text>
                <Controller
                    name="Cardiaco"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextInput {...field} multiline />}
                />
            </View>

            <View>
                <Text>Abdomen y pelvis(aqui tambien te describe el abdomen grávido)</Text>
                <Controller
                    name="AbdomenPelvis"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextInput {...field} multiline />}
                />
            </View>

            <View>
                <Text>Tacto Rectal(cuando aplique al caso):</Text>
                <Controller
                    name="TactoRectal"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <TextInput {...field} multiline />}
                />
            </View>
        </ScrollView>
    );
}