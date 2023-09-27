import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert, CheckBox } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TabView, TabBar } from 'react-native-tab-view';
import appfirebase from '../database/firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default function Pag3() {
    //form
    const { handleSubmit, control, getValues, reset, watch, formState: { errors } } = useForm();

    //constantes para los checkboxes si/no
    const [isChecked, setChecked] = useState(false);
    const [metodo, setMetodo] = useState('');
    const handleCheckboxChange = () => {
        setChecked(!isChecked);
        setMetodo(''); 
    };
    const handleMetodoChange = (text) => {
        setMetodo(text);
    };

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
                <View>
                    <Text>Menarca</Text>
                    <Controller name="Menacarca" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field}/>} /> 
                </View>
                <View>
                    <Text>Inicio vida sexual</Text>
                    <Controller name="iVidaSexual" control={control} defaultValue=""rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>Números de compañeros sexuales</Text>
                    <Controller name="Menacarca" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>Gesta</Text>
                    <Controller name="Gesta" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>Para</Text>
                    <Controller name="Para" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>Cesária</Text>
                    <Controller name="Cesaria" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>Aborto</Text>
                    <Controller name="Aborto" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>Legrado</Text>
                    <Controller name="Legrado" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>Planificacion familiar</Text>
                    <Text>Si</Text>
                    <CheckBox
                        value={isChecked}
                        onValueChange={handleCheckboxChange}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>No</Text>
                    <CheckBox
                        value={!isChecked}
                        onValueChange={handleCheckboxChange}
                    />
                </View>
                {isChecked && (
                    <View>
                        <Text>Método:</Text>
                        <TextInput
                            placeholder="Escriba el método"
                            value={metodo}
                            onChangeText={handleMetodoChange}
                        />
                    </View>
                )}
                <View>
                    <Text>FUR</Text>
                    <Controller name="FUR" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>Semana de amenorra</Text>
                    <Controller name="AmenorraWeek" control={control} rules={{ required: 'Este campo es requerido' }}
                        render={({ field }) => <TextInput {...field} />} />
                </View>
                <View>
                    <Text>Menospausia</Text>
                    <Text>Si</Text>
                    <CheckBox
                        value={isChecked}
                        onValueChange={handleCheckboxChange}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>No</Text>
                    <CheckBox
                        value={!isChecked}
                        onValueChange={handleCheckboxChange}
                    />
                </View>
                {isChecked && (
                    <View>
                        <Text>Fecha:</Text>
                        <TextInput
                            placeholder="Escriba el método"
                            value={metodo}
                            onChangeText={handleMetodoChange}
                        />
                    </View>
                )}
            </View>
            <View>
                <Text>Sustitucion hormonal</Text>
                <Text>Si</Text>
                <CheckBox
                    value={isChecked}
                    onValueChange={handleCheckboxChange}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>No</Text>
                <CheckBox
                    value={!isChecked}
                    onValueChange={handleCheckboxChange}
                />
            </View>
            {isChecked && (
                <View>
                    <Text>Especifique:</Text>
                    <TextInput
                        placeholder="Escriba el método"
                        value={metodo}
                        onChangeText={handleMetodoChange}
                    />
                </View>
            )}
            <View>
                <Text>PAP</Text>
                <Text>Si</Text>
                <CheckBox
                    value={isChecked}
                    onValueChange={handleCheckboxChange}
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>No</Text>
                <CheckBox
                    value={!isChecked}
                    onValueChange={handleCheckboxChange}
                />
            </View>
            {isChecked && (
                <View>
                    <Text>Resultado y fecha del último PAP</Text>
                    <TextInput
                        placeholder="Escriba el método"
                        value={metodo}
                        onChangeText={handleMetodoChange}
                    />
                </View>
            )}

            <View>
                <Text> XII. Historial laboral</Text>
                <View>
                    <Text>Trabajo Actual:</Text>
                    <Controller
                        name="trabajoActual"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                            <CheckBox
                                value={field.value}
                                onValueChange={(value) => field.onChange(value)}
                            />
                        )}
                    />

                    <Text>Lugar de trabajo:</Text>
                    <Controller
                        name="lugarTrabajo"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                        )}
                    />

                    <Text>Área en donde labora:</Text>
                    <Controller
                        name="areaTrabajo"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                        )}
                    />

                    <Text>Oficio, categoría o actividad que desempeña:</Text>
                    <Controller
                        name="oficio"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                        )}
                    />

                    <Text>Años de oficio en el trabajo actual:</Text>
                    <Controller
                        name="añosOficio"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                        )}
                    />

                    <Text>Día laboral (horas):</Text>
                    <Controller
                        name="horasLaborales"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                        )}
                    />

                    <Text>Horas semanales trabajadas:</Text>
                    <Controller
                        name="horasSemanales"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                        )}
                    />

                    <Text>Horas extras:</Text>
                    <Controller
                        name="horasExtras"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                        )}
                    />

                    <Text>Tipo de horario realizado:</Text>
                    <Controller
                        name="tipoHorario"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                        )}
                    />

                    <Text>Descripción detallada del trabajo que desarrolla actualmente:</Text>
                    <Controller
                        name="descripcionTrabajo"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                                multiline
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                        )}
                    />

                    <Text>Exposición a sustancias, materiales u otros productos:</Text>
                    <Controller
                        name="exposicionSustancias"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                            <CheckBox
                                value={field.value}
                                onValueChange={(value) => field.onChange(value)}
                            />
                        )}
                    />

                    <Controller
                        name="exposicionSustancias"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <View>
                                <Text>Describa:</Text>
                                <TextInput
                                    multiline
                                    value={field.value}
                                    onChangeText={field.onChange}
                                />
                            </View>
                        )}
                    />


                    <Text>Frecuencia e intensidad de su tarea:</Text>
                    <Controller
                        name="frecuenciaTarea"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                        )}
                    />

                    <Text>Posición adoptada en su trabajo:</Text>
                    <Controller
                        name="posicionTrabajo"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                        )}
                    />

                    <Text>Trabajos fuera de su empleo habitual:</Text>
                    <Controller
                        name="trabajosFuera"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                            <CheckBox
                                value={field.value}
                                onValueChange={(value) => field.onChange(value)}
                            />
                        )}
                    />

                    <Text>2- Antecedentes laborales:</Text>
                    <Controller
                        name="antecedentesLaborales"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                            <CheckBox
                                value={field.value}
                                onValueChange={(value) => field.onChange(value)}
                            />
                        )}
                    />
                    {/*fechas */}
                    <Text>Fecha</Text>
                    {/*Fecha inicio*/}
                    <Text>Inicio</Text>
                    <Controller
                        name="inicioAntecedentes"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                            value={field.value}
                            onChangeText={field.onChange}
                            />
                            )}
                            />
                    <Controller
                        name="fechaAntecedentes"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                           <TextInput
                          value={field.value}
                          onChangeText={field.onChange}
                          />
                         )}
                        />

                    <Text>Años trabajados</Text>
                    <Controller
                        name="añosTrabajados"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                        )}
                    />

                    

                    <Text>Puesto de trabajo</Text>
                    <Text>(describir producto, materiales, situación, otros)</Text>
                    <Controller
                        name="conclusionAntecedentes"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextInput
                                multiline
                                value={field.value}
                                onChangeText={field.onChange}
                            />
                        )}
                    />

                    
                </View>

            </View>
                
        </ScrollView>
    )
}
