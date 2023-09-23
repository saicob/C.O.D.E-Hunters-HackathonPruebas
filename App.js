import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './scripts/Home';
import InicioSesion from './scripts/InicioSesion';
import Registro from './scripts/Registro';

const Stack = createNativeStackNavigator();

function MyStack()
{
  return(
  <Stack.Navigator>
    <Stack.Screen name='InicioSesion' component={InicioSesion} />
    <Stack.Screen name='Home' component={Home} options={{headerTitle: 'Home', headerLeft: null}} />
      <Stack.Screen name="Registro"
        component={Registro}
        options={{
          headerTitle: 'Registro',
          headerLeft: null,
        }} />
  </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}