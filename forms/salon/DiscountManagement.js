import React, {Component} from "react";
import {View, Dimensions, StyleSheet, Text, TouchableOpacity, Image, TextInput, Switch} from "react-native";
import Modal from 'react-native-modal'
import authStyles from "../auth/AuthStyles";
import Moment from 'moment';
import moment from 'moment-jalali';

import PersianCalendarPicker from "react-native-persian-calendar-picker";


export default class DiscountManagement extends Component {
    state = {
        discounts: [{
            code: 'hmdABS22',
            percent: '20',
            startDate: '۱۳۹۸/۱۲/۱۲',
            endDate: '۱۳۹۸/۱۲/۱۲',
            expired: true
        }, {
            code: 'hmdABS22',
            percent: '20',
            startDate: '۱۳۹۸/۱۲/۱۲',
            endDate: '۱۳۹۸/۱۲/۱۲',
            expired: false
        }],
        modalIsVisible: false,
        startDate: null,
        endDate: null,
        code: '',
        datePickerIsVisible: false,
        isPickingStartDate: true,
        percent: '',
        dateIsValid: true
    }

    deleteDiscount = (index) => {
        this.state.discounts.splice(index, 1)
        this.setState({
            discounts: this.state.discounts
        })
    }

    renderDatePicker = () => {
        return (
            <View style={styles.viewItemContainer}>
                <PersianCalendarPicker
                    style={{opacity: 0.5}}
                    enableDateChange={true}
                    selectedDayColor='#e6b618'
                    isRTL={true}
                    onDateChange={(date) => this.onDateChange(date)}
                    width={350}
                />
            </View>
        )
    }

