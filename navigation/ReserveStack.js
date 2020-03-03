import {createStackNavigator} from "react-navigation-stack";
import Reserves from "../forms/customer_reserves/Reserves";

const ReservesStack = createStackNavigator({
    Reserves: Reserves
})

export default ReservesStack;
