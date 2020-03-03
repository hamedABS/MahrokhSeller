import React, {Component} from 'react';
import {
    StyleSheet, Text, TextInput, View, Image, TouchableOpacity,
    Dimensions, TouchableHighlight, CheckBox, KeyboardAvoidingView,
} from 'react-native';
import authStyles from "./AuthStyles";

export default class ChangePasswordPage extends React.Component {
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
            }}></Text>
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
            currentPassword: '',
            newPassword: '',
            repeatPassword: ''
        }
    }

    _onPressButton = () => {
        this.props.navigation.goBack();
    }


    render() {
        return (
            <KeyboardAvoidingView style={styles.container}
                                  behavior="padding" enabled>
                <View style={styles.content}>
                    <View style={styles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/locked.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='رمز عبور فعلی'
                            secureTextEntry={true}
                            autoCompleteType='off'
                            onChangeText={(currentPassword) => this.setState({currentPassword})}
                            value={this.state.currentPassword}/>

                    </View>
                    <View style={styles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/locked.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='رمز عبور جدید'
                            secureTextEntry={true}
                            autoCompleteType='off'
                            onChangeText={(newPassword) => this.setState({newPassword})}
                            value={this.state.newPassword}/>

                    </View>
                    <View style={styles.txt_input_container}>
                        <Image
                            style={authStyles.txt_input_img}
                            source={require('../../assets/png/locked.png')}
                        />
                        <TextInput
                            style={authStyles.txt_input}
                            placeholder='تکرار رمز عبور'
                            secureTextEntry={true}
                            autoCompleteType='off'
                            onChangeText={(repeatPassword) => this.setState({repeatPassword})}
                            value={this.state.repeatPassword}/>

                    </View>
                </View>
                <TouchableOpacity style={[authStyles.btn_register, {alignSelf: 'center'}]}
                                  onPress={this._onPressButton}>
                    <Text style={authStyles.btn_register_txt}>ذخیره</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        height: height / 4,
        marginTop: 50,
    },
    txt_input_container: {
        height: height / 15,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.5)'
    },

    txt_input: {
        fontFamily: 'IRANSansFaNum',
        height: height / 15,
        width: width,
        fontSize: 14,
        color: 'rgba(0,0,0,0.5)',
        textAlign: 'right',
        writingDirection: 'rtl',
    },

    txt_input_img: {
        height: 20,
        width: 20,
        marginRight: 10,
        marginLeft: 10,
        tintColor: '#B08C3E'
    },
    btn_save_txt: {
        fontFamily: 'IRANSansWeb',
        fontSize: 18,
        textAlign: 'center',
        padding: 8,
        color: 'white'
    },
    btn: {
        width: width / 2,
        height: height / 13,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B08C3E',
        borderRadius: 50,
    },
});
