import { View, Button, TextInput, ScrollView, Text, TouchableOpacity } from 'react-native'
import { getAuth, signOut } from 'firebase/auth';
//import { TouchableOpacity } from 'react-native-web';

import HistorialClinico from '../Hojas_formularios/HistorialClinicoDelAdulto';

export default function Home(props) {

    const auth = getAuth()
    
    const handleLogout = async () => {
        try {
            await signOut(auth)
            props.navigation.navigate('InicioSesion')
        }
        catch {
            console.log(error);
        }
    }
    return (
        <ScrollView>
            <View>
                {/* <HistorialClinico></HistorialClinico> solo era una prueba */}
            </View>
            <Text onPress={() => { handleLogout() }} style={{ color: 'blue', textDecorationLine: 'underline' }}>Salir de Sesión</Text>
        </ScrollView> 
    );
}

