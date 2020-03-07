import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import authStyles from "./AuthStyles";


export default class RegisterClass2 extends Component {


    constructor() {
        super()
        this.state = {
            minute: 2,
            second: 60,
            code: ''
        }
    }

    componentDidMount() {
        let s = this.state.second;
        let m = this.state.minute;
        var inter = setInterval(() => {
            if (s == 0) {
                m--;
                if (m == 0) {
                    clearInterval(inter);
                } else {
                    s = 60;
                }
                this.setState({second: s, minute: m})

            } else {
                s--;
                this.setState({second: s})
            }
        }, 100);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    _onPressButton = () => {
        this.props.navigation.navigate('Tab');
    }

    render() {
        return (
            <KeyboardAvoidingView style={authStyles.container}
                                  behavior="padding" enabled>

                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10, padding: 15}}>
                    <Text style={[styles.txt, {fontSize: 18, marginBottom: 20}]}>لطفا کد ارسال شده را وارد کنید</Text>
                    <Text style={[styles.txt, {fontSize: 16}]}>برای تایید شماره تلفن، لطفا کد ارسال شده را در کادر زیر
                        وارد کنید در صورتی که
                        کد برایتان ارسال نشده، درخواست ارسال مجدد کد را ارسال کنید.</Text>
                </View>

                <View style={[authStyles.content, {alignItems: 'center'}]}>
                    <TextInput
                        style={styles.txt_input}
                        placeholder="کد"
                        keyboardType="numeric"
                        onChangeText={(code) => this.setState({code})}
                        value={this.state.txt}/>
                    <TouchableHighlight>
                        <Text style={styles.txt}>ارسال دوباره کد؟</Text>
                    </TouchableHighlight>
                    <Text style={styles.txt}>{this.state.minute}:{this.state.second}</Text>
                </View>

                <View style={authStyles.footer}>
                    <TouchableHighlight onPress={this._onPressButton}>
                        <View style={authStyles.btn_register}>
                            <Text style={authStyles.btn_register_txt}>تایید شماره تلفن</Text>
                        </View>
                    </TouchableHighlight>
                    {!this.props.navigation.getParam('isForgotPage') ? <View style={authStyles.rules_chk}>
                        <Text style={[authStyles.rules_txt, {color: '#B08C3E'}]}>ویرایش اطلاعات</Text>
                    </View> : null}


                </View>
            </KeyboardAvoidingView>
        );
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    txt: {
        color: 'rgba(0,0,0,0.6)',
        fontFamily: 'IRANSansWeb',
        textAlign: 'center',
    },
    txt_input: {
        height: 60,
        width: width / 3,
        paddingRight: 10,
        borderWidth: 1,
        borderColor: '#B08C3E',
        borderRadius: 10,
        textAlign: "center",
        fontSize: 20,
        fontFamily: 'IRANSansWeb'
    },
});
