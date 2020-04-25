import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native'
import Modal from 'react-native-modal';


const ConfirmationDialog = (props) => (
    <Modal isVisible={true}>
        <View style={{
            height: height / 4,
            width: width / 1.2,
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'white',
            borderRadius: 25
        }}>
            <Text>{props.message}</Text>
            <View style={{width: width / 2, flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
                <TouchableOpacity style={{
                    width: width / 5,
                    height: height / 18,
                    backgroundColor: 'green',
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{fontSize: 15, fontFamily: 'IRANSansWeb', textAlign: 'center'}}
                          onPress={() => props.donOnConfirmation()}>تایید</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: width / 5, height: height / 18, backgroundColor: 'red', borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => props.doOnCancel()}>
                    <Text style={{fontSize: 15, fontFamily: 'IRANSansWeb', textAlign: 'center'}}>انصراف</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
)


export default ConfirmationDialog;
const {width, height} = Dimensions.get("window");

