import React from 'react';
import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
    TouchableOpacity
} from 'react-native';
import authStyles from "./AuthStyles";


export default class ForgotPasswordPage extends React.Component {
    constructor() {
        super()
        this.state = {
            phoneNumber: '',
            password: '',
            checked: false
        }
    }

    _onPressButton = () => {
        this.props.navigation.navigate('ForgotPasswordPage2', {isForgotPage: true});
    }

    render() {
        return (
            <KeyboardAvoidingView style={authStyles.container}
                                  behavior="padding" enabled>
                <View style={styles.content}>
                    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10, padding: 15}}>
                        <Text style={[styles.txt, {fontSize: 16}]}>به منظور بازیابی رمز عبور خود شماره تماس خود را
                            بصورت صحیح در کادر زیر وارد کنید</Text>
                    </View>
                    <View style={styles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/telephone.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder="شماره تلفن همراه"
                            keyboardType="phone-pad"
                            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                            value={this.state.phoneNumber}/>

                    </View>
                </View>
                <View style={authStyles.footer}>
                    <TouchableHighlight onPress={this._onPressButton}>
                        <View style={authStyles.btn_register}>
                            <Text style={authStyles.btn_register_txt}>تایید شماره تلفن</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    content: {
        height: height / 3,
    },
    txt_input_container: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        height: 40,
        marginTop: 20,
    },
    txt: {
        color: 'rgba(0,0,0,0.6)',
        fontFamily: 'IRANSansWeb',
        textAlign: 'center',
    },
});
