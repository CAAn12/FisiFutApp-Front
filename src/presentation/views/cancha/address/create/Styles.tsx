import { StyleSheet } from "react-native";
import { MyColors } from "../../../../theme/AppTheme";

const CanchaAddressCreateStyles = StyleSheet.create({
    container: {
        backgroundColor: MyColors.background,
        flex: 1
    },
    imageContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: '40%',
        alignItems: 'center'
    },    
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%',
        alignItems: 'center'
    },
    logoImage: {
        height: 100,
        resizeMode: 'contain',
        width: 100
    },
    logoPerfil : {
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    form: {
        backgroundColor: MyColors.background,
        height: '65%',
        width: '100%',
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 0
    },
    buttonContainer: {
        position: 'absolute',
        marginTop: 350,
        left: 20,
        right: 20,
    }
});

export default CanchaAddressCreateStyles;