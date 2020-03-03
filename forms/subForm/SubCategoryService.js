import React from 'react';
import {CheckBox, Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';


export default class SalonCategoryService extends React.Component {
    state = {
        serviceCategoriesIsFocused: [false, false, false, false, false],
    }

    render() {
        //subCategories should be sent into this component
        let subCategories = [0, 1, 2, 3, 4, 5]
        let categoryName = this.props.categoryName;

        return (
            <View style={{
                width: width,
                height: height / 2,
                alignItems: 'flex-end',
                backgroundColor: '#FFFFFF'
            }}>
                <Text style={[styles.text, {margin: 10}]}>{categoryName}</Text>
                {
                    subCategories.map((item, index) => {
                        return (
                            <View key={index} style={[styles.subCategory]}>
                                <View style={{flexDirection: 'row-reverse'}}>
                                    <CheckBox
                                        value={this.state.serviceCategoriesIsFocused[index]}
                                        onChange={() => this._selectSubCategory(index)}/>
                                    <Text style={[styles.text, {fontSize: 16}]}>دسته بعدی نوع {index}</Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row-reverse',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'flex-end'
                                }}>
                                    <Text style={styles.txt}>از</Text>
                                    <TextInput style={styles.txtInput}/>
                                    <Text style={styles.txt}>تا</Text>
                                    <TextInput style={styles.txtInput}/>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }

    _selectSubCategory(index) {
        this.state.serviceCategoriesIsFocused[index] = !this.state.serviceCategoriesIsFocused[index];
        this.setState({
            serviceCategoriesIsFocused: this.state.serviceCategoriesIsFocused
        })
    }
}


const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    text: {
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 2,
    },
    subCategory: {
        height: height / 18,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row-reverse',
    },
    txtInput: {
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        borderRadius: 10,
        padding: 5,
        height: 30,
        width: 60,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)'
    },
    txt: {
        fontSize: 18,
        fontFamily: 'IRANSansFaNum',
        marginRight: 15,
        color: '#00000099',
        margin: 5,
    },
})
