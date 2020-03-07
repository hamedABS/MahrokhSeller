import React, {Component} from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

export default class Financial extends Component {
    state = {
        name: 'inProgress',
        detailsModalIsVisible: false,
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
                        <Text style={[styles.titlesBaseStyle, {color: '#B08C3E', fontSize: 20}]}>۱۲۰۰۰۰</Text>
                        <Text style={styles.titlesBaseStyle}>درآمد شما</Text>
                    </View>
                    <View style={styles.topViewItem}>
                        <Text style={[styles.titlesBaseStyle, {color: 'green', fontSize: 20}]}>۴۰۰۰۰۰</Text>
                        <Text style={styles.titlesBaseStyle}>اعتبار کیف پول</Text>
                    </View>
                </View>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity onPress={() => this.setState({name: "inProgress"})}
                                      style={[styles.chooseOption, this.state.name == "inProgress" ? {backgroundColor: '#B08C3E'} : null]}>
                        <View>
                            <Text
                                style={[styles.titlesBaseStyle, this.state.name == "inProgress" ? {color: 'white'} : null]}>در
                                صف پرداخت</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({name: "done"})}
                                      style={[styles.chooseOption, this.state.name == "done" ? {backgroundColor: '#B08C3E'} : null]}>
                        <View>
                            <Text
                                style={[styles.titlesBaseStyle, this.state.name == "done" ? {color: 'white'} : null]}>پرداخت
                                شده</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Modal isVisible={this.state.detailsModalIsVisible}>
                    <TouchableOpacity style={styles.invoiceView}
                                      onPress={() => this.setState({detailsModalIsVisible: false})}>
                        <View style={styles.invoiceViewFirstPart}>
                            <Text style={styles.itemText}> مجموع سبد خرید: ۹۰۰۰۰ </Text>
                            <Text style={styles.itemText}> تخفیف: ۱۰۰۰۰ تومان </Text>
                            <Text style={[styles.itemText]}>پرداخت شده: ۸۰۰۰۰ تومان </Text>
                        </View>
                        <View style={{width: "100%", height: '30%', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={[styles.itemText, {color: '#B08C3E'}]}>مبلغ باقیمانده: ۰ تومان </Text>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <Table headerTitles={headers} transactions={transactions}
                       openModal={() => this.setState({detailsModalIsVisible: true})}/>
            </View>
        )
    }
}

const Table = (props) => {
    return (
        <View>
            <View style={styles.rowStyle}>
                {
                    props.headerTitles.map((header, index) => {
                        return (
                            <Text key={index}
                                  style={[styles.titlesBaseStyle, {fontSize: 14, width: width / 5}]}>{header}</Text>
                        )
                    })
                }
            </View>
            <View style={{
                height: height / 3, backgroundColor: 'white',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 6,
                paddingBottom: 5
            }}>
                <ScrollView>
                    {
                        props.transactions.map((transaction, index) => {
                            return (
                                <View key={index}
                                      style={[styles.rowStyle, index % 2 == 0 ? {backgroundColor: '#C5C5C5'} : null]}>
                                    <Text style={[styles.titlesBaseStyle, {
                                        fontSize: 14,
                                        width: width / 5
                                    }]}>{transaction.customerName}</Text>
                                    <Text style={[styles.titlesBaseStyle, {
                                        fontSize: 14,
                                        width: width / 5
                                    }]}>{transaction.price}</Text>
                                    <Text style={[styles.titlesBaseStyle, {
                                        fontSize: 14,
                                        width: width / 5
                                    }]}>{transaction.type}</Text>
                                    <Text style={[styles.titlesBaseStyle, {
                                        fontSize: 14,
                                        width: width / 5
                                    }]}>{transaction.date}</Text>
                                    <View style={{width: width / 5, alignItems: 'center'}}>
                                        <TouchableOpacity
                                            onPress={() => props.openModal()}
                                            style={{borderRadius: 50, borderWidth: 1, borderColor: '#B08C3E'}}>
                                            <Image source={require("../../assets/png/eye.png")}
                                                   style={{width: 20, height: 20}}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>

        </View>
    )
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
    rowStyle: {
        width: width,
        padding: 5,
        height: height / 15,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    invoiceView: {
        alignSelf:'center',
        width: width/1.1,
        height: height / 4.7,
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
    itemText: {
        fontSize: 14,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        color: '#00000099',
    },
})

const transactions = [
    {
        customerName: 'سارا احمدی',
        price: '30000',
        type: 'نقدی',
        date: '98/12/12',
    },
    {
        customerName: 'سارا احمدی',
        price: '30000',
        type: 'اینترنتی - نقدی',
        date: '98/12/12',
    },
    {
        customerName: 'سارا احمدی',
        price: '30000',
        type: 'اینترنتی',
        date: '98/12/12',
    },
    {
        customerName: 'سارا احمدی',
        price: '30000',
        type: 'نقدی',
        date: '98/12/12',
    },
    {
        customerName: 'سارا احمدی',
        price: '30000',
        type: 'اینترنتی - نقدی',
        date: '98/12/12',
    },
    {
        customerName: 'سارا احمدی',
        price: '30000',
        type: 'اینترنتی',
        date: '98/12/12',
    },
    {
        customerName: 'سارا احمدی',
        price: '30000',
        type: 'نقدی',
        date: '98/12/12',
    },
    {
        customerName: 'سارا احمدی',
        price: '30000',
        type: 'اینترنتی - نقدی',
        date: '98/12/12',
    },
    {
        customerName: 'سارا احمدی',
        price: '30000',
        type: 'اینترنتی',
        date: '98/12/12',
    },
]
const headers = ['مشتری', 'مبلغ(تومان)', 'نوع', 'تاریخ', 'جزییات']
