import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './templates/LoginScreen';
import firabase from './templates/utils/firebase';
import "firebase/auth";

export default function App() {

  firabase.auth().onAuthStateChange(user => {
    console.log(user);
  })

  return (
    <View style={styles.container}>
      <LoginScreen></LoginScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
