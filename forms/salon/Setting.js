import React from 'react';
import {
    Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Share, Linking
} from 'react-native';
import ConfirmationDialog from '../subForm/ConfirmationDialog'
import Modal from 'react-native-modal';


export default class Setting extends React.Component {

    constructor() {
        super();
        this.state = {
            modalIsVisible: false,
            chargeItem: '0',
            purchase: '',
            photoUri: null,
            name: 'کایزن',
            salonIsOpened: true,
            exitModalIsVisible: false
        }
    }

    render() {
        let {photoUri} = this.state;
        let photo = photoUri == null ? require("../../assets/png/salon1.png") : {uri: photoUri}
        let salonClosedPhoto = require("../../assets/png/closed.png")
        let salonOpenedPhoto = require("../../assets/png/open.png")
        let phoneNumber = '09178187580';
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{
                    height: height / 5,
                    width: width / 2,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'space-around',
                    alignSelf: 'flex-end',
                    marginLeft: 25,
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SalonInfoSetting', {
                        photoUri: photoUri,
                        updateProfilePhoto: (uri) => this._updateProfilePhoto(uri),
                        updateName: (name) => this._updateName(name)
                    })}>
                        <Image
                            source={photo}
                            style={{width: width / 4, height: width / 4, borderRadius: 50}}
                        />
                    </TouchableOpacity>
                    <Text style={[{
                        fontFamily: 'IRANSansWebMedium',
                        fontSize: 18,
                        color: '#323232'
                    }]}>{this.state.name}</Text>
                </View>
                <View style={[styles.everyItem, {justifyContent: 'space-between'}]}>
                    <TouchableOpacity style={{flexDirection: 'row-reverse'}}
                                      onPress={() => this.props.navigation.navigate('CardManagement')}>
                        <Image
                            source={require('../../assets/png/pay.png')}
                            style={styles.icon}/>
                        <Text style={styles.txt}>معرفی حساب</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.everyItem}
                                  onPress={() => this.props.navigation.navigate('SalonInfoSetting', {
                                      photoUri: photoUri,
                                      updateProfilePhoto: (uri) => this._updateProfilePhoto(uri),
                                      updateName: (name) => this._updateName(name)
                                  })}>
                    <Image
                        source={require('../../assets/png/retail.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>اطلاعات آرایشگاه</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.everyItem}
                                  onPress={() => this.props.navigation.navigate('ContractPage', {
                                      dontShowConfirmBtn: 'yes'
                                  })}>
                    <Image
                        source={require('../../assets/png/Path-427.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>شرایط و قوانین</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.everyItem}
                                  onPress={() => this.props.navigation.navigate('ChangePasswordPage')}>
                    <Image
                        source={require('../../assets/png/locked.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>تغییر گذرواژه</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.everyItem} onPress={() => this._onShare()}>
                    <Image
                        source={require('../../assets/png/growth.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>گزارش</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.everyItem} onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
                    <Image
                        source={require('../../assets/png/telephone.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>تماس با پشتیبانی</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.everyItem} onPress={() => this.setState({exitModalIsVisible: true})}>
                    <Image
                        source={require('../../assets/png/exit.png')}
                        style={styles.icon}/>
                    <Text style={styles.txt}>خروج</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.setState({
                    salonIsOpened: !this.state.salonIsOpened
                })}>
                    <Image
                        source={this.state.salonIsOpened ? salonOpenedPhoto : salonClosedPhoto}
                        style={{width: 100, height: 100, marginTop: 20}}/>
                </TouchableOpacity>

                {
                    this.state.exitModalIsVisible ?
                         <ConfirmationDialog message={'آیا مطمئن هستید می خواهید خارج شوید؟'}
                                             doOnCancel={this._closeModal}
                                             donOnConfirmation/>

                        /*ConfirmationDialog('آیا مطمئن هستید میخواهدی خارج شوید؟', this._closeModal, null)*/ : null
                }
            </View>
        )
    }

    _closeModal = () => {
        this.setState({exitModalIsVisible: false})
    }

    _onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'اپلیکیشن ماهرخ کد معرف ۲۵۱۲۵',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }


    _updateProfilePhoto = (uri) => {
        this.setState({
            photoUri: uri
        })
    }

    _updateName = (name) => {
        this.setState({
            name: name
        })
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
        alignItems: 'center',
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
    chargeItem: {
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        width: width / 4 - 30,
        height: 35,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        margin: 5
    },
    modalContainer: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: width / 1.1,
        height: height / 2,
        borderRadius: 10
    },
    modalHeader: {
        borderBottomColor: 'rgba(0,0,0,0.4)',
        height: height / 10,
        width: width / 1.1,
        padding: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        flexDirection: 'row-reverse',
    },
    modalFooter: {
        borderTopColor: 'rgba(0,0,0,0.4)',
        borderTopWidth: 1,
        backgroundColor: 'white',
        height: height / 10,
        width: width / 1.1,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    modalHeaderText: {
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: width / 1.3,
        alignContent: 'center'
    },
    itemContainer: {
        width: width / 1.3,
        height: 40,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
})
