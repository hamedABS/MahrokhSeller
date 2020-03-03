import React, {Component} from "react";
import {View, Dimensions, StyleSheet, Text, TouchableOpacity, Image, TextInput, Switch} from "react-native";
import Modal from 'react-native-modal'
import MyMapView from "../MyMapView";
import authStyles from "../auth/AuthStyles";
import {FromToComponent} from "../subForm/EditSalonInfoForm";
import infoLog from "react-native-web/dist/vendor/react-native/infoLog";


export default class CardManagement extends Component {

    state = {
        cards: [{
            owner: 'مهدی بندار',
            cardNumber: '۵۰۲۲-۲۹۱۰-۸۸۳۸-۷۶۸۸'
        }],
        focusedCard: 0,
        modalIsVisible: false,
        cardNumber: '',
        cardOwner: ''
    }

    deleteCard = (index) => {
        this.state.cards.splice(index, 1)
        this.setState({
            cards: this.state.cards
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.titlesBaseStyle, {fontSize: 12, marginTop: 10}]}>برای حذف به مدت طولانی لمس
                    کنید.</Text>
                <View style={{marginTop: 20, marginBottom: 20}}>
                    {
                        this.state.cards.map((card, index) => {
                            return (
                                <TouchableOpacity
                                    style={[styles.cardTile, this.state.focusedCard == index ? {
                                        borderColor: '#B08C3E',
                                        backgroundColor: 'white',
                                        padding:5
                                    } : null]}
                                    onLongPress={() => this.deleteCard(index)}
                                    key={index}>
                                    <Switch onValueChange={() => this.setState({focusedCard: index})}
                                            value={this.state.focusedCard == index}
                                            thumbColor='#B08C3E'
                                            trackColor={{false: 'rgba(145,145,145,0.44)', true: '#F7DDA4'}}/>

                                    <Text style={styles.titlesBaseStyle}>{card.owner}</Text>
                                    <Text style={styles.titlesBaseStyle}>{card.cardNumber}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                    <Modal isVisible={this.state.modalIsVisible}>
                        <View style={styles.modalContainer}>
                            <View style={[styles.viewItemContainer, {flexDirection: 'row-reverse'},]}>
                                <Text style={[styles.titlesBaseStyle, {width: width / 1.4, marginRight: 20}]}>تعریف
                                    حساب</Text>
                                <TouchableOpacity onPress={() => this.setState({modalIsVisible: false})}>
                                    <Image
                                        source={require('../../assets/png/cancel.png')}
                                        style={{width: 40, height: 40}}
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
                                        source={require('../../assets/png/pay.png')}
                                    />
                                    <TextInput
                                        style={authStyles.txt_input}
                                        placeholder={'شماره کارت'}
                                        keyboardType={'numeric'}
                                        autoCapitalize='words'
                                        onChangeText={(cardNumber) => this.cardNumberOnChange(cardNumber)}
                                        value={this.state.cardNumber}/>
                                </View>
                            </View>

                            <View style={[styles.viewItemContainer]}>
                                <View style={[authStyles.txt_input_container, {
                                    width: width / 1.1,
                                    borderBottomWidth: 0
                                }]}>
                                    <Image
                                        style={[authStyles.txt_input_img]}
                                        source={require('../../assets/png/user.png')}
                                    />
                                    <TextInput
                                        style={authStyles.txt_input}
                                        placeholder='نام دارنده کارت'
                                        autoCapitalize='words'
                                        onChangeText={(cardOwner) => this.setState({cardOwner})}
                                        value={this.state.cardOwner}/>
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => this._confirmOnPress()}>
                                <Text
                                    style={[styles.titlesBaseStyle, {color: '#B08C3E', marginBottom: 10}]}>تایید</Text>
                            </TouchableOpacity>
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

    cardNumberOnChange(cardNumber) {
        let cardNumberTmp = cardNumber;
        let replace = cardNumber.split('-').join("");
        let numbers = replace.length
        if (numbers > 3) {
            let subString;
            cardNumberTmp = ""
            for (let i = 0; i < numbers; i += 4) {
                subString = replace.substr(i, 4);
                if (i % 4 == 0 && i !== 16) {
                    cardNumberTmp += subString + "-"
                } else {
                    cardNumberTmp += subString
                }
            }
            cardNumberTmp = cardNumberTmp.substr(0, cardNumberTmp.length - 1)
        }
        if (numbers <= 16) {
            this.setState({cardNumber: cardNumberTmp})
        }
    }

    _confirmOnPress() {
        let newCard = {
            owner: this.state.cardOwner,
            cardNumber: this.state.cardNumber
        }
        this.setState((prevState) => {
            return {
                modalIsVisible: false,
                cards: [...prevState.cards, newCard]
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
    info: {
        width: width,
        height: height / 5,
        borderBottomColor: "#70707080",
        borderBottomWidth: 1
    },
    titlesBaseStyle: {
        fontSize: 18,
        fontFamily: 'IRANSansWebMedium',
        textAlign: 'center',
        marginRight: 15,
        color: '#00000099',
    },
    cardTile: {
        height: height / 13,
        borderRadius: 5,
        flexDirection: 'row-reverse',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: '#00000099',
        borderWidth: 1.3,
    },
    modalContainer: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: width / 1.1,
        height: height / 3,
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
