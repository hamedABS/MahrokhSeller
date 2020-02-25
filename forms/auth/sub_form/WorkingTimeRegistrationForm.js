import {height, width} from "../AuthStyles";
import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import Modal from 'react-native-modal'


export default class WorkingTimeRegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceCategoriesIsFocused: [false, false, false, false, false],
            name: '',
            serviceTypes: []
        }
    }


    render() {
        return (
            <Modal isVisible={true}>
                <View style={styles.modalContainer}>
                    <View style={[styles.viewItemContainer, {flexDirection: 'row-reverse'},]}>
                        <Text style={[styles.text, {width: width / 1.4, marginRight: 20}]}>ساعت کاری -
                            {this.props.time}</Text>
                        <TouchableOpacity onPress={() => this.props.close()}>
                            <Image
                                source={require('../../../assets/png/Group-2384.png')}
                                style={{width: 40, height: 40}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <View style={{
                            flexDirection: 'row-reverse',
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            width: width / 2
                        }}>
                            <Text style={styles.text}>از</Text>
                            <TextInput style={styles.txtInput}/>
                            <Text style={styles.text}>تا</Text>
                            <TextInput style={styles.txtInput}/>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this._confirmOnPress()}>
                        <Text style={[styles.text, {color: '#B08C3E', marginBottom: 10}]}>تایید</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    _confirmOnPress() {
        let personnel = {};
        this.props.close()
    }
}


const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 1.1,
        height: height / 4,
        borderRadius: 10
    },
    viewItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row-reverse',
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
})
