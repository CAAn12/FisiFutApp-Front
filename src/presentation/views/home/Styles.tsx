import { StyleSheet } from 'react-native'
import { MyColors } from '../../theme/AppTheme';

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: '50%',
        alignItems: 'center'
    },
    logoImage: {
        height: 250,
        resizeMode: 'contain'
    },
    logoText: {
        color: MyColors.defaultText,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        bottom: 40
    },
    form: {
        width: '100%',
        flex: 0.55,
        position: 'relative',
        bottom: 0,
        top: '45%',
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
    }
});

export default HomeStyles;