import { StyleSheet } from 'react-native';
import { MyColors } from '../../../theme/AppTheme';

const ProfileInfoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MyColors.background
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: '57.5%',
        alignItems: 'center'
    },
    logoImage: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        borderRadius: 100,
        borderColor: MyColors.tertiary,
        borderWidth: 2
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
        height: '50%',
        position: 'absolute',
        bottom: 0,
        padding: 30
    },
    formText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: MyColors.defaultText
    },
    formImage: {
        height: 40,
        width: 40  
    },
    formInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    formContent: {
        marginLeft: 15,
        color: MyColors.defaultText
    },
    formTextDescription: {
        color: MyColors.tertiary    
    },
    logout: {
        position: 'absolute',
        alignSelf: 'center',
        top: 50,
        right: 10
    },
    logoutImage: {
        width: 60,
        height: 60
    }
});

export default ProfileInfoStyles;