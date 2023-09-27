import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, ScrollView, Alert, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TabView, TabBar } from 'react-native-tab-view';
import appfirebase from '../database/firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const db = getFirestore(appfirebase);
const auth = getAuth(appfirebase)

export default function Registro(props) {
  const { handleSubmit, control, reset, watch, formState: { errors } } = useForm();
  const Password = watch('Password');
  const ConfirmPassword = watch('ConfirmPassword');
  const Email = watch('Email')

  const [state, setState] = useState({
    Id: '',
    Rol: '9',
    email: '',
    password: '',
  })

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'form1', title: 'Paso 1' },
    { key: 'form2', title: 'Paso 2' },
  ]);

  const inicio = async () => {
    try {
      props.navigation.navigate('InicioSesion')
    }
    catch (error) {
      console.log(error);
    }
  }

  const createAcount = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, state.email, state.password)
      console.log(userCredential.user)
    }
    catch (error) {
      console.error(error)
    }
  }

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'form1':
        return (
          <ScrollView>
            <View>
              <Text>Nro. de cedula:</Text>
              <Controller
                name="Cedula"
                control={control}
                defaultValue=""
                rules={{ required: 'Este campo es requerido' }}
                render={({ field }) => <TextInput {...field} />}
              />
              {errors.Cedula && (
                <Text style={{ color: 'red' }}>Nro. de cedula es requerido</Text>
              )}
            </View>

            <View>
              <Text>Fecha de Nacimiento:</Text>
              <Controller
                name="fechaNac"
                control={control}
                defaultValue=""
                rules={{ required: 'Este campo es requerido' }}
                render={({ field }) => <TextInput {...field} />}
              />
              {errors.fechaNac && (
                <Text style={{ color: 'red' }}>Fecha de Nacimiento es requerido</Text>
              )}
            </View>

            <View>
              <Text>Nombres:</Text>
              <Controller
                name="Nombres"
                control={control}
                defaultValue=""
                rules={{ required: 'Este campo es requerido' }}
                render={({ field }) => <TextInput {...field} />}
              />
              {errors.Nombres && (
                <Text style={{ color: 'red' }}>Nombres son requeridos</Text>
              )}
            </View>

            <View>
              <Text>Apellidos:</Text>
              <Controller
                name="Apellidos"
                control={control}
                defaultValue=""
                rules={{ required: 'Este campo es requerido' }}
                render={({ field }) => <TextInput {...field} />}
              />
              {errors.Apellidos && (
                <Text style={{ color: 'red' }}>Apellidos son requeridos</Text>
              )}
            </View>

            <View>
              <Text>Edad:</Text>
              <Controller
                name="Edad"
                control={control}
                defaultValue=""
                render={({ field }) => <TextInput {...field} keyboardType="numeric" />}
              />
            </View>

            <View>
              <Text>Sexo:</Text>
              <Controller
                name="sexo"
                control={control}
                defaultValue=""
                rules={{ required: 'Este campo es requerido' }}
                render={({ field }) => <TextInput {...field} />}
              />
              {errors.sexo && (
                <Text style={{ color: 'red' }}>Sexo es requerido</Text>
              )}
            </View>

            <View>
              <Text>Correo Electronico: </Text>
              <Controller
                name="Email"
                control={control}
                defaultValue=""
                rules={{ required: 'El Email es requerido' }}
                render={({ field }) => <TextInput {...field} />}
              />
              {errors.Email && (
                <Text style={{ color: 'red' }}>El Correo Electronico es requerido</Text>
              )}
            </View>

            <View>
              <Text>Contraseña: </Text>
              <Controller
                name="Password"
                control={control}
                defaultValue=""
                rules={{ required: 'La contraseña es requerida' }}
                render={({ field }) => <TextInput {...field} secureTextEntry={true} />}
              />
              {errors.Password && (
                <Text style={{ color: 'red' }}>La contraseña es requerida</Text>
              )}
            </View>

            <View>
              <Text>Confirmar contraseña: </Text>
              <Controller
                name="ConfirmPassword"
                control={control}
                defaultValue=""
                rules={{
                  required: 'La confirmación de la contraseña es requerida',
                  validate: (value) => value === Password || 'Las contraseñas no coinciden',
                }}
                render={({ field }) => <TextInput {...field} secureTextEntry={true} />}
              />
              {errors.ConfirmPassword && (
                <Text style={{ color: 'red' }}>
                  {errors.ConfirmPassword.message}
                </Text>
              )}
            </View>


          </ScrollView>
        );
      case 'form2':
        return (
          <ScrollView>
            <View>
              <Text>Ocupación:</Text>
              <Controller
                name="ocupacion"
                control={control}
                defaultValue=""
                render={({ field }) => <TextInput {...field} />}
              />
            </View>

            <View>
              <Text>Teléfono:</Text>
              <Controller
                name="telefono"
                control={control}
                defaultValue=""
                rules={{ required: 'Este campo es requerido' }}
                render={({ field }) => <TextInput {...field} />}
              />
              {errors.telefono && (
                <Text style={{ color: 'red' }}>Teléfono es requerido</Text>
              )}

            </View>

            <View>
              <Text>Dirección:</Text>
              <Controller
                name="direccion"
                control={control}
                defaultValue=""
                rules={{ required: 'Este campo es requerido' }}
                render={({ field }) => <TextInput {...field} />}
              />
              {errors.direccion && (
                <Text style={{ color: 'red' }}>Dirección es requerida</Text>
              )}
            </View>

            <View>
              <Text>Distrito:</Text>
              <Controller
                name="distrito"
                control={control}
                defaultValue=""
                rules={{ required: 'Este campo es requerido' }}
                render={({ field }) => <TextInput {...field} />}
              />
              {errors.distrito && (
                <Text style={{ color: 'red' }}>Distrito es requerido</Text>
              )}
            </View>

            <View>
              <Text>Departamento:</Text>
              <Controller
                name="departamento"
                control={control}
                defaultValue=""
                rules={{ required: 'Este campo es requerido' }}
                render={({ field }) => <TextInput {...field} />}
              />
              {errors.departamento && (
                <Text style={{ color: 'red' }}>Departamento es requerido</Text>
              )}
            </View>

            <View>
              <Text>Dispuesto a Transfusiones sanguíneas?</Text>
              <Controller
                name="ts"
                control={control}
                defaultValue={false}
                render={({ field }) => <Switch {...field} />}
              />
            </View>

            <View>
              <Text>Dispuesto a Transplantes de Organos?:</Text>
              <Controller
                name="to"
                control={control}
                defaultValue={false}
                render={({ field }) => <Switch {...field} />}
              />
            </View>

            <View>
              <Text>Asegurado:</Text>
              <Controller
                name="asegurado"
                control={control}
                defaultValue={false}
                render={({ field }) => <Switch {...field} />}
              />
            </View>

            <View>
              <Text>Enfermedades Crónicas:</Text>
              <Controller
                name="enfC"
                control={control}
                defaultValue=""
                render={({ field }) => <TextInput {...field} multiline />}
              />
            </View>
            <Button title="Registrarse" onPress={handleSubmit(onSubmit)} />

            <Pressable onPress={inicio}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>¿Ya tienes cuenta?Inicia Sesion</Text>
            </Pressable>
          </ScrollView>
        );
      default:
        return null;
    }
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'blue' }}
      style={{ backgroundColor: 'white' }}
      labelStyle={{ color: 'blue' }}
    />
  );

  const onSubmit = async (data) => {
    try {
      if (Password !== ConfirmPassword) {
        Alert.alert('Alerta', 'Las contraseñas no coinciden');
      } else if (Password.length < 8) {
        Alert.alert('Alerta', 'La contraseña debe tener al menos 8 caracteres');
      } else {
        const userData = { ...data, Rol: state.Rol }

        const docRef = await addDoc(collection(db, 'TablaRoles'), userData);
        console.log('Documento guardado con ID:', docRef.id);
        Alert.alert('Alerta', 'Registrado con éxito');


        const userCredential = await createUserWithEmailAndPassword(auth, Email, Password)
        console.log(userCredential.user)

        // Limpiar el formulario después de enviar
        reset();
      }
    } catch (error) {
      console.error('Error al guardar en Firestore:', error);
    }
  };


  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
}