    onDateChange = (date) => {
        let m = moment(Moment(date).format('YYYY/MM/jDD'), 'YYYY/MM/DD')
        let date2 = m.format('jYYYY/jMM/jDD')
        let dateIsValid;
        let ifConditionIsTrue = this.state.isPickingStartDate ? this.state.endDate !== null : this.state.startDate !== null;
        let startDate = this.state.isPickingStartDate ? date2 : this.state.startDate
        let endDate = !this.state.isPickingStartDate ? date2 : this.state.endDate
        if (ifConditionIsTrue) {
            try {
                let format = moment(startDate, 'jYYYY/jM/jD').format('YYYY-MM-DD');
                let format1 = moment(endDate, 'jYYYY/jM/jD').format('YYYY-MM-DD');
                dateIsValid = Moment(format1).isAfter(Moment(format));
                console.log(dateIsValid)
                this.setState({dateIsValid})
            } catch (e) {
                console.log("hey");
                console.log(e)
            }
        }
        if (this.state.isPickingStartDate) {
            this.setState({startDate: date2, datePickerIsVisible: false})
        } else {
            this.setState({endDate: date2, datePickerIsVisible: false})
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={[styles.titlesBaseStyle, {fontSize: 12, marginTop: 10}]}>برای حذف به مدت طولانی لمس
                    کنید.</Text>
                <View style={{marginTop: 20, marginBottom: 20}}>
                    {
                        this.state.discounts.map((discount, index) => {
                            return (
                                <TouchableOpacity
                                    style={[styles.discountTile, discount.expired ? {} : null]}
                                    onLongPress={() => this.deleteDiscount(index)}
                                    key={index}>
                                    <Text style={styles.titlesBaseStyle}>{discount.code}</Text>
                                    <Text style={styles.titlesBaseStyle}>٪{discount.percent}</Text>
                                    <Text style={styles.titlesBaseStyle}>از {discount.startDate}</Text>
                                    <Text style={styles.titlesBaseStyle}>تا {discount.endDate} </Text>
                                    {
                                        discount.expired ? <View style={styles.expirationCover}>
                                            <Image
                                                source={require('../../assets/png/time-out.png')}
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                }}
                                            />
                                        </View> : null
                                    }

                                </TouchableOpacity>
                            )
                        })
                    }
                    <Modal isVisible={this.state.modalIsVisible}>
                        <View style={styles.modalContainer}>
                            <View style={[styles.viewItemContainer, {flexDirection: 'row-reverse'}]}>
                                <Text style={[styles.titlesBaseStyle, {width: width / 1.4, marginRight: 20}]}>کد
                                    تخفیف</Text>
                                <TouchableOpacity onPress={() => this.setState({modalIsVisible: false})}>
                                    <Image
                                        source={require('../../assets/png/cancel.png')}
                                        style={{width: 30, height: 30}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.viewItemContainer]}>
                                <View style={[authStyles.txt_input_container, {
                                    width: width / 1.1,
                                    borderBottomWidth: 0
                                }]}>
                                    <Image
                                        style={[authStyles.txt_input_img]}
                                        source={require('../../assets/png/key.png')}
                                    />
                                    <TextInput
                                        style={authStyles.txt_input}
                                        placeholder={'کد تخفیف'}
                                        autoCapitalize='words'
                                        onChangeText={(code) => this.setState({code})}
                                        value={this.state.code}/>
                                </View>
                            </View>
                            <View style={[styles.viewItemContainer]}>
                                <View style={[authStyles.txt_input_container, {
                                    width: width / 1.1,
                                    borderBottomWidth: 0
                                }]}>
                                    <Image
                                        style={[authStyles.txt_input_img]}
                                        source={require('../../assets/png/discount.png')}
                                    />
                                    <TextInput
                                        style={authStyles.txt_input}
                                        placeholder={'درصد تخفیف'}
                                        keyboardType={'numeric'}
                                        autoCapitalize='words'
                                        onChangeText={(percent) => this.setState({percent})}
                                        value={this.state.percent}/>
                                </View>
                            </View>

                            <View style={[styles.viewItemContainer, {justifyContent: 'space-around'}]}>
                                <View style={{flexDirection: 'row-reverse'}}>
                                    <Text style={[styles.text, {marginBottom: 18}]}>شروع</Text>
                                    <TouchableOpacity onPress={() => this.setState({
                                        datePickerIsVisible: true,
                                        isPickingStartDate: true
                                    })}
                                                      style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Image
                                            source={require('../../assets/png/select_date.png')}
                                            style={{width: 30, height: 30, marginRight: 10}}/>
                                        <Text style={[styles.text, {fontSize: 12}]}>{this.state.startDate}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flexDirection: 'row-reverse'}}>
                                    <Text
                                        style={[styles.text, {marginBottom: 18}]}>پایان</Text>
                                    <TouchableOpacity onPress={() => this.setState({
                                        datePickerIsVisible: true,
                                        isPickingStartDate: false
                                    })}
                                                      style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Image
                                            source={require('../../assets/png/select_date.png')}
                                            style={{width: 30, height: 30, marginRight: 10}}/>
                                        <Text
                                            style={[styles.text, {fontSize: 12}]}>{this.state.endDate}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {
                                this.state.datePickerIsVisible ? this.renderDatePicker() : null
                            }
                            <TouchableOpacity onPress={() => this._confirmOnPress()}>
                                <Text
                                    style={[styles.titlesBaseStyle, {color: '#B08C3E', marginBottom: 10}]}>تایید</Text>
                            </TouchableOpacity>
                            {
                                !this.state.dateIsValid ?
                                    <Text style={[styles.text, {color: 'red'}]}>تاریخ نامعتبر است.</Text> : null
                            }
                        </View>
                    </Modal>
                </View>
                <TouchableOpacity style={[{justifyContent: 'center'}]}
                                  onPress={() => this.setState({
                                      modalIsVisible: true
                                  })}>
                    <Image source={require("../../assets/png/plus.png")}
                           style={{width: 30, height: 30}}/>
                </TouchableOpacity>
            </View>
        )
    }

    _confirmOnPress() {
        let newDiscount = {
            code: this.state.code,
            percent: this.state.percent,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            expired: false
        }
        this.setState((prevState) => {
            return {
                modalIsVisible: false,
                discounts: [...prevState.discounts, newDiscount]
            }
        })
    }
}
const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    titlesBaseStyle: {
        fontSize: 18,
        fontFamily: 'IRANSansWebMedium',
        textAlign: 'center',
        marginRight: 15,
        color: '#00000099',
    },
    text: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        marginRight: 15,
        color: '#00000099',
    },

    discountTile: {
        height: height / 13,
        width: width - 15,
        borderRadius: 5,
        flexDirection: 'row-reverse',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: '#B08C3E',
        borderWidth: 1.3,
        backgroundColor: 'white',
        padding: 5
    },
    expirationCover: {
        zIndex: 1,
        position: 'absolute',
        height: height / 13,
        width: width - 15,
        borderRadius: 5,
        flexDirection: 'row-reverse',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255,255,255,0.69)',
    },
    modalContainer: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: width / 1.1,
        minHeight: height / 3,
        borderRadius: 10
    },
    viewItemContainer: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        width: width / 1.1,
        borderBottomColor: 'rgba(0,0,0,0.6)',
        borderBottomWidth: 1,
    },
})
