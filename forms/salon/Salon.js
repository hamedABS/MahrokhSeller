import React, {Component} from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import PersonnelImageAddComponent from "../subForm/PersonnelImageAddComponent";
import EditSalonInfoForm from "../subForm/EditSalonInfoForm";
import Modal from 'react-native-modal';

export default class Salon extends Component {

    state = {
        editModalIsVisible: false,
        editSalonIntroModalIsVisible: false,
        note: '',
        salonIntro: 'این مجموعه واقع در (زعفرانیه) خیابان مقدس اردبیلی، خیابان ب، کوچه هشتم، پلاک۳ ، طبقه اول است. با' +
            '10 سال تجربه تخصصی در حوزه آرایش و پیرایش و زیبایی همواره تلاش می کند با کادر مجرب، دانش به روز' +
            'و تکنیک های جهانی، بالاترین سطح کیفیت و خدمات را به مشتریان دوست داشتنی خود ارائه دهد. کسب' +
            'عناوین متعدد مدیریتی و خدماتی نشان از همین امر است، اولویت ما همیشه کیفیت و حال خوب مشتریانمان' +
            'است. کادر متخصص سالن مریم رئوف با سالها تجربه و گذراندن بالاترین سطح آموزشها همواره مشاور و' +
            'همیار شما عزیزان هستند. خدمات عروس در این مجموعه، شامل اکستنشن مژه، کراتینه، بوتاکس، گریم، خدمات' +
            'ناخن، کراتیه و ... می باشد. کلیه خدمات زیبایی در این سالن با بالاترین سطح کیفــیت و محصولات' +
            'اورجینال لـورآل فـرانــســـه کلیه خدمات فوق تخصصی عروس با جدیدترین متد روز اروپا ارئه می شود.'
    };


    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                <View style={styles.workingTime}>
                    <Text style={[styles.titlesBaseStyle, {marginRight: 25, alignSelf: 'flex-end'}]}>ساعات کاری</Text>
                    <View style={styles.workingTimeItem}>
                        <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                            <View style={{width: 10, height: 10, backgroundColor: '#B08C3E', borderRadius: 50}}/>
                            <Text style={[styles.workingItemText, {fontSize: 15, marginRight: 10}]}>شنبه الی
                                چهارشنبه</Text>
                        </View>
                        <Text style={[styles.workingItemText, {fontSize: 15}]}>۹-۲۰</Text>
                    </View>
                    <View style={styles.workingTimeItem}>
                        <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                            <View style={{width: 10, height: 10, backgroundColor: '#B08C3E', borderRadius: 50}}/>
                            <Text style={[styles.workingItemText, {fontSize: 15, marginRight: 10}]}>پنجشنبه</Text>
                        </View>
                        <Text style={[styles.workingItemText, {fontSize: 15}]}>۹-۲۰</Text>
                    </View>
                    <View style={styles.workingTimeItem}>
                        <View style={{flexDirection: 'row-reverse', alignItems: 'center'}}>
                            <View style={{width: 10, height: 10, backgroundColor: '#B08C3E', borderRadius: 50}}/>
                            <Text style={[styles.workingItemText, {fontSize: 15, marginRight: 10}]}>جمعه</Text>
                        </View>
                        <Text style={[styles.workingItemText, {fontSize: 15}]}>۹-۲۰</Text>
                    </View>
                    {this.state.editModalIsVisible ? <EditSalonInfoForm close={this._closeEditSalonInfoModal}/> : null}
                    <View style={[styles.workingTimeItem, {width: width - 20, margin: 10}]}>
                        <View style={{width: width / 1.5}}>
                            <Text numberOfLines={1} style={[styles.workingItemText]}>آدرس: زعفرانیه کوچه ناهید نبش
                                ساختمان یاس</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.setState({editModalIsVisible: true})}>
                            <Image
                                source={require('../../assets/png/edit.png')}
                                style={styles.icon}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <PersonnelImageAddComponent/>
                <View style={{padding: 10, width: width}}>
                    <TouchableOpacity style={{flexDirection: 'row-reverse', alignItems: 'center'}}
                                      onPress={() => this.setState({editSalonIntroModalIsVisible: true})}>
                        <Text style={[styles.titlesBaseStyle, {alignSelf: 'flex-end', margin: 10}]}>معرفی سالن</Text>
                        <Image
                            style={styles.icon}
                            source={require('../../assets/png/edit.png')}
                        />
                    </TouchableOpacity>
                    <ScrollView style={{height: height / 2.7}}>
                        <Text style={[styles.workingItemText, {fontSize: 15, textAlign: 'right', marginBottom: 50}]}>
                            {this.state.salonIntro}
                        </Text>
                    </ScrollView>
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
                        <View style={[styles.itemContainer, {
                            flexDirection: 'row-reverse', borderTopWidth: 1,
                            borderTopColor: 'rgba(0,0,0,0.26)'
                        }]}>
                            <Image
                                source={require('../../assets/png/edit.png')}
                                style={styles.icon}
                            />
                            <TextInput
                                style={styles.txt_input}
                                numberOfLines={20}
                                multiline = {true}
                                placeholder='ایجاد یادداشت برای پرسنل و آرایشگاه موردنظر'
                                autoCapitalize='words'
                                onChangeText={(note) => this.setState({note})}
                                value={this.state.note}/>

                        </View>
                        <TouchableOpacity onPress={() => this.confirmOnPress()}>
                            <Text style={[styles.titlesBaseStyle, {color: '#B08C3E'}]}>تایید</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }

    _closeEditSalonInfoModal = () => {
        this.setState({
            editModalIsVisible: false
        })
    }

    confirmOnPress() {
        this.setState({
            salonIntro: this.state.note,
            editSalonIntroModalIsVisible: false
        })
    }
}

const {width, height} = Dimensions.get("window");
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    workingTime: {
        width: width,
        height: height / 4.1,
        borderBottomColor: "#70707080",
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    workingTimeItem: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 1.3,
        marginTop: 5,
        marginRight: 10,
    },
    workingItemText: {
        fontSize: 17,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        color: '#00000099',
    },
    titlesBaseStyle: {
        fontSize: 18,
        fontFamily: 'IRANSansWebMedium',
        textAlign: 'center',
        marginRight: 15,
        color: '#00000099',
    },
    icon: {
        width: 25,
        height: 25,
        tintColor: '#B08C3E',
        marginLeft: 10
    },
    itemContainer: {
        width: width / 1.1,
        height: height / 4,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        alignContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.26)',
        justifyContent: 'space-around',
    },
    txt_input: {
        fontFamily: 'IRANSansFaNum',
        height: 40,
        width: width / 1.2,
        textAlign: 'right',
        writingDirection: 'rtl',
        paddingRight: 10,
    },
    modalContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: width / 1.1,
        height: height / 3,
        marginTop: 20,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: 'white'
    },
    modalTopHeader: {
        fontSize: 15,
        fontFamily: 'IRANSansWebMedium',
        textAlign: 'center',
        color: '#00000099',
        width: width / 1.4,
        marginRight: 20,
    },
    viewItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 1.1,
        borderBottomColor: 'rgba(0,0,0,0.6)',
        borderBottomWidth: 1,
    },
})
