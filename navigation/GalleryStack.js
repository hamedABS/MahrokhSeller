import {createStackNavigator} from "react-navigation-stack";
import Gallery from "../forms/gallery/Gallery";
import {headerBackImag, HeaderTitle} from "./navigationConstants";
import React from "react";
import {TouchableOpacity,Image} from "react-native";
import Setting from "../forms/salon/Setting";
import SalonStack from "./SalonStack";

const GalleryStack = createStackNavigator({
    Gallery: {
        screen: Gallery,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => HeaderTitle(`گالری تصاویر                `),
            headerRight: () =>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Image source={require('../assets/png/settings3x.png')}
                           style={{width: 25, height: 25, marginRight: 20, tintColor: '#B08C3E',}}/>
                </TouchableOpacity>,
        })
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`تنظیمات`),
            headerBackImage: () => headerBackImag,
        },
    },
})

GalleryStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName != 'Gallery') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

export default GalleryStack
