import {createStackNavigator} from "react-navigation-stack";
import Services from "../forms/services/Services";
import {HeaderTitle} from "./navigationConstants"

export const ServicesStack = createStackNavigator({
    Services: {
        screen: Services,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => HeaderTitle(`خدمات سالن                  `),
        })
    },
})
ServicesStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName != 'Services') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

export default ServicesStack;
