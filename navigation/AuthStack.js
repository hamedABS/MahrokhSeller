import {createStackNavigator} from "react-navigation-stack";
import SalonInfoRegistration from "../forms/auth/SalonInfoRegistration";
import ContractPage from "../forms/auth/ContractPage";
import RegisterClass from "../forms/auth/RegisterPage";
import RegisterPage3 from "../forms/auth/RegisterPage3";
import WelcomePage from "../forms/auth/WelcomePage";
import RegisterClass2 from "../forms/auth/RegisterPage2";
import Login from "../forms/auth/LoginPage";
import UploadDocuments from "../forms/auth/UploadDocuments";
import {headerBackImag, HeaderTitle} from "./navigationConstants";
import ForgotPasswordPage from "../forms/auth/ForgotPasswordPage";

const AuthStack = createStackNavigator({
    Welcome: WelcomePage,
    RegisterPage: RegisterClass,
    SalonInfoRegistration: SalonInfoRegistration,
    ContractPage: {
        screen: ContractPage,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => HeaderTitle(`قرارداد`),
            headerBackImage: () => headerBackImag,
        }),
    },
    ForgotPasswordPage:{
        screen: ForgotPasswordPage,
        navigationOptions:{
            headerTitle: () => HeaderTitle(`فراموشی رمز`),
            headerBackImage: () => headerBackImag,
        },
    },
    RegisterPage3: {
        screen: RegisterPage3,
        navigationOptions:{
            headerTitle: () => HeaderTitle(`اطلاعات سالن`),
            headerBackImage: () => headerBackImag,
        },

    },
    RegisterPage2: {
        screen: RegisterClass2,
        navigationOptions:{
            headerTitle: () => HeaderTitle(`عضویت`),
            headerBackImage: () => headerBackImag,
        },
    },
    ForgotPasswordPage2: {
        screen: RegisterClass2,
        navigationOptions:{
            headerTitle: () => HeaderTitle(`فراموشی رمز`),
            headerBackImage: () => headerBackImag,
        },
    },

    Login: Login,
    UploadDocuments: {
        screen: UploadDocuments,
        navigationOptions:{
            headerTitle: () => HeaderTitle(`ارسال مدارک`),
            headerBackImage: () => headerBackImag,
        },
    },
})

export default AuthStack;
