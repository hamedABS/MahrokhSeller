import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';


// import Constants from 'expo-constants';
// import * as Permissions from 'expo-permissions';

export default class SalonInfoSetting extends React.Component {

    constructor() {
        super()
        this.state = {
            salonOwnersName: '',
            salonName: '',
            phoneNumber: '',
            salonPhoneNumber: '',
            checked: false,
            salonImage: null,
            photoUri: null
        }
    }

    componentDidMount() {
        this.getPermissionAsync();
        let photoUri = this.props.navigation.getParam("photoUri");
        this.setState({
            salonImage: {
                uri: photoUri
            }
        })

    }

    render() {
        let {salonImage} = this.state;
        let photo = salonImage == null ? require("../../assets/png/woman.png") : {uri: salonImage.uri}
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={[styles.itemContainer, {height: height / 4}]}>
                    <TouchableOpacity onPress={() => this._pickImage()}>
                        <Image
                            source={photo}
                            style={{width: width / 4, height: width / 4, borderRadius: 50}}
                        />
                        <Image
                            source={require('../../assets/png/plus.png')}
                            style={{position: 'absolute', marginTop: 80, marginLeft: 12, width: 20, height: 20}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.everyItem}>
                    <Image
                        source={require('../../assets/png/retail.png')}
                        style={styles.icon}/>
                    <TextInput
                        style={styles.txt_input}
                        defaultValue="Tehran"
                        placeholder='نام آرایشگاه'
                        autoCapitalize='words'
                        onChangeText={(salonName) => this.setState({salonName})}
                        value={this.state.salonName}/>
                </View>
                <View style={styles.everyItem}>
                    <Image
                        source={require('../../assets/png/user.png')}
                        style={styles.icon}/>
                    <TextInput
                        style={styles.txt_input}
                        placeholder='نام صاحب آرایشگاه'
                        autoCapitalize='words'
                        onChangeText={(salonOwnersName) => this.setState({salonOwnersName})}
                        value={this.state.salonOwnersName}/>
                </View>
                <View style={styles.everyItem}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/png/mobile.png')}
                    />
                    <TextInput
                        style={styles.txt_input}
                        defaultValue='09385136659'
                        placeholder="شماره تلفن همراه"
                        keyboardType="phone-pad"
                        onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                        value={this.state.phoneNumber}/>
                </View>
                <View style={styles.everyItem}>
                    <Image
                        style={styles.icon}
                        source={require('../../assets/png/call.png')}
                    />
                    <TextInput
                        style={styles.txt_input}
                        defaultValue='09385136659'
                        placeholder="شماره تماس آرایشگاه"
                        keyboardType="phone-pad"
                        onChangeText={(salonPhoneNumber) => this.setState({salonPhoneNumber})}
                        value={this.state.salonPhoneNumber}/>
                </View>
                <TouchableHighlight style={styles.btn_save} onPress={this._onRegisterPressButton}>
                    <Text style={styles.btn_save_txt}>ذخیره</Text>
                </TouchableHighlight>
            </View>
        )
    }


    _pickImage = async () => {
        let result = await DocumentPicker.getDocumentAsync({type: 'image/*'});
        if (result.type !== 'cancel') {
            this.setState({
                salonImage: result
            })
        }
    };

    getPermissionAsync = async () => {
    }

    _onRegisterPressButton = () => {
        this.props.navigation.state.params.updateName(this.state.salonName);
        this.props.navigation.state.params.updateProfilePhoto(this.state.salonImage.uri);
        this.props.navigation.goBack();
    }
}


const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    everyItem: {
        flexDirection: 'row-reverse',
        width: width,
        height: height / 14,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.26)',
        alignItems: 'center'
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
        marginLeft: 5,
        tintColor: '#B08C3E'
    },
    txt: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        color: '#323232'
    },
    txt_input: {
        fontFamily: 'IRANSansFaNum',
        width: width,
        textAlign: 'right',
        writingDirection: 'rtl',
        paddingRight: 10
    },
    btn_save_txt: {
        fontFamily: 'IRANSansWeb',
        fontSize: width / 23,
        textAlign: 'center',
        color: 'white'
    },
    btn_save: {
        margin: 10,
        width: width / 3,
        height: height / 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B08C3E',
        borderRadius: 50,
        marginTop: 50
    },
    itemContainer: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

