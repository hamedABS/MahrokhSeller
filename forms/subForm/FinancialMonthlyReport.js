import React from 'react'
import {Dimensions, Picker, StyleSheet, Text, View} from "react-native";
import {LineChart} from "react-native-chart-kit";


const FinancialMonthlyReport = (props) => (
    <View style={{width:width, alignItems:'center'}}>
        <View style={styles.topView}>
            <View style={styles.topViewItem}>
                <Text style={[styles.titlesBaseStyle, {fontSize: 20}]}>{props.customersCount}</Text>
                <Text style={styles.titlesBaseStyle}>مشتریان این ماه</Text>
            </View>
            <View style={styles.topViewItem}>
                <Text style={[styles.titlesBaseStyle, {color: '#B08C3E', fontSize: 20}]}>{props.income}</Text>
                <Text style={styles.titlesBaseStyle}>درآمد شما</Text>
            </View>
            <View style={styles.topViewItem}>
                <Text style={[styles.titlesBaseStyle, {color: 'green', fontSize: 20}]}>{props.credit}</Text>
                <Text style={styles.titlesBaseStyle}>اعتبار کیف پول</Text>
            </View>
        </View>
        <LineChart
            data={{
                labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",],
                datasets: [
                    {
                        data: [
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                            Math.random() * 1000,
                        ]
                    }
                ]
            }}
            width={Dimensions.get("window").width - 10} // from react-native
            height={height/3.3}
            yAxisLabel="ت"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                backgroundColor: "#e26a00",
                // backgroundGradientFrom: "#fb8c00",
                backgroundGradientFrom: '#B08C3E',
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 5,
                marginTop:50
            }}
        />
    </View>

)


const {width, height} = Dimensions.get("window");
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

export default FinancialMonthlyReport;
