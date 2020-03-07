import React, {Component} from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import moment from 'moment-jalali';
import ConfirmationDialog from "../subForm/ConfirmationDialog";


export default class CashOut extends Component {
    state = {
        requests: [{
            amount: '20000',
            requestedDate: '۱۳۹۸/۱۲/۱۲',
            payedDate: '۱۳۹۸/۱۲/۱۵',
            payed: true
        }, {
            amount: '20000',
            requestedDate: '۱۳۹۸/۱۲/۱۲',
            payedDate: '۱۳۹۸/۱۲/۱۷',
            payed: true
        },],
        modalIsVisible: false,
        availableCash: 400000,
        confirmationModalIsVisible: false
    }

    deleteRequest = (index) => {
        this.state.requests.splice(index, 1)
        this.setState({
            requests: this.state.requests
        })
    }
    addRequest = () => {
        let m = moment(moment().format(), 'YYYY/MM/DD')
        let now = m.format('jYYYY/jMM/jDD')
        console.log(now)

        let request = {
            amount: this.state.availableCash,
            requestedDate: now,
            payedDate: '  نامشخص',
            payed: false
        }
        this.setState((prevState) => {
            return {
                requests: [...prevState.requests, request],
                confirmationModalIsVisible: false,
                availableCash: 0
            }
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={[styles.titlesBaseStyle, {fontSize: 12, marginTop: 10}]}>برای حذف به مدت طولانی لمس
                    کنید.</Text>
                <View style={{
                    marginTop: 20,
                    marginBottom: 20,
                    minHeight: height / 4,
                    maxHeight: height / 2,
                    alignItems: 'center'
                }}>
                    <ScrollView>
                        {
                            this.state.requests.map((request, index) => {
                                return (
                                    <TouchableOpacity
                                        style={[styles.tile]}
                                        onLongPress={() => this.deleteRequest(index)}
                                        key={index}>
                                        <Text
                                            style={[styles.titlesBaseStyle, {fontSize: 15}]}>{request.amount} تومان</Text>
                                        <Text style={[styles.titlesBaseStyle, {
                                            fontSize: 15,
                                            width: width / 4
                                        }]}>درخواست {request.requestedDate}</Text>
                                        <Text style={[styles.titlesBaseStyle, {
                                            fontSize: 15,
                                            width: width / 4
                                        }]}>واریز {request.payedDate}</Text>
                                        {
                                            request.payed ? <View style={styles.cover}>
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
                    </ScrollView>
                    <TouchableOpacity style={[{justifyContent: 'center'}]}
                                      onPress={() => this.state.availableCash > 0 ? this.setState({confirmationModalIsVisible: true}) : null}>
                        <Image source={require("../../assets/png/plus.png")}
                               style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                    {
                        this.state.confirmationModalIsVisible ?
                            <ConfirmationDialog message={'آیا مطمئن هستید؟'}
                                                doOnCancel={this._closeModal}
                                                donOnConfirmation={this.addRequest}/>
                            : null
                    }
                </View>
                <View style={{
                    height: height / 15,
                    marginTop: 50,
                    padding: 5,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 6,
                    paddingBottom: 5,
                    borderRadius: 25,
                }}>
                    <Text style={styles.titlesBaseStyle}>مبلغ قابل برداشت: {this.state.availableCash} تومان</Text>
                </View>


            </View>
        )
    }

    _closeModal = () => {
        this.setState({confirmationModalIsVisible: false})
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

    tile: {
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
    cover: {
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
})
