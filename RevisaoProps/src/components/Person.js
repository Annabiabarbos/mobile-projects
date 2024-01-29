import { StyleSheet, Text, View } from "react-native";



//componente person 
//props: name, age 

const Person = ({name, age}) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.textName}>Nome: {name}</Text>
            <Text style = {styles.textAge}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        backgroundColor : 'purple',
        padding : 100,
        margin: 10,
        borderRadius: 5,   
    },

    textName:{
        fontSize: 20,
        color: 'white',
        fontFamily: 'PlayfairDisplay_500Medium'
    },

    textAge:{
        fontSize: 15,
        color: 'white',
        fontFamily: 'Poppins_200ExtraLight_Italic'
    }
})

export default Person;