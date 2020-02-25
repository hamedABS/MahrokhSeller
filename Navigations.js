import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";
import {Image, Text, Dimensions} from "react-native";

import Financial from "./forms/finantial/Financial";
import Gallery from "./forms/gallery/Gallery";
import Comments from "./forms/comments/Comments";
import Salon from "./forms/salon/Salon";
import Reserves from "./forms/customer_reserves/Reserves";
import Survey from "./forms/comments/Survey";
import WelcomePage from "./forms/auth/WelcomePage";
import Login from "./forms/auth/LoginPage";
import RegisterClass from "./forms/auth/RegisterPage";
import RegisterClass2 from "./forms/auth/RegisterPage2";
import RegisterPage3 from "./forms/auth/RegisterPage3";
import UploadDocuments from "./forms/auth/UploadDocuments";
import ContractPage from "./forms/auth/ContractPage";
import SalonInfoRegistration from "./forms/auth/SalonInfoRegistration";


import React from "react";
import {I18nManager} from 'react-native';

I18nManager.allowRTL(false);


const {width, height} = Dimensions.get("window");


export const headerBackImag = <Image source={require('./assets/png/left.png')}
                                     style={{width: 20, height: 20}}/>

export const headerTitle = (text) => <Text
    style={{
        fontSize: 16,
        fontFamily: 'IRANSansWebMedium',
        textAlign: 'center',
        alignSelf: 'center',
        width: width / 1.45
    }}>{text}</Text>


export const CommentsStack = createStackNavigator({
    Comments: Comments,
    Survey: {
        screen: Survey,
        navigationOptions: ({navigation}) => ({
            headerTitle: headerTitle(`نظر سنجی`),
            headerBackImage: () => headerBackImag,
        }),
    },
})
CommentsStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName != 'Comments') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}


export const AuthStack = createStackNavigator({
    SalonInfoRegistration:SalonInfoRegistration,
    ContractPage: {
        screen: ContractPage,
        navigationOptions: ({navigation}) => ({
            headerTitle: headerTitle(`قرارداد`),
            headerBackImage: () => headerBackImag,
        }),
    },
    RegisterPage: RegisterClass,
    RegisterPage3: RegisterPage3,
    Welcome: WelcomePage,
    RegisterPage2: RegisterClass2,
    Login: Login,
    UploadDocuments: UploadDocuments,
})

export const FinancialStack = createStackNavigator({
    Financial: Financial
})


export const GalleryStack = createStackNavigator({
    Gallery: Gallery
})

export const SalonStack = createStackNavigator({
    Salon: Salon
})


export const ReservesStack = createStackNavigator({
    Reserves: Reserves
})

export const TabNavigator = createBottomTabNavigator(
    {
        Salon: SalonStack,
        Gallery: GalleryStack,
        Reserves: ReservesStack,
        Financial: FinancialStack,
        Comments: CommentsStack
    },
    {
        initialRouteName: 'Comments',
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon;
                if (routeName == 'Comments') {
                    icon = require('./assets/png/chat.png');
                } else if (routeName == 'Financial') {
                    icon = require('./assets/png/rich.png')
                } else if (routeName == 'Gallery') {
                    icon = require('./assets/png/woman-hair.png')
                } else if (routeName == 'Salon') {
                    icon = require('./assets/png/barbershop.png')
                } else if (routeName == 'Reserves') {
                    icon = require('./assets/png/list.png')
                }
                return <Image style={{width: 20, height: 20, tintColor: tintColor}}
                              source={icon}/>
            },
            headerBackImage: <Image source={require('./assets/png/left.png')}
                                    style={{width: 20, height: 20}}/>
        }), tabBarOptions: {
            activeTintColor: '#FAC918',
            inactiveTintColor: 'rgb(0,0,0)',
        }, headerBackImage: () => <Image source={require('./assets/png/left.png')}
                                         style={{width: 20, height: 20}}/>
    });



