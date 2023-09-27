import { React, useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import { View, Text, TextInput } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import appfirebase from '../database/firebase';
import { Roles } from './InicioSesion';

const db = getFirestore(appfirebase);
export default function CreateUsers() {
  const auth = getAuth(appfirebase);
  const [visible, setVisible] = useState(false);

  const hideMenu = (valor) => {
    setVisible(false);
    state.Rol = valor;
  }
  const showMenu = () => setVisible(true);
  const [state, setState] = useState({
    Rol: '',
    email: '',
    password: '',
  })
  const adduser = () => {
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        addnewuser();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      });
  }
  const addnewuser = async () => {
    try {
      await addDoc(collection(db, 'TablaRoles'), {
        email: state.email,
        Rol: state.Rol,
        password: state.password,
      })
      props.navigation.navigate('UserList');
    }
    catch {
      alert(error)
    }
  }
  const handleChangeText = (email, value) => {
    setState({ ...state, [email]: value })
  }
  console.log(Roles);
  const a = "a";
  return (
    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Menu
        visible={visible}
        anchor={<Text onPress={showMenu}>Roles</Text>}
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={() => hideMenu(3)} style={a == 'a' ? styles.visibleOption : styles.hiddenOption}>Administrador Minsa</MenuItem>
        <MenuItem onPress={() => hideMenu(4)} style={a == 'a' ? styles.visibleOption : styles.hiddenOption}>Administrador Hospital</MenuItem>
        <MenuItem onPress={() => hideMenu(5)} style={a == 'a' ? styles.visibleOption : styles.hiddenOption} >Administrador Laboratorio</MenuItem>
      </Menu>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Correo Electronico " style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 30 }}
          onChangeText={(value) => handleChangeText('email', value)} />

        <TextInput placeholder="Contraseña de usuario" style={{ height: 50, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 30 }}
          onChangeText={(value) => handleChangeText('password', value)} />
      </View>
      <View>
        <Button title="Save user" onPress={() => adduser()} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  visibleOption: {
    color: 'black',
  },
  hiddenOption: {
    display: 'none',
  },
});