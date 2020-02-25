import authStyles, {height, width} from "../AuthStyles";
import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import {categories} from '../SalonInfoRegistration'
import Modal from 'react-native-modal'

import * as DocumentPicker from 'expo-document-picker';


export default class PersonnelRegistrationForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            serviceCategoriesIsFocused: [false, false, false, false, false],
            personnelPhoto: '',
            phoneNumber: '',
            name: '',
            serviceTypes: []
        }
    }


    render() {
        let {personnelPhoto} = this.state;
        let photo = personnelPhoto == '' ? require("../../../assets/png/woman.png") : {uri: personnelPhoto.uri}
        return (
            <Modal isVisible={true}>
                <View style={styles.modalContainer}>
                    <View style={[styles.viewItemContainer, {flexDirection: 'row-reverse'}]}>
                        <Text style={[styles.text, {marginTop: 10, width: width / 1.4, marginRight: 20}]}>ثبت
                            کارمندان</Text>
                        <TouchableOpacity onPress={() => this.props.close()}>
                            <Image
                                source={require('../../../assets/png/Group-2384.png')}
                                style={{width: 40, height: 40}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.text}>افزودن عکس کارمند</Text>
                        <View>
                            <Image
                                source={photo}
                                style={{width: width / 4, height: width / 4, borderRadius: 50}}/>
                            <TouchableOpacity
                                onPress={() => this._addPersonnelImage()}
                                style={{width: 20, height: 20, position: 'absolute', marginTop: 80, marginLeft: 12}}>
                                <Image
                                    source={require('../../../assets/png/plus.png')}
                                    style={{width: 20, height: 20}}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={[authStyles.txt_input_container, {width: width / 1.1}]}>
                            <Image
                                style={authStyles.txt_input_img}
                                source={require('../../../assets/png/woman.png')}
                            />
                            <TextInput
                                style={[authStyles.txt_input, {width: width / 1.1}]}
                                placeholder='نام و نام خانوادگی'
                                autoCapitalize='words'
                                onChangeText={(name) => this.setState({name})}
                                value={this.state.name}/>
                        </View>
                        <View style={[authStyles.txt_input_container, {width: width / 1.1}]}>
                            <Image
                                style={authStyles.txt_input_img}
                                source={require('../../../assets/png/call.png')}
                            />
                            <TextInput
                                style={[authStyles.txt_input, {width: width / 1.1}]}
                                placeholder="شماره تلفن همراه"
                                keyboardType="phone-pad"
                                onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                                value={this.state.phoneNumber}/>
                        </View>
                    </View>
                    <View style={styles.viewItemContainer}>
                        <Text style={styles.text}>تخصص کارمند</Text>
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {
                                categories.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index}
                                                          onPress={() => this._selectService(index)}
                                                          style={[styles.serviceType, this.state.serviceCategoriesIsFocused[index] ? {borderColor: '#B08C3E'} : null]}>
                                            <Text style={styles.text}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this._confirmOnPress()}>
                        <Text style={[styles.text, {color: '#B08C3E'}]}>تایید</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    _selectService(index) {
        let serviceCategoriesIsFocused = this.state.serviceCategoriesIsFocused;
        serviceCategoriesIsFocused[index] = !serviceCategoriesIsFocused[index]
        let serviceTypes = []
        serviceCategoriesIsFocused.forEach((item, index) => {
            if (item) {
                serviceTypes.push(categories[index])
            }
        })

        this.setState({
            serviceCategoriesIsFocused: serviceCategoriesIsFocused,
            serviceTypes: serviceTypes
        })
    }

    _addPersonnelImage = async () => {
        let result = await DocumentPicker.getDocumentAsync({type: 'image/*'});
        if (!result.cancelled && result.type !== 'cancel') {
            this.setState({personnelPhoto: result})
        }
    }

    _confirmOnPress() {
        let personnel = {};
        personnel.photo = this.state.personnelPhoto;
        personnel.name = this.state.name;
        personnel.phoneNumber = this.state.phoneNumber;
        personnel.expertness = this.state.serviceTypes;
        this.props.addPeresonnel(personnel)
        this.props.close()
    }
}


const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: width / 1.1,
        height: height / 1.7,
        borderRadius: 10
    },
    viewItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row-reverse',
        width: width / 1.1,
        borderBottomColor: 'rgba(0,0,0,0.6)',
        borderBottomWidth: 1,
    },
    text: {
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        fontSize: 18
    },
    serviceType: {
        width: width / 4 + 5,
        height: height / 20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        margin: 5
    }
})
