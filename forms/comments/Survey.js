import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView} from 'react-native';
import StarRating from 'react-native-star-rating'

export default class Survey extends React.Component {


    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={[styles.itemContainer, {height: height / 4}]}>
                    <Image
                        source={require('../../assets/png/brownHairGirl.png')}
                        style={{width: width / 4, height: width / 4, borderRadius: 50}}
                    />
                    <Text style={[styles.itemText, {fontSize: 18}]}>خانم سارا احمدی</Text>
                </View>
                <View style={[styles.itemContainer, {
                    padding: 10,
                    marginTop: 25,
                    height: height / 3,
                    justifyContent: 'space-around',
                }]}>
                    {questions.map((item, i) => {
                        return (
                            <View key={i} style={styles.questionItem}>
                                <Text style={[styles.itemText, {fontSize: width / 28}]}>{item}</Text>
                                <View style={{flexDirection: 'row-reverse'}}>
                                    <TouchableOpacity
                                        onPress={() => this.yesNoBtnPress(i, true)}
                                        style={[styles.yesNoBtn, surveyResult[i] ? {borderColor: '#B08C3E'} : null, {marginLeft: 5}]}>
                                        <Text style={[styles.itemText, {fontSize: 14}]}>بله</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.yesNoBtn, !surveyResult[i] ? {borderColor: '#B08C3E'} : null]}
                                        onPress={() => this.yesNoBtnPress(i, false)}>
                                        <Text style={[styles.itemText, {fontSize: 14}]}>خیر</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                    <View style={styles.questionItem}>
                        <Text style={[styles.itemText, {fontSize: width / 28}]}>میزان رضایت شما از آرایشگاه؟</Text>
                        <StarRating
                            disabled={true}
                            starSize={23}
                            emptyStarColor='#707070'
                            fullStarColor='#e6b618'
                            maxStars={5}
                            rating={4}
                        />
                    </View>
                </View>
                <View style={{
                    width: width,
                    height: height / 8,
                    justifyContent: 'center',
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0,0,0,0.26)',
                    flexDirection: 'row-reverse',
                    padding: 15
                }}>
                    <Image
                        source={require('../../assets/png/edit.png')}
                        style={styles.icon}
                    />
                    <Text
                        style={[styles.itemText, {marginLeft: 10}]}>خیلی ممنون از خدمات خوبی که ارائه دادید.
                        تشکر ویژه از اپ زیبایی که شمارو معرفی کرد</Text>
                </View>
                <TouchableOpacity style={{marginTop: 15}} onPress={() => this.props.navigation.goBack()}>
                    <View style={styles.btn}>
                        <Text style={styles.btn_save_txt}>بسیار خب</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

const {width, height} = Dimensions.get("window");
const questions = ['از برخورد پرسنل راضی بودید ؟', 'کیفیت ارائه کار در سطح مطلوب بود؟', 'برای خدمات بعدی این آرایشگاه را \nانتخاب می کنید ؟']
const surveyResult = [true, false, true]

const styles = StyleSheet.create({
    itemContainer: {
        width: width,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.26)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        fontSize: 12,
        fontFamily: 'IRANSansFaNum',
    },
    itemImage: {
        width: width / 3,
        height: height / 8,
        margin: 6,
        borderRadius: 10,
        overflow: 'hidden'
    },
    questionItem: {
        flexDirection: 'row-reverse',
        padding: 8,
        width: width,
        height: height / 6.5,
        justifyContent: 'space-between'
    },
    yesNoBtn: {
        width: 40,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#707070'
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: '#e6b618',
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginRight: 10
    },
    txt_input: {
        fontFamily: 'IRANSansFaNum',
        height: 40,
        width: width / 1.2,
        textAlign: 'right',
        writingDirection: 'rtl',
        paddingRight: 10,
        alignSelf: 'flex-start'
    },
    btn_save_txt: {
        fontFamily: 'IRANSansWeb',
        fontSize: 18,
        textAlign: 'center',
        padding: 8,
        color: 'white'
    },
    btn: {
        width: width / 2,
        height: height / 13,
        alignItems: 'center',
        backgroundColor: '#e6b618',
        borderRadius: 50,
    },
})

const mockData = [
    {
        id: 1,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    },
    {
        id: 2,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    }, {
        id: 3,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    },
    {
        id: 43,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    },
    {
        id: 43,
        salonName: 'سالن کایزن',
        service: 'کاشت ناخن',
        salonImageSource: '../../assets/png/salon1.png',
        date: '۱۲ شهریور ساعت ۱۰ صبح'
    },
]
