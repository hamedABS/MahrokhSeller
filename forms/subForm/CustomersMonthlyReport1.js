import React from 'react'
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {PieChart} from "react-native-chart-kit";


const CustomersMonthlyReport = (props) => (
    <View style={{width: width, alignItems: 'center'}}>
        <View style={styles.topView}>
            <View style={styles.topViewItem}>
                <Text style={[styles.titlesBaseStyle, {fontSize: 20}]}>{props.customersCount}</Text>
                <Text style={styles.titlesBaseStyle}>مشتریان این ماه</Text>
            </View>
            <View style={styles.topViewItem}>
                <Text style={[styles.titlesBaseStyle, {
                    color: '#B08C3E',
                    fontSize: 20
                }]}>{props.convincedCustomersCount}</Text>
                <Text style={styles.titlesBaseStyle}>مشتریان راضی</Text>
            </View>
            <View style={styles.topViewItem}>
                <Text style={[styles.titlesBaseStyle, {color: 'red', fontSize: 20}]}>{props.cancelledReserves}</Text>
                <Text style={styles.titlesBaseStyle}>مشتریان کنسلی</Text>
            </View>
        </View>
        <PieChart
            data={data}
            width={width}
            height={height / 3.5}
            chartConfig={chartConfig}
            accessor="percent"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
            style={{marginTop: 50}}
        />
    </View>
)
const {width, height} = Dimensions.get("window");
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
};

const styles = StyleSheet.create({
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
    titlesBaseStyle: {
        fontSize: 16,
        fontFamily: 'IRANSansWebMedium',
        textAlign: 'center',
        color: '#00000099',
    },
})
const data = [
    {
        name: "convinced",
        percent: 70,
        color: '#9e7e38',
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "unconvinced",
        percent: 10,
        color: "#c8af78",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "cancelled",
        percent: 10,
        color: '#e7ddc5',
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
];


export default CustomersMonthlyReport
