import authStyles, {height, width} from "../auth/AuthStyles";
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View,} from 'react-native';

import * as DocumentPicker from 'expo-document-picker';
import Accordion from "react-native-collapsible/Accordion";


export default class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {
            images: [],
            isImageViewVisible: false,
            activeSections: [],
        }
    }

    render() {

        let images = this.state.images;
        let salonImages = images.filter((image) => image.label === "salon")


        return (
            <View style={{flex: 1, alignItems: 'center', padding: 5}}>
                <View style={[styles.viewItemContainer, {height: height / 3.5}]}>
                    <View style={{padding: 10, alignItems: 'center'}}>
                        <ScrollView horizontal
                                    showsHorizontalScrollIndicator={false}
                            /*style={{width: width, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}*/>
                            {
                                salonImages.map((salonImage, index) => {
                                    return (
                                        <View key={index}>
                                            {
                                                salonImage != null ? <Image
                                                    source={{uri: salonImage.image.uri}}
                                                    style={{
                                                        width: width / 2.5,
                                                        height: width / 3.5,
                                                        margin: 2,
                                                        borderRadius: 10
                                                    }}
                                                /> : null
                                            }

                                            {salonImage != null ? <TouchableOpacity
                                                style={{
                                                    width: 20,
                                                    height: 20,
                                                    position: 'absolute',
                                                    alignSelf: 'flex-end',
                                                }}
                                                onPress={() => this._removeImage(salonImage)}>
                                                <Image
                                                    source={require('../../assets/png/minus.png')}
                                                    style={{width: 20, height: 20}}
                                                />
                                            </TouchableOpacity> : null}
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => this._addImageOnPress('salon')}>
                            <Text style={[styles.titlesBaseStyle, {fontSize: 12}]}>افزودن عکس جدید برای آرایشکاه</Text>
                            <Image
                                source={require("../../assets/png/Group-2110.png")}
                                style={{width: width / 6, height: width / 6}}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={[{
                    alignItems: 'center',
                    width: width,
                    borderBottomColor: 'rgba(0,0,0,0.6)',
                    height: height / 2.2,
                    borderBottomWidth: 0,
                }]}>
                    <Accordion
                        containerStyle={{alignItems: 'center', marginTop: 30}}
                        sections={SECTIONS}
                        activeSections={this.state.activeSections}
                        renderHeader={(section, isActive) => this._renderHeader(section, isActive, this.state.activeSections[0])}
                        renderContent={this._renderContent}
                        onChange={this._updateSections}
                        touchableComponent={TouchableOpacity}
                    />
                </View>

            </View>
        );
    }

    _renderHeader = (section, index, activeSection) => {
        return (
            <View style={styles.everyItem}>
                <Text style={[styles.txt, {marginRight: 10}]}>{section.title}</Text>
                <Image
                    source={require('../../assets/png/left.png')}
                    style={index == activeSection ? [styles.icon, {rotation: -90}] : styles.icon}/>
            </View>
        );
    };

    _renderContent = (section, index) => {
        let images = this.state.images;
        let label;
        if (index === 0) {
            label = "nail"
        } else if (index === 1) {
            label = "hair"
        } else if (index === 2) {
            label = "skin"
        }

        let beRenderedImages = images.filter((image) => image.label === label)

        return (
            <View style={[styles.viewItemContainer, {height: height / 5}]}>
                <View style={{padding: 10, alignItems: 'center'}}>
                    <ScrollView horizontal
                                showsHorizontalScrollIndicator={false}>
                        {
                            beRenderedImages.map((item, index) => {
                                return (
                                    <View key={index}>
                                        {
                                            item != null ? <Image
                                                source={{uri: item.image.uri}}
                                                style={{
                                                    width: width / 3.5,
                                                    height: width / 4.9,
                                                    margin: 2,
                                                    borderRadius: 10
                                                }}
                                            /> : null
                                        }

                                        {item != null ? <TouchableOpacity
                                            style={{
                                                width: 20,
                                                height: 20,
                                                position: 'absolute',
                                                alignSelf: 'flex-end',
                                            }}
                                            onPress={() => this._removeImage(item)}>
                                            <Image
                                                source={require('../../assets/png/minus.png')}
                                                style={{width: 20, height: 20}}
                                            />
                                        </TouchableOpacity> : null}
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                    <TouchableOpacity style={{alignItems: 'center'}} onPress={() => this._addImageOnPress(label)}>
                        <Image
                            source={require("../../assets/png/Group-2110.png")}
                            style={{width: width / 7, height: width / 7}}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        );
    };


    _onPressButton = () => {
        this.props.navigation.navigate('Tab');
    }

    _addImageOnPress = async (label) => {
        let result = await DocumentPicker.getDocumentAsync({type: 'image/*'});

        if (!result.cancelled && result.type !== 'cancel') {
            let images = this.state.images;

            images.push({image: result, label: label})
            this.setState({
                salonImages: images
            })
        }
    }


    _removeImage(item) {
        let salonImages = this.state.salonImages;
        salonImages.splice(item, 1)
        this.setState({salonImages: salonImages})
    }

    _updateSections = activeSections => {
        this.setState({activeSections});
    };
}


const SECTIONS = [
    {
        title: 'کاشت ناخن',
        content: ''
    },
    {
        title: 'خدمات مو',
        content: '',
    },
    {
        title: 'خدمات پوست',
        content: '',
    },
];

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
        borderBottomColor: 'rgba(0,0,0,0.6)',
        borderBottomWidth: 1,
    },
    personnelView: {
        alignItems: 'flex-end',
        width: width,
        borderBottomColor: 'rgba(0,0,0,0.6)',
        borderBottomWidth: 1,
        height: height / 5
    },
    titlesBaseStyle: {
        fontSize: 20,
        fontFamily: 'IRANSansFaNum',
        color: 'black',
        textAlign: 'center'
    },
    everyItem: {
        flexDirection: 'row-reverse',
        borderRadius: 10,
        width: width / 1.04,
        height: height / 14,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.26)',
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 3,
        alignSelf: 'center'
    },
    socialIcon: {
        width: 50,
        height: 50,
        marginRight: 10,
        marginLeft: 7,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
        marginLeft: 7,
        tintColor: '#B08C3E',
    },
    txt: {
        fontSize: 16,
        fontFamily: 'IRANSansFaNum',
        color: '#323232'
    }
})




