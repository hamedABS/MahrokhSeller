import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {TabNavigator} from "./navigation/Navigations";
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import AuthStack from './navigation/AuthStack'



const AppContainer = createAppContainer(createSwitchNavigator(
    {
        Auth: AuthStack,
        Tab: TabNavigator,
    },
    {
        initialRouteName: 'Tab',
    }
));


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fontLoaded: false,
        }
    }

    async componentDidMount() {
        try {
            await Font.loadAsync({
                'IranSans': require('./assets/fonts/IranianSans_0.ttf'),
                'IRANSansFaNum': require('./assets/fonts/IRANSansFaNum_Light.ttf'),
                'IRANSansWeb': require('./assets/fonts/IRANSansWeb.ttf'),
                'IRANSansWebLight': require('./assets/fonts/IRANSansWeb_Light.ttf'),
                'IRANSansWebMedium': require('./assets/fonts/IRANSansWeb_Medium.ttf'),
                'IRANSansWebBold': require('./assets/fonts/IRANSansWeb_Bold.ttf'),
                'IRANSansWebUltraLight': require('./assets/fonts/IRANSansWeb_UltraLight.ttf'),
                'Ionicons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf')
            });
            this.setState({fontLoaded: true});
        } catch (e) {
            console.warn(e)
        }
    }

    render() {
        if (this.state.fontLoaded) {
            return <AppContainer/>
        } else return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
