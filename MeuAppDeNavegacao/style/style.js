import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    all :{
        marginTop: 200
    },
    container: {
        flex: 1,
        alignItems: 'center',
        width: windowWidth * 1.0 
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5,
    },

    input: {
        borderColor: 'gray',
        borderWidth: 3,
        width: windowWidth * 0.7,
        padding:20,
        marginBottom: 10
    }
});

export default styles;