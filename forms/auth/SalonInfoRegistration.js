import authStyles, {height, width} from "./AuthStyles";
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View,} from 'react-native';

import * as DocumentPicker from 'expo-document-picker';
import WorkingTimeRegistrationForm from "../subForm/WorkingTimeRegistrationForm";
import SalonCategoryService from "../subForm/SalonCategoryService";
import PersonnelImageAddComponent from "../subForm/PersonnelImageAddComponent";

export default class SalonInfoRegistration extends React.Component {
    constructor() {
        super()
        this.state = {
            salonImages: [],
            profileImageUri: null,
            checked: false,
            uploadedImageCount: 0,
            currentImage: 0,
            isImageViewVisible: false,
            serviceCategoriesIsFocused: [false, false, false, false, false],
            timeFocused: [false, false, false],
            timeFocusedIndex: -1,
            personnels: [],
            personnelModalIsVisible: false
        }
    }

    render() {
        let {profileImageUri} = this.state;
        let photo = profileImageUri == null ? require("../../assets/png/woman.png") : {uri: profileImageUri}
        let salonImageBeforeSelection = require("../../assets/png/graphic-design.png");
        let personnels = this.state.personnels;

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', padding: 5}}>
                <View style={[styles.viewItemContainer, {height: height / 4}]}>
                    <View>
                        <Image
                            source={photo}
                            style={{width: width / 4, height: width / 4, borderRadius: 50}}
                        />
                        <TouchableOpacity
                            onPress={this._pickImage}
                            style={{width: 20, height: 20, position: 'absolute', marginTop: 80, marginLeft: 12}}>
                            <Image
                                source={require('../../assets/png/plus.png')}
                                style={{width: 20, height: 20}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{width: width / 1.5, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>

                        {
                            [0, 1, 2, 3, 4].map((item) => {
                                let salonImage = this.state.salonImages[item];
                                return (
                                    <View key={item}>
                                        <Image
                                            source={salonImage == null ? salonImageBeforeSelection : {uri: salonImage.uri}}
                                            style={{width: width / 5, height: width / 5, margin: 2,}}
                                        />
                                        {salonImage != null ? <TouchableOpacity
                                            style={{
                                                width: 20,
                                                height: 20,
                                                position: 'absolute',
                                                alignSelf: 'flex-end',
                                            }}
                                            onPress={() => this._removeImage(item)}>
                                            <Image
                                                source={require('../../assets/png/minus.png')}
                                                style={{width: 20, height: 20}}
                                            />
                                        </TouchableOpacity> : null}
                                    </View>
                                )
                            })
                        }
                        <TouchableOpacity onPress={() => this._addImageOnPress()}>
                            <Image
                                source={require("../../assets/png/add-image.png")}
                                style={{width: width / 5, height: width / 5}}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={[styles.viewItemContainer, {
                    height: height / 5,
                    flexDirection: 'column',
                    alignItems: 'flex-end'
                }]}>
                    <Text style={[styles.text, {marginTop: 5, marginRight: 10}]}>خدمات</Text>
                    <SalonCategoryService/>
                </View>
                <PersonnelImageAddComponent/>
                {
                    this._renderWorkingTimeModal()
                }
                <View style={[styles.viewItemContainer, {
                    height: height / 8, flexDirection: 'column',
                }]}>
                    <Text style={[styles.text]}>ساعات کاری</Text>
                    <View style={{flexDirection: 'row-reverse'}}>
                        <TouchableOpacity onPress={() => this._selectTime(0)}
                                          style={[styles.timeTile, {borderColor: '#B08C3E'}]}>
                            <Text style={[styles.text, {fontSize: 15}]}>شنبه تا چهارشنبه</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._selectTime(1)}
                                          style={[styles.timeTile]}>
                            <Text style={[styles.text, {fontSize: 15}]}>پنجشنبه</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._selectTime(2)}
                                          style={[styles.timeTile]}>
                            <Text style={[styles.text, {fontSize: 15}]}>جمعه</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableHighlight style={authStyles.btn_register} onPress={() => this._onPressButton()}>
                    <Text style={authStyles.btn_register_txt}>تایید اطلاعات</Text>
                </TouchableHighlight>
            </View>
        );
    }


    _closePersonnelModal = () => {
        this.setState({
            personnelModalIsVisible: false
        })
    }

    _onPressButton = () => {
        this.props.navigation.navigate('Tab');
    }

    _addImageOnPress = async () => {
        let count = this.state.uploadedImageCount
        if (count < 5) {
            let result = await DocumentPicker.getDocumentAsync({type: 'image/*'});
            if (!result.cancelled && result.type !== 'cancel') {
                let salonImages = this.state.salonImages;
                salonImages.push(result)
                count++;
                this.setState({
                    uploadedImageCount: count,
                    salonImages: salonImages
                })
            }
        }
    }

    _addPersonnel = async (personnel) => {
        let personnels = this.state.personnels;
        personnels.push(personnel)
        this.setState({
            personnels: personnels
        })
    }

    _removeImage(item) {
        let salonImages = this.state.salonImages;
        salonImages.splice(item, 1)
        this.setState({salonImages: salonImages})
    }

    _selectService(index) {
        this.state.serviceCategoriesIsFocused[index] = !this.state.serviceCategoriesIsFocused[index];
        this.setState({
            serviceCategoriesIsFocused: this.state.serviceCategoriesIsFocused
        })
    }

    _selectTime(index) {
        this.setState({
            timeFocusedIndex: index
        })
    }

    _closeTimeWorkingModal = () => {
        this.setState({
            timeFocusedIndex: -1
        })
    }

    _renderWorkingTimeModal() {
        let time = ['شنبه تا چهارشنبه', 'پنجشنبه', 'جمعه']
        if (this.state.timeFocusedIndex != -1) {
            return <WorkingTimeRegistrationForm time={time[this.state.timeFocusedIndex]}
                                                close={this._closeTimeWorkingModal}/>
        }
    }
}

export const categories = [
    {
        name: 'زیبایی مو',
        image: require('../../assets/png/hairDair.png')
    },
    {
        name: 'درمانی مو',
        image: require('../../assets/png/hairDair.png')
    },
    {
        name: ' صورت',
        image: require('../../assets/png/face.png')
    },
    {
        name: ' ناخن',
        image: require('../../assets/png/nail.png')
    },
    {
        name: ' برداشتن مو',
        image: require('../../assets/png/hairDair.png')
    }, {
        name: ' برداشتن مو',
        image: require('../../assets/png/hairDair.png')
    },
]

const styles = StyleSheet.create({
    text: {
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        fontSize: 18
    },
    viewItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        width: width,
        borderBottomColor: 'rgba(0,0,0,0.6)',
        borderBottomWidth: 1,
    },
    personnelView: {
        alignItems: 'flex-end',
        width: width,
        borderBottomColor: 'rgba(0,0,0,0.6)',
        borderBottomWidth: 1,
        height: height / 5
    },
    serviceCategoryTile: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: width / 4,
        borderRadius: 10,
        height: width / 4,
        borderWidth: 1.5,
        borderColor: 'rgba(0,0,0,0.6)'
    },
    personnelTile: {
        width: width / 5,
        marginRight: 5,
        height: width / 5,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    personnelImage: {
        width: width / 5,
        height: width / 5,
        borderRadius: 50,
    },
    titlesBaseStyle: {
        fontSize: 20,
        fontFamily: 'IRANSansFaNum',
        color: 'black',
        textAlign: 'center'
    },
    timeTile: {
        width: width / 3 - 10,
        height: height / 22,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        margin: 5
    }
})




