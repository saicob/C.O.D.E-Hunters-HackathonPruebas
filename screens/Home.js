import { View, Button, TextInput, ScrollView, Text, TouchableOpacity } from 'react-native'
import { getAuth, signOut } from 'firebase/auth';
//import { TouchableOpacity } from 'react-native-web';

export default function Home(props) {

    
    return (
        <ScrollView>
            <Text onPress={() => { handleLogout() }} style={{ color: 'blue', textDecorationLine: 'underline' }}>Salir de Sesión</Text>
       </ScrollView> 
    );
}
