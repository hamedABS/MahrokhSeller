import React from 'react'
import {createStackNavigator} from "react-navigation-stack";
import Salon from "../forms/salon/Salon";
import {Image, TouchableOpacity} from "react-native";

import {headerBackImag, HeaderTitle} from "./navigationConstants"
import Setting from "../forms/salon/Setting";
import CardManagement from "../forms/salon/CardManagement";
import ContractPage from "../forms/auth/ContractPage";
import SalonInfoSetting from "../forms/salon/SalonInfoSetting";
import ChangePasswordPage from "../forms/auth/ChangePasswordPage";
import DiscountManagement from "../forms/salon/DiscountManagement";

const SalonStack = createStackNavigator({
    Salon: {
        screen: Salon,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => HeaderTitle(`سالن من`),
            headerRight: () =>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Image source={require('../assets/png/settings3x.png')}
                           style={{width: 25, height: 25, marginRight: 20}}/>
                </TouchableOpacity>,
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.navigate('DiscountManagement')}>
                    <Image source={require("../assets/png/sale.png")}
                           style={{width: 25, height: 25, tintColor: '#B08C3E', marginLeft: 20}}/>
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
    CardManagement: {
        screen: CardManagement,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`معرفی حساب`),
            headerBackImage: () => headerBackImag,
        },
    },
    DiscountManagement:{
        screen:DiscountManagement,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`کد تخفیف`),
            headerBackImage: () => headerBackImag,
        },
    },
    SalonInfoSetting: {
        screen: SalonInfoSetting,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`اطلاعات آرایشگاه`),
            headerBackImage: () => headerBackImag,
        },
    },
    ContractPage: {
        screen: ContractPage,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => HeaderTitle(`قرارداد`),
            headerBackImage: () => headerBackImag,
        }),
    },
    ChangePasswordPage: {
        screen: ChangePasswordPage,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => HeaderTitle(`تغییر گذرواژه`),
            headerBackImage: () => headerBackImag,
        }),

    }
}, {
    initialRouteName: 'Salon',
})


SalonStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName != 'Salon') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}


export default SalonStack;
