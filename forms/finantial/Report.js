import React, {Component} from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View, Picker} from 'react-native';
import {LineChart} from "react-native-chart-kit"
import CustomersMonthlyReport from "../subForm/CustomersMonthlyReport1";
import FinancialMonthlyReport from "../subForm/FinancialMonthlyReport";

export default class Report extends Component {
    state = {
        name: 'financial',
        month: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity onPress={() => this.setState({name: "financial"})}
                                      style={[styles.chooseOption, this.state.name == "financial" ? {backgroundColor: '#B08C3E'} : null]}>
                        <View>
                            <Text
                                style={[styles.titlesBaseStyle, this.state.name == "financial" ? {color: 'white'} : null]}>گزارش
                                مالی</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({name: "customers"})}
                                      style={[styles.chooseOption, this.state.name == "customers" ? {backgroundColor: '#B08C3E'} : null]}>
                        <View>
                            <Text
                                style={[styles.titlesBaseStyle, this.state.name == "customers" ? {color: 'white'} : null]}>گزارش
                                مشتریان</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: "row-reverse",
                    alignItems: 'center',
                    width: width / 1.5,
                    justifyContent: 'space-around',
                    borderColor: '#B08C3E',
                    borderWidth: 1,
                    borderRadius: 5,
                    margin: 10,
                    backgroundColor: 'white'
                }}>
                    <Text style={styles.titlesBaseStyle}>ماه مورد نظر</Text>
                    <Picker selectedValue={this.state.month}
                            style={{height: 50, width: 150}}
                            onValueChange={(itemValue, itemIndex) => {
                                console.log(itemValue)
                                return this.setState({month: itemValue})
                            }}
                            itemStyle={{color: 'red'}}>
                        <Picker.Item label={'فروردین'} value={1}/>
                        <Picker.Item label={'اردیبهشت'} value={2}/>
                        <Picker.Item label={'خرداد'} value={3}/>
                        <Picker.Item label={'تیر'} value={4}/>
                        <Picker.Item label={'مرداد'} value={5}/>
                        <Picker.Item label={'شهریور'} value={6}/>
                        <Picker.Item label={'مهر'} value={7}/>
                        <Picker.Item label={'آبان'} value={8}/>
                        <Picker.Item label={'آذر'} value={9}/>
                        <Picker.Item label={'دی'} value={10}/>
                        <Picker.Item label={'بهمن'} value={11}/>
                        <Picker.Item label={'اسفند'} value={12}/>
                    </Picker>
                </View>
                {
                    this.state.name === 'financial' ?
                        <FinancialMonthlyReport customersCount={150} income={2500000} credit={750000}/> :
                        <CustomersMonthlyReport customersCount={150} convincedCustomersCount={130} cancelledReserves={15}/>

                }
            </View>

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
    rowStyle: {
        width: width,
        padding: 5,
        height: height / 15,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        backgroundColor: 'white',
    }
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
