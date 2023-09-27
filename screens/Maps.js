import { View, Text, ImageBackground } from 'react-native'
import { StyleSheet } from 'react-native'

const image = { uri: "https://th.bing.com/th/id/OIP.Q8xlo_x0cMuSUz79RdKmjwAAAA?w=229&h=80&c=7&r=0&o=5&dpr=1.3&pid=1.7" }

export default function Maps() {
    return (
        <View>
            <ImageBackground source={image} resizeMode='cover' style={styles.image}>
                <Text>Mapa de hospitales... Proximamente</Text>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        flex: 1,
        justifyContent: 'center',
    },
})