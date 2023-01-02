import { StyleSheet } from "react-native";
import { MyColors } from "../../../../theme/AppTheme";

const CanchaAdminUdpateStyles = StyleSheet.create({
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
        alignItems: 'center'
    },
    logoImage: {
        height: 100,
        resizeMode: 'contain',
        width: 100
    },
    logoPerfil : {
        height: 180,
        width: 180,
        resizeMode: 'contain'
    },
    form: {
        backgroundColor: MyColors.background,
        height: '70%',
        width: '100%',
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 0
    },
    buttonContainer: {
        position: 'absolute',
        marginTop: 300,
        left: 20,
        right: 20,
    },extraButtonsContainer: {
        flexDirection: 'column',
        marginTop: 20,
        marginBottom: 20,
      },
      extraButton: {
        height: 32,
        paddingHorizontal: 16,
        marginBottom: 20,
        backgroundColor: MyColors.secondary
      }
});

export default CanchaAdminUdpateStyles;