import React, {Component} from 'react';
import {Dimensions, Image, KeyboardAvoidingView, Text, TextInput, TouchableHighlight, View,} from 'react-native';
import authStyles from './AuthStyles';
import MyMapView from "../MyMapView";


export default class RegisterPage3 extends Component {
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
            }}>اطلاعات سالن</Text>
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
            description: '',
            password: '',
            repeatPassword: '',
            checked: false,
            location: '',
            markers: [],
            region: {},
            coords: [{
                latitude: 35.726981,
                longitude: 51.424158
            }]
        }
    }

    _onRegisterPressButton = () => {
        this.props.navigation.navigate('UploadDocuments');
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
                            placeholder='نام فروشگاه'
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
                            placeholder="شماره تماس فروشگاه"
                            keyboardType="phone-pad"
                            onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                            value={this.state.phoneNumber}/>

                    </View>
                    <View style={authStyles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/edit.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='توضیحات فروشگاه'
                            autoCapitalize='words'
                            onChangeText={(description) => this.setState({description})}
                            value={this.state.description}/>
                    </View>

                    <View style={authStyles.txt_input_container}>
                        <Image
                            style={[authStyles.txt_input_img]}
                            source={require('../../assets/png/location.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='آدرس فروشگاه'
                            autoCapitalize='words'
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}/>
                    </View>
                </View>
                <Text style={[authStyles.btn_register_txt,{color:'rgba(0,0,0,0.6)'}]}>آدرس را بر روی نقشه تنظیم کنید.</Text>
                <MyMapView/>
                <View style={[authStyles.footer, {height: height / 8}]}>
                    <TouchableHighlight style={authStyles.btn_register} onPress={this._onRegisterPressButton}>
                        <Text style={authStyles.btn_register_txt}>ساخت حساب کاربری</Text>
                    </TouchableHighlight>
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const {width, height} = Dimensions.get("window");

{
    console.log("width: " + width + " height: " + height)
}
