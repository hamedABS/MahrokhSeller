import React from 'react';
import {CheckBox, Dimensions, StyleSheet, Text, TextInput, View,ScrollView} from 'react-native';


export default class SalonCategoryService extends React.Component {
    state = {
        serviceCategoriesIsFocused: [false, false, false, false, false],
    }

    render() {


        let category = this.props.category;

        return (
            <View style={{
                    width: width,
                    height: height / 2,
                    alignItems: 'flex-end',
                    backgroundColor: '#FFFFFF'
                }}>
                <Text style={[styles.txt, {margin: 10}]}>{category.name}</Text>
                <ScrollView>
                    {
                        category.subCategories.map((item, index) => {
                            return (
                                <View key={index} style={[styles.subCategory]}>
                                    <View style={{flexDirection: 'row-reverse'}}>
                                        <CheckBox
                                            value={this.state.serviceCategoriesIsFocused[index]}
                                            onChange={() => this._selectSubCategory(index)}/>
                                        <Text style={[styles.txt, {fontSize: 16}]}>{item}</Text>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row-reverse',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                        alignSelf:'center'
                                    }}>
                                        <Text style={styles.txt}>از: </Text>
                                        <TextInput style={styles.txtInput}
                                                   keyboardType={'numeric'}
                                                   onChangeText={(value) => console.log(value)}/>
                                        <Text style={styles.txt}>تا: </Text>
                                        <TextInput style={styles.txtInput}
                                                   keyboardType={'numeric'}
                                                   onChangeText={(value) => console.log(value)}/>
                                        <Text style={styles.txt}>زمان: </Text>
                                        <TextInput style={styles.txtInput}
                                                   keyboardType={'numeric'}
                                                   onChangeText={(value) => console.log(value)}/>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
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
    subCategory: {
        height: height / 10,
        width: width,
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        paddingRight:15
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
       // margin: 5,
    },
})
