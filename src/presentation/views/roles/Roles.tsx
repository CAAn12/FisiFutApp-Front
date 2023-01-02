import React, { useState } from 'react'
import { Dimensions, FlatList, Text, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel';
import { RolesItem } from './Item';
import useViewModel from './ViewModel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigator/MainStackNavigator';

interface Props extends StackScreenProps<RootStackParamList, 'RolesScreen'>{};

export const RolesScreen = ( {navigation, route}: Props ) => {
    const { cliente } = useViewModel();
    const width =  Dimensions.get('window').width;
    const height =  Dimensions.get('window').height;

    const [mode, setMode] = useState<any>('horizontal-parallax');
    const [snapDirection, setSnapDirection] = useState<'left'|'right'>('left');

    return (
        <GestureHandlerRootView 
            style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
            <View>
                <Carousel
                    loop = {false}
                    width = {width}
                    height = {height / 2}
                    autoPlay = {false}
                    data = { cliente?.roles! }
                    scrollAnimationDuration = {750}
                    renderItem = { ({item}) => 
                        <RolesItem
                            rol = { item }
                            height = { 420 }
                            width = { width - 100 }
                            navigation = { navigation }
                        />
                    }
                    modeConfig = {{
                        snapDirection,
                        stackInterval: 30
                    }}
                    mode = { mode }
                />
            </View>
        </GestureHandlerRootView>
    )
}