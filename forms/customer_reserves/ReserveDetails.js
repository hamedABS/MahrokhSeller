import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import MyMapView from "../MyMapView";
import Modal from 'react-native-modal'
import authStyles from "../auth/AuthStyles";

export default class ReserveDetails extends React.Component {

    constructor() {
        super();
        this.state = {
            location: '',
            isVisible: false,
            options: {},
            locationIsLoaded: false,
            cancelModalIsVisible: false,
            cancelReason: ''
        }
    }

    static navigationOptions = ({navigation}) => {
        let headerBackImage = <Image source={require('../../assets/png/left.png')}
                                     style={{width: 20, height: 20}}
        />;
        let headerTitle =
            <Text style={{
                textAlign: 'center',
                fontFamily: 'IRANSansWeb',
                width: width / 1.3,
                fontSize: 16
            }}>جزییات رزرو</Text>
        return {
            headerBackImage: () => {
                return headerBackImage
            },
            headerTitle: () => {
                return headerTitle
            },
        };
    };


    _renderCancelModal() {
        return <Modal isVisible={this.state.cancelModalIsVisible}>
            <View style={styles.modalContainer}>
                <Text style={[styles.itemText, {marginTop: 10}]}>دلیل لغو رزرو چیست؟</Text>
                <TextInput
                    style={[authStyles.txt_input, {
                        height: height/10,
                        width: width / 1.2,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.5)'
                    }]}
                    autoCapitalize='words'
                    onChangeText={(cancelReason) => this.setState({cancelReason})}
                    value={this.state.cancelReason}/>

                <View style={{flexDirection: 'row-reverse', alignItems: 'center',marginBottom: 5}}>
                    <TouchableOpacity style={{padding: 5, backgroundColor: '#B08C3E', borderRadius: 5, marginLeft: 5}}
                                      onPress={() => this.setState({cancelModalIsVisible: false})}>
                        <Text style={styles.itemText}>لغو رزرو</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 5, backgroundColor: '#f75841', borderRadius: 5}}
                                      onPress={() => this.setState({cancelModalIsVisible: false})}>
                        <Text style={styles.itemText}> انصراف از لغو</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    }


    render() {
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                {this._renderCancelModal()}
                <View style={[styles.itemContainer, {height: height / 4}]}>
                    <View style={{marginBottom: 10, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Salon')}>
                            <Image
                                source={require('../../assets/png/brownHairGirl.png')}
                                style={{width: width / 4, height: width / 4, borderRadius: 50}}
                            />
                        </TouchableOpacity>
                        <Text style={[styles.itemText, {fontSize: 18,fontFamily: 'IRANSansWebMedium'}]}>سارا رضایی</Text>
                    </View>

                </View>
                <View style={[styles.itemContainer, {padding: 10, height: height / 8}]}>
                    <Text style={styles.itemText}>کاشت ناخن۹۸/۱۰/۲۷ ساعت 8 صبح</Text>
                    <Text style={styles.itemText}>خدامت مو ۹۸/۱۰/۲۶ ساعت 10 صبح</Text>
                    <Text style={styles.itemText}>کاشت ناخن۹۸/۱۰/۲۸ ساعت 12 صبح</Text>
                </View>
                <View style={[styles.itemContainer, {height: height / 11}]}>
                    <Text style={styles.itemText}>صورت حساب: پرداخت شده است</Text>
                </View>
                <View style={styles.invoiceView}>
                    <View style={styles.invoiceViewFirstPart}>
                        <Text style={styles.itemText}> مجموع سبد خرید: ۹۰۰۰۰ </Text>
                        <Text style={styles.itemText}> تخفیف: ۱۰۰۰۰ تومان </Text>
                        <Text style={[styles.itemText]}>پرداخت شده: ۸۰۰۰۰ تومان </Text>
                    </View>
                    <View style={{width:"100%",height:'30%',alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={[styles.itemText, {color: '#B08C3E'}]}>مبلغ باقیمانده:  ۰ تومان </Text>
                    </View>
                </View>
                <TouchableOpacity style={authStyles.btn_register} onPress={() => this._onPressButton()}>
                    <Text style={authStyles.btn_register_txt}>تکمیل فرایند رزرو</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    itemContainer: {
        width: width,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.26)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        fontSize: 14,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        color: '#00000099',
    },
    details: {
        width: width / 6,
        justifyContent: 'center',
        height: '20%',
        borderRadius: 50,
        borderColor: '#B08C3E',
        borderWidth: 1,
        marginBottom: 10,
        alignSelf: 'flex-end'
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
    invoiceView: {
        width: width / 2,
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
    invoiceViewFirstPart: {
        width: "100%",
        alignItems:'center',
        justifyContent:'center',
        height: "70%",
        borderBottomColor: 'rgba(0,0,0,0.46)',
        borderBottomWidth: 1
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
