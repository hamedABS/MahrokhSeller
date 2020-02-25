import React, {Component} from 'react';
import {
    StyleSheet, Text, TextInput, View, Image,
    Dimensions, TouchableHighlight, CheckBox, KeyboardAvoidingView,
} from 'react-native';
import authStyles from './AuthStyles';


export default class RegisterClass extends Component {
    static navigationOptions = ({navigation}) => {
        let headerBackImage = <Image source={require('../../assets/png/left.png')}
                                     style={{width: 20, height: 20}}
        />;
        let headerTitle =
            <Text style={{
                textAlign: 'center',
                fontFamily: 'IRANSansWeb',
                width: width / 1.4,
                fontSize: 16
            }}>عضویت</Text>
        return {
            headerBackImage: () => {
                return headerBackImage
            },
            headerTitle: () => {
                return headerTitle
            },
        };
    };

    constructor() {
        super()
        this.state = {
            name: '',
            phoneNumber: '',
            email: '',
            password: '',
            repeatPassword: '',
            checked: false
        }
    }

    _onRegisterPressButton = () => {
        this.props.navigation.navigate('RegisterPage2');
    }

    render() {
        return (
            <KeyboardAvoidingView style={authStyles.container}
                                  behavior="padding" enabled>
                <View style={authStyles.content}>
                    <View style={authStyles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/woman.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='نام و نام خانوادگی'
                            autoCapitalize='words'
                            onChangeText={(name) => this.setState({name})}
                            value={this.state.name}/>
                    </View>
                    <View style={authStyles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/call.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder="شماره تلفن همراه"
                            keyboardType="phone-pad"
                            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                            value={this.state.phoneNumber}/>

                    </View>
                    <View style={authStyles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/mail.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='ایمیل'
                            autoCapitalize='words'
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}/>
                    </View>
                    <View style={authStyles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/locked.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='رمز عبور'
                            secureTextEntry={true}
                            autoCompleteType='off'
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}/>

                    </View>
                    <View style={authStyles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/locked.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='تکرار رمز عبور'
                            secureTextEntry={true}
                            onChangeText={(repeatPassword) => this.setState({repeatPassword})}
                            value={this.state.repeatPassword}/>
                    </View>
                </View>
                <View style={authStyles.footer}>
                    <TouchableHighlight style={authStyles.btn_register} onPress={this._onRegisterPressButton}>
                        <Text style={authStyles.btn_register_txt}>تایید و ادامه</Text>
                    </TouchableHighlight>
                    <Text style={[authStyles.rules_txt, {fontSize: 13}]}> * لطفا قبل از استفاده از ماهرخ حتما شرایط و قوانین
                        مطالعه شود.</Text>
                    <View style={authStyles.rules_chk}>
                        <CheckBox
                            value={this.state.checked}
                            onChange={() => this.setState({checked: !this.state.checked})}/>
                        <Text style={authStyles.rules_txt}>شرایط و قوانین را می پذریم.</Text>
                    </View>

                </View>
            </KeyboardAvoidingView>
        );
    }
}


const {width, height} = Dimensions.get("window");

{
    console.log("width: " + width + " height: " + height)
}
