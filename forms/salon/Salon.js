import React, {Component} from "react";
import {View, Dimensions, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import PersonnelImageAddComponent from "../subForm/PersonnelImageAddComponent";
import EditSalonInfoForm from "../subForm/EditSalonInfoForm";

export default class Salon extends Component {

    state = {
        editModalIsVisible: false
    }


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
                    <Text style={[styles.titlesBaseStyle, {alignSelf: 'flex-end', margin: 10}]}>معرفی سالن</Text>
                    <ScrollView style={{height: height / 2.7}}>
                        <Text style={[styles.workingItemText, {fontSize: 15, textAlign: 'right'}]}>
                            این مجموعه واقع در (زعفرانیه) خیابان مقدس اردبیلی، خیابان ب، کوچه هشتم، پلاک۳ ، طبقه اول
                            است. با
                            10 سال تجربه تخصصی در حوزه آرایش و پیرایش و زیبایی همواره تلاش می کند با کادر مجرب، دانش به
                            روز
                            و تکنیک های جهانی، بالاترین سطح کیفیت و خدمات را به مشتریان دوست داشتنی خود ارائه دهد. کسب
                            عناوین متعدد مدیریتی و خدماتی نشان از همین امر است، اولویت ما همیشه کیفیت و حال خوب
                            مشتریانمان
                            است. کادر متخصص سالن مریم رئوف با سالها تجربه و گذراندن بالاترین سطح آموزشها همواره مشاور و
                            همیار شما عزیزان هستند. خدمات عروس در این مجموعه، شامل اکستنشن مژه، کراتینه، بوتاکس، گریم،
                            خدمات
                            ناخن، کراتیه و ... می باشد. کلیه خدمات زیبایی در این سالن با بالاترین سطح کیفــیت و محصولات
                            اورجینال لـورآل فـرانــســـه کلیه خدمات فوق تخصصی عروس با جدیدترین متد روز اروپا ارئه می
                            شود.
                        </Text>
                    </ScrollView>
                </View>
            </View>
        )
    }

    _closeEditSalonInfoModal = () => {
        this.setState({
            editModalIsVisible: false
        })
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    workingTime: {
        width: width,
        height: height / 4.5,
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
    }
})
