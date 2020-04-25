import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import Reserves from "../forms/customer_reserves/Reserves";
import {Dimensions, Image, TouchableOpacity} from "react-native";
import Report from "../forms/finantial/Report";
import Survey from "../forms/Survey";
import Setting from "../forms/salon/Setting";
import {
    CardManagementPage,
    ChangePassword_Page,
    Contract_Page,
    ReportPage,
    SalonInfoSettingPage,
    SettingPage
} from "./SalonStack";
import ReserveDetails from "../forms/customer_reserves/ReserveDetails";
import {headerBackImag, HeaderTitle} from "./navigationConstants";


let headerTitle =
    <Image
        source={require('../assets/png/logo.png')}
        style={{width: 60, height: 60, alignSelf: 'center', marginLeft: Dimensions.get("window").width / 4}}
    />

const ReservesStack = createStackNavigator({
    Reserves: {
        screen: Reserves,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => headerTitle,
            headerRight: () =>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <Image source={require('../assets/png/settings3x.png')}
                           style={{width: 25, height: 25, marginRight: 20, tintColor: '#B08C3E',}}/>
                </TouchableOpacity>,
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.navigate('Report')}>
                    <Image source={require("../assets/png/growth.png")}
                           style={{width: 25, height: 25, tintColor: '#B08C3E', marginLeft: 20}}/>
                </TouchableOpacity>
        })
    },
    Survey: {
        screen: Survey,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`نظر سنجی`),
            headerBackImage: () => headerBackImag,
        },
    },
    ReserveDetails: {
        screen: ReserveDetails,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`جزییات رزرو`),
            headerBackImage: () => headerBackImag,
        },
    },
    Setting: SettingPage,
    CardManagement: CardManagementPage,
    SalonInfoSetting: SalonInfoSettingPage,
    ContractPage: Contract_Page,
    ChangePasswordPage: ChangePassword_Page,
    Report: ReportPage,
})

ReservesStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName != 'Reserves') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}


export default ReservesStack;
