import React from 'react'
import {createStackNavigator} from "react-navigation-stack";
import Financial from "../forms/finantial/Financial";
import {headerBackImag, HeaderTitle} from "./navigationConstants";
import {Image, TouchableOpacity} from "react-native";
import CashOut from "../forms/finantial/CashOut";
import {CardManagementPage, ReportPage, SettingPage} from "./SalonStack";
import CardManagement from "../forms/salon/CardManagement";

const FinancialStack = createStackNavigator({
    Financial: {
        screen: Financial,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => HeaderTitle(`مالی`),
            headerRight: () =>
                <TouchableOpacity onPress={() => navigation.navigate('CashOut')}>
                    <Image source={require('../assets/png/wallet.png')}
                           style={{width: 25, height: 25, marginRight: 20, tintColor: '#B08C3E',}}/>
                </TouchableOpacity>,
            headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.navigate('CardManagement')}>
                    <Image source={require("../assets/png/pay.png")}
                           style={{width: 25, height: 25, tintColor: '#B08C3E', marginLeft: 20}}/>
                </TouchableOpacity>
        })
    },
    CashOut: {
        screen: CashOut,
        navigationOptions: {
            headerTitle: () => HeaderTitle(`درخواست واریز`),
            headerBackImage: () => headerBackImag,
        },
    },
    Setting: SettingPage,
    CardManagement: CardManagementPage,
    Report: ReportPage,
});

FinancialStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName != 'Financial') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
};

export default FinancialStack;
