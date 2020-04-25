import authStyles, {height, width} from "../auth/AuthStyles";
import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import Modal from 'react-native-modal'
import {exp} from "react-native-reanimated";
import MyMapView from "../MyMapView";


export default class EditSalonInfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceTypes: []
        }
    }

    render() {
        return (
            <Modal isVisible={true}>
                <View style={styles.modalContainer}>
                    <View style={[styles.viewItemContainer, {flexDirection: 'row-reverse',height:'10%'},]}>
                        <Text style={[styles.text, {width: width / 1.4, marginRight: 20}]}>ویرایش اطلاعات</Text>
                        <TouchableOpacity onPress={() => this.props.close()}>
                            <Image
                                source={require('../../assets/png/cancel.png')}
                                style={{width: 30, height: 30}}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.viewItemContainer]}>
                        <MyMapView width={width/1.1} height={height/8}/>
                        <View style={[authStyles.txt_input_container,{width:width/1.1,borderBottomWidth:0}]}>
                            <Image
                                style={[authStyles.txt_input_img]}
                                source={require('../../assets/png/location.png')}
                            />
                            <TextInput
                                style={authStyles.txt_input}
                                placeholder='آدرس فروشگاه'
                                autoCapitalize='words'
                                onChangeText={(email) => this.setState({email})}
                                value={this.state.email}/>
                        </View>
                    </View>
                    <View style={styles.workingTimeItem}>
                        <View style={styles.daysContainer}>
                            <View style={{width: 10, height: 10, backgroundColor: '#B08C3E', borderRadius: 50}}/>
                            <Text style={[styles.workingItemText, {fontSize: 15, marginRight: 10}]}>شنبه الی
                                چهارشنبه</Text>
                        </View>
                        <FromToComponent/>
                    </View>
                    <View style={styles.workingTimeItem}>
                        <View style={styles.daysContainer}>
                            <View style={{width: 10, height: 10, backgroundColor: '#B08C3E', borderRadius: 50}}/>
                            <Text style={[styles.workingItemText, {fontSize: 15, marginRight: 10}]}>پنجشنبه</Text>
                        </View>
                        <FromToComponent/>
                    </View>
                    <View style={styles.workingTimeItem}>
                        <View style={styles.daysContainer}>
                            <View style={{width: 10, height: 10, backgroundColor: '#B08C3E', borderRadius: 50}}/>
                            <Text style={[styles.workingItemText, {fontSize: 15, marginRight: 10}]}>جمعه</Text>
                        </View>
                        <FromToComponent/>
                    </View>

                    <TouchableOpacity onPress={() => this._confirmOnPress()}>
                        <Text style={[styles.text, {color: '#B08C3E', marginBottom: 10}]}>تایید</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    _confirmOnPress() {
        this.props.close()
    }
}


export const FromToComponent = () => (
    <View style={{
        alignItems: 'flex-end', alignSelf: 'flex-end',
    }}>
        <View style={{
            flexDirection: 'row-reverse',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: width / 2,
        }}>
            <Text style={styles.text}>از</Text>
            <TextInput style={styles.txtInput}/>
            <Text style={styles.text}>تا</Text>
            <TextInput style={styles.txtInput}/>
        </View>
    </View>
)

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 1.1,
        height: height / 2,
        borderRadius: 10
    },
    viewItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width / 1.1,
        borderBottomColor: 'rgba(0,0,0,0.6)',
        borderBottomWidth: 1,
    },
    text: {
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        fontSize: 18
    },
    serviceType: {
        width: width / 4 + 5,
        height: height / 20,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        margin: 5
    },
    txtInput: {
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        borderRadius: 10,
        padding: 5,
        height: 40,
        width: 80,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)'
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
        width: width / 1.1,
        marginTop: 5,
        marginRight: 10,
    },
    workingItemText: {
        fontSize: 17,
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        color: '#00000099',
    },
    daysContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginLeft: 20
    }
});
