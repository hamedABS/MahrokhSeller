import {createBottomTabNavigator} from "react-navigation-tabs";
import {I18nManager, Image, StyleSheet, Text} from "react-native";

import Financial from "../forms/finantial/Financial";
import Services from "../forms/services/Services";
import Salon from "../forms/salon/Salon";
import Reserves from "../forms/customer_reserves/Reserves";
import ServicesStack from "./ServiceStack";
import SalonStack from './SalonStack'
import GalleryStack from "./GalleryStack";
import FinancialStack from "./FinancialStack";
import ReservesStack from "./ReserveStack";


import React from "react";

I18nManager.allowRTL(false);


export const TabNavigator = createBottomTabNavigator(
    {
        Salon: SalonStack,
        Gallery: GalleryStack,
        Reserves: ReservesStack,
        Financial: FinancialStack,
        Services: ServicesStack
    },
    {
        initialRouteName: 'Reserves',
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon;
                if (routeName == 'Services') {
                    icon = require('../assets/png/shopping-cart.png');
                } else if (routeName == 'Financial') {
                    icon = require('../assets/png/rich.png')
                } else if (routeName == 'Gallery') {
                    icon = require('../assets/png/woman-hair.png')
                } else if (routeName == 'Salon') {
                    icon = require('../assets/png/retail.png')
                } else if (routeName == 'Reserves') {
                    icon = require('../assets/png/list.png')
                }
                return <Image style={{width: 20, height: 20, tintColor: tintColor}}
                              source={icon}/>
            },
            tabBarLabel: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                if (routeName == 'Services') {
                    return <Text style={[styles.label, {color: tintColor}]}>خدمات</Text>
                } else if (routeName == 'Financial') {
                    return <Text style={[styles.label, {color: tintColor}]}>مالی</Text>
                } else if (routeName == 'Gallery') {
                    return <Text style={[styles.label, {color: tintColor}]}>گالری</Text>
                } else if (routeName == 'Reserves') {
                    return <Text style={[styles.label, {color: tintColor}]}>رزرو مشتریان</Text>
                } else if (routeName == 'Salon') {
                    return <Text style={[styles.label, {color: tintColor}]}>سالن من</Text>
                }
            }
        }), tabBarOptions: {
            activeTintColor: '#B08C3E',
            inactiveTintColor: 'rgb(0,0,0)',
        }, headerBackImage: () => <Image source={require('../assets/png/left.png')}
                                         style={{width: 25, height: 25}}/>
    });


const styles = StyleSheet.create({
    label: {
        textAlign: 'center',
        fontFamily: 'IRANSansWeb',
        fontSize: 11,
    }
})

