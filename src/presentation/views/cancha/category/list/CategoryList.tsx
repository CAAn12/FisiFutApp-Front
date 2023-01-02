import { useEffect } from 'react'
import { FlatList, Image, Text, View, ToastAndroid } from 'react-native';
import { CanchaListItem } from './Item';
import useViewModel from './ViewModel'

export const CanchaAdminListScreen = () => {
    const {canchas, responseMessage, getCanchas, deleteCancha} = useViewModel();

    useEffect(() => {
        getCanchas(); 
    }, [])

    useEffect(() => {
        if(responseMessage !== ''){
            ToastAndroid.show(responseMessage, ToastAndroid.LONG);
        }
    }, [responseMessage])
    
    return (
        <View style = {{flex: 1, backgroundColor: 'black'}}>
            <FlatList style = {{flex: 1}}
                data={canchas}
                keyExtractor={ (item) => item.id! }
                renderItem={ ({item}) => <CanchaListItem cancha = {item} remove = {deleteCancha}/>}
            />
        </View>
    )
}