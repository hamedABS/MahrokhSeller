import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


export default class SalonCategoryService extends React.Component {
    state = {
        serviceCategoriesIsFocused: [false, false, false, false, false],
    }


    render() {
        return (
            <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}>
                {
                    categories.map((item, index) => {
                        return (
                            <TouchableOpacity key={index}
                                              onPress={() => this._selectService(index)}
                                              style={[styles.serviceCategoryTile, this.state.serviceCategoriesIsFocused[index] ? {borderColor: '#B08C3E'} : null]}>
                                <Image
                                    source={item.image}
                                    style={[{
                                        width: 50,
                                        height: 50
                                    }, this.state.serviceCategoriesIsFocused[index] ? {tintColor: '#B08C3E'} : null]}
                                />
                                <Text
                                    style={[styles.text, {fontSize: 15}, this.state.serviceCategoriesIsFocused[index] ? {color: '#B08C3E'} : null]}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        )
    }

    _selectService(index) {
        this.state.serviceCategoriesIsFocused[index] = !this.state.serviceCategoriesIsFocused[index];
        this.setState({
            serviceCategoriesIsFocused: this.state.serviceCategoriesIsFocused
        })
        if (this.state.serviceCategoriesIsFocused[index]) {
            this.props.setCategoryName(categories[index].name)
        }
    }
}


const {width, height} = Dimensions.get("window");
const categories = [
    {
        name: 'زیبایی مو',
        image: require('../../assets/png/hairDair.png')
    },
    {
        name: 'درمانی مو',
        image: require('../../assets/png/hairDair.png')
    },
    {
        name: ' صورت',
        image: require('../../assets/png/face.png')
    },
    {
        name: ' ناخن',
        image: require('../../assets/png/nail.png')
    },
    {
        name: ' برداشتن مو',
        image: require('../../assets/png/hairDair.png')
    }, {
        name: ' برداشتن مو',
        image: require('../../assets/png/hairDair.png')
    },
]
const styles = StyleSheet.create({
    text: {
        fontFamily: 'IRANSansFaNum',
        textAlign: 'center',
        fontSize: 18
    },
    serviceCategoryTile: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: width / 4,
        borderRadius: 10,
        height: width / 4,
        borderWidth: 1.5,
        borderColor: 'rgba(0,0,0,0.6)'
    },
})
