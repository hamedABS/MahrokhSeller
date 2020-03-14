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
import Report from "../forms/finantial/Report";

export const ReportPage = {
    screen: Report,
    navigationOptions: ({navigation}) => ({
        headerTitle: () => HeaderTitle(`گزارش`),
        headerBackImage: () => headerBackImag,
    }),
};
export const SettingPage = {
    screen: Setting,
    navigationOptions: {
        headerTitle: () => HeaderTitle(`تنظیمات`),
        headerBackImage: () => headerBackImag,
    },
};
export const CardManagementPage = {
    screen: CardManagement,
    navigationOptions: {
        headerTitle: () => HeaderTitle(`معرفی حساب`),
        headerBackImage: () => headerBackImag,
    },
};
export const SalonInfoSettingPage = {
    screen: SalonInfoSetting,
    navigationOptions: {
        headerTitle: () => HeaderTitle(`اطلاعات آرایشگاه`),
        headerBackImage: () => headerBackImag,
    },
};
export const Contract_Page = {
    screen: ContractPage,
    navigationOptions: ({navigation}) => ({
        headerTitle: () => HeaderTitle(`قرارداد`),
        headerBackImage: () => headerBackImag,
    }),
};
export const ChangePassword_Page = {
    screen: ChangePasswordPage,
    navigationOptions: ({navigation}) => ({
        headerTitle: () => HeaderTitle(`تغییر گذرواژه`),
        headerBackImage: () => headerBackImag,
    }),
};
export const DiscountManagementPage = {
    screen: DiscountManagement,
    navigationOptions: {
        headerTitle: () => HeaderTitle(`کد تخفیف`),
        headerBackImage: () => headerBackImag,
    },
};
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
    Setting: SettingPage,
    CardManagement: CardManagementPage,
    DiscountManagement: DiscountManagementPage,
    SalonInfoSetting: SalonInfoSettingPage,
    ContractPage: Contract_Page,
    ChangePasswordPage: ChangePassword_Page,
    Report: ReportPage,
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
