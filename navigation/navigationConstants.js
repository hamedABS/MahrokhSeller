import React from 'react'
import {Dimensions, Image, Text, TouchableOpacity} from "react-native";

export const headerBackImag = <Image source={require('../assets/png/left.png')}
                                     style={{width: 25, height: 25}}/>

export const HeaderTitle = (text) => <Text
    style={{
        fontSize: 18,
        fontFamily: 'IRANSansWebMedium',
        textAlign: 'center',
        alignSelf: 'center',
        width: width / 1.45
    }}>{text}</Text>

export const {width, height} = Dimensions.get("window");

