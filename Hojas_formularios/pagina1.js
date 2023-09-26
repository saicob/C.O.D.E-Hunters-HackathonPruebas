import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert, CheckBox } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TabView, TabBar } from 'react-native-tab-view';
import appfirebase from '../database/firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default function Pag1() {
    const { handleSubmit, control, reset, watch, formState: { errors } } = useForm();
    return (
        <ScrollView>
            <View>
                <View>
                    <Text>Nombre del establecimiento de salud</Text>
                    <Controller name="CentroSalud" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>N°. Expediente</Text>
                    <Controller name="nExpediente" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>Nombres y Apellidos del usuario: </Text>
                    <Controller name="NombreCompleto" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>N°. Cédula</Text>
                    <Controller name="cedula" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>Fecha</Text>
                    <Controller name="Fecha" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>Hora</Text>
                    <Controller name="hora" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>N°.INSS</Text>
                    <Controller name="INSS" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>Servivio y Sala</Text>
                    <Controller name="ServicioSala" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>N°. Cama</Text>
                    <Controller name="nCama" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
            </View>
            <View>
                <Text>IV.  Datos personales</Text>
                <View>
                    <Controller name="edad" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <Text>Edad</Text>
                
                <View>
                    <Text>Fecha Y lugar de nacimiento</Text>
                    <Controller name="F_lugarNac" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} multiline />} />
                </View>

                
                <Text>Género</Text>
                <Controller
                    name="genero"
                    control={control}
                    rules={{ required: 'Este campo es requerido' }}
                    defaultValue={false}
                    render={({ field }) => (
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CheckBox
                                    value={field.value === 'masculino'}
                                    onValueChange={() => field.onChange('masculino')}
                                />
                                <Text>Masculino</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CheckBox
                                    value={field.value === 'femenino'}
                                    onValueChange={() => field.onChange('femenino')}
                                />
                                <Text>Femenino</Text>
                            </View>
                        </View>
                    )}
                />

                <View>
                    <Text>Procedencia:</Text>
                    <Controller name="procedencia" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />                   
                </View>
                    <Text>Religión:</Text>
                    <Controller name="religion" defaultValue=""control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} /> 
                <View>
                    <Text>Escolaridad:</Text>
                    <Controller name="escolaridad" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} /> 
                </View>

                <View>
                    <Text>Profesión u oficio:</Text>
                    <Controller name="ProfesonOficio" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} /> 
                </View>

                <View>
                    <Text>Direccion Habitual:</Text>
                    <Controller name="dirección" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} /> 
                </View>

                <View>
                    <Text>Nombre del padre:</Text>
                    <Controller name="NombrePadre" control={control} defaultValue="" rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>

                <View>
                    <Text>Nombre de la Madre: </Text>
                    <Controller name="NombreMadre" control={control} defaultValue="" rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                
                <View>
                    <Text>Fuente de información: </Text>
                    <Controller name="FuenteInformacion" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                
                <View>
                    <Text>Confiabilidad: </Text>
                    <Controller name="confiabilidad" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
            </View>
            <View>
                <Text>V.  Motivo de la Consulta: </Text>
                <Controller
                    name="MotivoConsulta"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} multiline />}
                />
                {errors.MotivoConsulta && (
                    <Text style={{ color: 'red' }}>El Motiva de la Consulta es requerido</Text>
                )}
            </View>

            <View>
                <Text>VI.  Historia De La Enfermedad Actual</Text>
                <Controller
                    name="HistoriaEnfermedadActual"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} multiline />}
                />
                {errors.HistoriaEnfermedadActual && (
                    <Text style={{ color: 'red' }}>La Historia de la enfermedad actual es requerida</Text>
                )}
            </View>

            <View>
                <Text>VII.  Interrogatorio Por Aparatos Y Sistemas</Text>
                <Controller
                    name="InterrogatoriosAparatosSistemas"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Este campo es requerido' }}
                    render={({ field }) => <TextInput {...field} multiline />}
                />
                {errors.InterrogatorioAparatosSistemas && (
                    <Text style={{ color: 'red' }}>El Interrogatorio es importante</Text>
                )}
            </View>
        </ScrollView>
    )
}