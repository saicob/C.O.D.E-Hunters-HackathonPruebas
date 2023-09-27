import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import InicioSesion from './screens/InicioSesion';
import CreateUsers from './screens/CreateUsers';
import Registro from './screens/Registro';
import BottomTab from './screens/BottomTab';
import UserList from './screens/UserList';
import UserDetail from './screens/UsersDetail';
import Home from './screens/Home';

import FloatingButton from './screens/BottomTab'
import HistorialClinico from './Hojas_formularios/HistorialClinicoDelAdulto';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='InicioSesion' component={InicioSesion}/>
      <Stack.Screen name='FloatingButton' component={FloatingButton}/>
      <Stack.Screen name='BottomTab' component={BottomTab} options={{
        headerShown: false,
        headerLeft: null,
      }} />
      <Stack.Screen name='Registro' component={Registro} />
      <Stack.Screen name='CreateUsers' component={CreateUsers} />
      <Stack.Screen name='UserList' component={UserList} />
      <Stack.Screen name='UserDetail' component={UserDetail} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='HistorialClinico' component={HistorialClinico}/>
    </Stack.Navigator>
  );

}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}