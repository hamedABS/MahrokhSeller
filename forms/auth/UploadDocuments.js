import authStyles, {width, height} from "./AuthStyles";
import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default class UploadDocuments extends React.Component {
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
            phoneNumber: '',
            password: '',
            checked: false
        }
    }

    _onPressButton = () => {
        this.props.navigation.navigate('Tab');
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', padding: 5}}>
                <Text style={styles.text}>لطفا مدارک خود را جهت تایید محل،به صورت کامل آپلود کرده.
                    توجه شود که که مدارک ارسالی باید برای مدیریت سالن باشد.
                    حجم فایل حداکثر ۲ مگابایت باید باشد</Text>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={() => this._pickDocument()}>
                        <Image
                            source={require('../../assets/png/attachment.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>پشت و رو کارت ملی</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => this._pickLicence()}>
                        <Image
                            source={require('../../assets/png/attachment.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>جواز کسب</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => this._pickBirthCertificate()}>
                        <Image
                            source={require('../../assets/png/attachment.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>صفحه اول شناسنامه</Text>
                    </TouchableOpacity>
                </View>
                <TouchableHighlight style={authStyles.btn_register} onPress={() => this._onRegisterPressButton()}>
                    <Text style={authStyles.btn_register_txt}>ارسال مدارک</Text>
                </TouchableHighlight>
            </View>
        );
    }


    _pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({type: 'image/*'});
        console.log(result);
    }

    _pickLicence = async () => {
        let result = await DocumentPicker.getDocumentAsync({type: 'application/pdf'});
        console.log(result);
    }
    _pickBirthCertificate = async () => {
        let result = await DocumentPicker.getDocumentAsync({type: 'image/*'});
        console.log(result);
    }
    _onRegisterPressButton = () => {
        this.props.navigation.navigate('Tab');
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        fontSize: 18
    },
    btn: {
        flexDirection: 'row-reverse',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 1.3,
        height: height / 12,
        borderRadius: 25,
        borderColor: '#B08C3E',
        borderWidth: 1,
    },
    icon: {
        width: 25,
        height: 25,
        tintColor: '#B08C3E',
        marginLeft: 10
    }
})




