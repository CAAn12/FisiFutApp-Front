import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, KeyboardType, TouchableOpacity } from 'react-native';
import { MyColors } from '../theme/AppTheme';
const eyeIcon = require('../../../assets/open_eye.png');
const eyeOffIcon = require('../../../assets/closed_eye.png');

interface Props {
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
  const [isSecure, setIsSecure] = useState(secureTextEntry);

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
            onChangeText={text => onChangeText(property, text)}
            secureTextEntry={isSecure}
        />

        {property === 'password' && (
            <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
                <Image
                    style={styles.icon}
                    source={isSecure ? eyeOffIcon : eyeIcon}
                />
            </TouchableOpacity>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: MyColors.defaultText,
        color: MyColors.defaultText,
        marginLeft: 10,
        marginRight: 10
    },
    formImage: {
        width: 35,
        height: 35,
        marginTop: 5
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10
    }
});