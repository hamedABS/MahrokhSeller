import React, {Component} from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Reserve extends Component {
    state = {
        name: 'inProgress',
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <View style={styles.topViewItem}>
                        <Text style={[styles.titlesBaseStyle, {fontSize: 20}]}>۱۵۲</Text>
                        <Text style={styles.titlesBaseStyle}>مشتریان این ماه</Text>
                    </View>
                    <View style={styles.topViewItem}>
                        <Text style={[styles.titlesBaseStyle, {color: '#B08C3E', fontSize: 20}]}>۱۴۲</Text>
                        <Text style={styles.titlesBaseStyle}>مشتریان راضی</Text>
                    </View>
                    <View style={styles.topViewItem}>
                        <Text style={[styles.titlesBaseStyle, {color: 'red', fontSize: 20}]}>۱۰</Text>
                        <Text style={styles.titlesBaseStyle}>مشتریان کنسلی</Text>
                    </View>
                </View>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity onPress={() => this.setState({name: "inProgress"})}
                                      style={[styles.chooseOption, this.state.name == "inProgress" ? {backgroundColor: '#B08C3E'} : null]}>
                        <View>
                            <Text
                                style={[styles.titlesBaseStyle,{fontFamily: 'IRANSansWebMedium'}, this.state.name == "inProgress" ? {color: 'white'} : null]}>آخرین
                                رزروها</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({name: "done"})}
                                      style={[styles.chooseOption, this.state.name == "done" ? {backgroundColor: '#B08C3E'} : null]}>
                        <View>
                            <Text
                                style={[styles.titlesBaseStyle,{fontFamily: 'IRANSansWebMedium'}, this.state.name == "done" ? {color: 'white'} : null]}>رزرو
                                انجام شده</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{width:width,height:height/1.5,paddingBottom:5}}>
                    <ScrollView contentContainerStyle={{alignItems: 'center'}}
                                style={{width: width, height: height / 3,}}>

                        {
                            mockData.map((item, index) => {
                                return <SalonReservedItem key={index} data={item} name={this.state.name}
                                                          parentProps={this.props}/>
                            })
                        }
                        <View style={{height: 10}}></View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export class SalonReservedItem extends React.Component {

    render() {
        let data = [this.props.data];
        let name = this.props.name;
        let parentProps = this.props.parentProps;
        return (
            data.map((item, i) => {
                return (
                    <View key={i} style={styles.itemContainer}>
                        <Image
                            source={require('../../assets/png/brownHairGirl.png')}
                            style={styles.itemImage}/>
                        <View style={{margin:10}}>
                            <Text style={[styles.titlesBaseStyle,{textAlign: 'right'}]}>{item.customerName}</Text>
                            <Text style={[styles.textBaseStyle]}>{item.services}</Text>
                            <Text style={[styles.textBaseStyle]}>تاریخ: {item.date}</Text>
                            <Text style={[styles.textBaseStyle]}>زمان: {item.time}</Text>
                        </View>
                        <TouchableOpacity style={styles.details}
                                          onPress={() => name == 'inProgress' ? parentProps.navigation.navigate('ReserveDetails') :
                                              parentProps.navigation.navigate('Survey')}>
                            <Text
                                style={[styles.titlesBaseStyle, {fontSize: 13,fontFamily: 'IRANSansWebMedium'}]}>{name === 'inProgress' ? 'جزییات' : 'نظرسنجی'}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })
        )
    }
}


const {width, height} = Dimensions.get("window");


const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center',
    },
    topView: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: width / 1.1,
        height: height / 8,
        borderRadius: 7,
        backgroundColor: 'white',
        margin: 3,
        borderColor: "#B08C3E",
        borderWidth: 1
    },
    topViewItem: {
        alignItems: 'center',
        alignContent: 'center'
    },
    optionsContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#00000029',
        height: height / 11,
        width: width,
        backgroundColor: '#fcfcfc'
    },
    chooseOption: {
        width: width / 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        height: height / 18,
        borderRadius: 25,
    },
    titlesBaseStyle: {
        fontSize: 16,
        fontFamily: 'IRANSansWebMedium',
        textAlign: 'center',
        color: '#00000099',
    },
    textBaseStyle:{
        fontSize: 13,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'right',
        color: '#00000099',
    },
    rowStyle: {
        width: width,
        padding: 5,
        height: height / 15,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    itemContainer: {
        flexDirection: 'row-reverse',
        alignItems:'center',
        justifyContent:'center',
        width: width / 1.1,
        borderRadius: 7,
        backgroundColor: 'white',
        marginTop: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    itemImage: {
        width: width / 4,
        height: width / 4,
        borderRadius: 50,
        overflow: 'hidden'
    },
    details: {
        width: width / 6,
        justifyContent: 'center',
        height: '20%',
        borderRadius: 25,
        borderColor: '#B08C3E',
        borderWidth: 1,
        margin: 10,
        marginRight:40,
        alignSelf: 'flex-end'

    }
})

const mockData = [
    {
        customerName: 'سارا رضایی',
        services: 'کاشت ناخن اصلاح مو',
        date: '۹۸/۱۲/۱۲',
        time: '۱۲:۳۰'
    },{
        customerName: 'سارا رضایی',
        services: 'کاشت ناخن اصلاح مو',
        date: '۹۸/۱۲/۱۲',
        time: '۱۲:۳۰'
    },{
        customerName: 'سارا رضایی',
        services: 'کاشت ناخن اصلاح مو',
        date: '۹۸/۱۲/۱۲',
        time: '۱۲:۳۰'
    },{
        customerName: 'سارا رضایی',
        services: 'کاشت ناخن اصلاح مو',
        date: '۹۸/۱۲/۱۲',
        time: '۱۲:۳۰'
    },{
        customerName: 'سارا رضایی',
        services: 'کاشت ناخن اصلاح مو',
        date: '۹۸/۱۲/۱۲',
        time: '۱۲:۳۰'
    },
]
