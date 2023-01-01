import React from 'react'
import { View, Image, TextInput, StyleSheet, KeyboardType } from 'react-native'
import { MyColors } from '../theme/AppTheme';

interface Props{
    image: any,
    placeholder: string,
    value: any,
    keyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText
}: Props) => {
  return (
    <View style={styles.formInput}>
        <Image style={styles.formImage}
            source={image}
        />

    <TextInput style={styles.formTextInput}
        placeholder={placeholder}
        placeholderTextColor={MyColors.defaultText}
        keyboardType={keyboardType}
        value={value}
        onChangeText={text=>onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
        onBlur={() => {
            const trimmedValue = value.trimEnd();
            onChangeText(property, trimmedValue);
        }}
        autoComplete="off"
    />
    </View>
  )
}

const styles = StyleSheet.create({
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
    }    
})