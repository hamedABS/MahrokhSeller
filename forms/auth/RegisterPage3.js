import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import authStyles from './AuthStyles';
import MyMapView from "../MyMapView";
import Modal from 'react-native-modal'
import {styles} from '../salon/Salon'


export default class RegisterPage3 extends Component {
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
            }],
            editSalonIntroModalIsVisible: false,
            salonIntro:'برای وارد کردن معرفی سالن لمس کنید.'
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
                    <TouchableOpacity style={[authStyles.txt_input_container]}
                                      onPress={() => this.setState({editSalonIntroModalIsVisible: true})}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/edit.png')}
                        />
                        <Text style={[{
                            color: 'rgba(0,0,0,0.3)', fontFamily: 'IRANSansFaNum', fontSize: 15,
                            textAlign: 'right',
                            alignSelf: 'flex-start',
                            width: width,
                            paddingRight: 10
                        }]}>{this.state.salonIntro}</Text>
                    </TouchableOpacity>

                    <View style={authStyles.txt_input_container}>
                        <Image
                            style={[authStyles.txt_input_img]}
                            source={require('../../assets/png/location.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='آدرس فروشگاه'
                            numberOfLines={1}
                            autoCapitalize='words'
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}/>
                    </View>
                </View>
                <Modal isVisible={this.state.editSalonIntroModalIsVisible}>
                    <View style={styles.modalContainer}>
                        <View style={[styles.viewItemContainer, {flexDirection: 'row-reverse'}]}>
                            <Text style={[styles.modalTopHeader]}>معرفی سالن</Text>
                            <TouchableOpacity onPress={() => this.setState({editSalonIntroModalIsVisible: false})}>
                                <Image
                                    source={require('../../assets/png/cancel.png')}
                                    style={{width: 30, height: 30}}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.viewItemContainer, {flexDirection: 'row-reverse'}]}>
                        <Image
                                source={require('../../assets/png/edit.png')}
                                style={styles.icon}
                            />
                            <TextInput
                                style={{width: width / 1.3, height: height / 4,textAlign:'right'}}
                                numberOfLines={20}
                                multiline = {true}
                                placeholder={'متن معرفی سالن را اینجا وارد کنید.'}
                                autoCapitalize='words'
                                onChangeText={(description) => this.setState({description})}
                                value={this.state.note}/>

                        </View>
                        <TouchableOpacity onPress={() => this.confirmOnPress()}>
                            <Text style={[styles.titlesBaseStyle, {color: '#B08C3E'}]}>تایید</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Text style={[authStyles.btn_register_txt, {color: 'rgba(0,0,0,0.6)'}]}>آدرس را بر روی نقشه تنظیم
                    کنید.</Text>
                <MyMapView width={width} height={height / 4}/>
                <View style={[authStyles.footer, {height: height / 8}]}>
                    <TouchableHighlight style={authStyles.btn_register} onPress={this._onRegisterPressButton}>
                        <Text style={authStyles.btn_register_txt}>ساخت حساب کاربری</Text>
                    </TouchableHighlight>
                </View>
            </KeyboardAvoidingView>
        );
    }
    confirmOnPress() {
        this.setState({
            salonIntro: this.state.description,
            editSalonIntroModalIsVisible: false
        })
    }
}


const {width, height} = Dimensions.get("window");

{
    console.log("width: " + width + " height: " + height)
}
