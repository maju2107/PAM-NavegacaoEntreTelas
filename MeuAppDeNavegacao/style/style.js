import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    all :{
        backgroundColor:'#9dc5cd'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        width: windowWidth * 1.0,
        marginTop: 200
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color:'gray'
    },
    buttonContainer: {
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5
    },

    input: {
        borderColor: 'gray',
        borderWidth: 2,
        width: windowWidth * 0.7,
        padding:20,
        marginBottom: 10,
        backgroundColor: 'white'
    },

    containerConjunto: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4888ac' // Cor fundo da tela
    },
    titleConjunto: {
        fontSize: 24,
        marginBottom: 20,
        color:'white'
    },
    buttonContainerConjunto: {
        backgroundColor: '#add8e6', // Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5
    },
});

export default styles;