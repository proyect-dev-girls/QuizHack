import { StatusBar } from "expo-status-bar";
import { View, StyleSheet,Animated } from "react-native";
import { Text , Appbar} from "react-native-paper";

 const BienvenidaGames =()=>{

    return(
        <>
          <View>
          <Appbar.Content title="Bienvenido a Quiz" titleStyle={styles.title} />
          </View>
        
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        alignItems:'center'
    },

})

export default BienvenidaGames;