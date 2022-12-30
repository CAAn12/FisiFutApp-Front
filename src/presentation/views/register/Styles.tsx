import { StyleSheet } from 'react-native'
import { MyColors } from '../../theme/AppTheme';

const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '2.5%',
        alignItems: 'center'
    },
    logoImage: {
        height: 75,
        resizeMode: 'contain'
    },
    logoPerfil : {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },
    logoText: {
        color: MyColors.defaultText,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        top: 10
    },
    form: {
        width: '100%',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        padding: 30
    },
    formText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: MyColors.defaultText
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: MyColors.defaultText,
        color: MyColors.defaultText,
        marginLeft: 15
    },
    formImage: {
        width: 35,
        height: 35,
        marginTop: 5
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 20
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 45
    },
    formRegisterText1: {
        color: MyColors.defaultText
    },
    formRegisterText2: {
        color: MyColors.defaultText,
        fontStyle: 'italic',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: MyColors.defaultText,
        marginLeft: 15  
    },
    loading: {
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0,
        left: 0
    }
});

export default RegisterStyles;