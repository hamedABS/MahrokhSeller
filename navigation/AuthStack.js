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

const AuthStack = createStackNavigator({
    SalonInfoRegistration: SalonInfoRegistration,
    ContractPage: {
        screen: ContractPage,
        navigationOptions: ({navigation}) => ({
            headerTitle: () => HeaderTitle(`قرارداد`),
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

export default AuthStack;
