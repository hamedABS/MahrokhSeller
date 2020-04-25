import {height, width} from "../auth/AuthStyles";
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import PersonnelRegistrationForm from "../subForm/PersonnelRegistrationForm";


export default class PersonnelImageAddComponent extends React.Component {

    state = {
        personnels: [],
        personnelModalIsVisible: false,
        personnelForEdit: null
    }


    render() {
        let personnels = this.state.personnels;
        let personnelBeforeSelection = require("../../assets/png/woman.png");
        return (
            <View style={[styles.personnelView]}>
                <Text style={[styles.titlesBaseStyle, {marginTop: 5, margin: 10}]}>پرسنل</Text>

                <View style={{flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'center'}}>
                    {
                        personnels.map((item, index) => {
                            return (
                                <View key={index}>
                                    <TouchableOpacity onPress={() => this.setState({
                                        personnelModalIsVisible: true,
                                        personnelForEdit: item
                                    })}
                                                      style={styles.personnelTile}>
                                        <Image
                                            source={item.photo != '' ? {uri: item.photo.uri} : personnelBeforeSelection}
                                            style={[styles.personnelImage]}
                                        />
                                        <Text style={[styles.text, {fontSize: 12}]}>{item.name}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            width: 20,
                                            height: 20,
                                            position: 'absolute',
                                            alignSelf: 'flex-start',
                                            marginTop: 60,
                                        }}
                                        onPress={() => this._removeImage(index)}>
                                        <Image
                                            source={require('../../assets/png/minus.png')}
                                            style={{width: 20, height: 20}}
                                        />
                                    </TouchableOpacity>
                                </View>

                            )
                        })
                    }
                    {this.state.personnelModalIsVisible ?
                        <PersonnelRegistrationForm close={this._closePersonnelModal}
                                                   addPeresonnel={this._addPersonnel}
                                                   personnelForEdit={this.state.personnelForEdit}/> : null}

                    <TouchableOpacity style={[styles.personnelTile, {justifyContent: 'center'}]}
                                      onPress={() => this.setState({
                                          personnelModalIsVisible: true
                                      })}>
                        <Image source={require("../../assets/png/plus.png")}
                               style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }

    _addPersonnel = async (personnel) => {
        let personnels = this.state.personnels;
        console.log(personnel)
        if (personnel.id === null) {
            personnel.id = personnels.length
            personnels.push(personnel)
        } else {
            personnels[personnel.id] = personnel
        }
        this.setState({
            personnels: personnels
        })
    }

    _removeImage(index) {
        let personnels = this.state.personnels;
        personnels.splice(index, 1)
        this.setState({personnels: personnels})
    }


    _closePersonnelModal = () => {
        this.setState({
            personnelModalIsVisible: false,
            personnelForEdit:null
        })
    }


}
const styles = StyleSheet.create({
    text: {
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        fontSize: 18
    },
    viewItemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row-reverse',
        width: width,
        borderBottomColor: '#70707080',
        borderBottomWidth: 1,
    },
    personnelView: {
        alignItems: 'flex-end',
        width: width,
        borderBottomColor: '#70707080',
        borderBottomWidth: 1,
        height: height / 5
    },
    personnelTile: {
        width: width / 5,
        marginRight: 5,
        height: width / 5,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    },
    personnelImage: {
        width: width / 5,
        height: width / 5,
        borderRadius: 50,
    },
    titlesBaseStyle: {
        fontSize: 18,
        fontFamily: 'IRANSansWebMedium',
        textAlign: 'center',
        color: '#00000099',
        marginRight: 30
    },
    timeTile: {
        width: width / 3 - 10,
        height: height / 22,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        margin: 5
    }
})
