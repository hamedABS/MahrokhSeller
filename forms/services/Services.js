import React from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import SalonCategoryService from "../subForm/SalonCategoryService";
import SubCategoryService from "../subForm/SubCategoryService"
import authStyles from "../auth/AuthStyles";

export default class Services extends React.Component {

    constructor() {
        super();
        this.state = {
            focusedCategory: '',
            serviceCategoriesIsFocused: [false, false, false, false, false],
        }
        this.setFocusedCategory = this.setFocusedCategory.bind(this)
    }


    setFocusedCategory(category) {
        this.setState({
            focusedCategory: category
        })
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={[styles.viewItemContainer, {
                    height: height / 6,
                }]}>
                    <ScrollView horizontal
                                showsHorizontalScrollIndicator={false}>
                        {
                            categories.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index}
                                                      onPress={() => this._selectService(item, index)}
                                                      style={[styles.serviceCategoryTile, this.state.serviceCategoriesIsFocused[index] ? {
                                                          backgroundColor: '#B08C3E',
                                                          borderWidth: 0
                                                      } : null]}>
                                        <Image
                                            source={item.image}
                                            style={[{
                                                width: 50,
                                                height: 50
                                            }, this.state.serviceCategoriesIsFocused[index] ? {tintColor: 'white'} : null]}
                                        />
                                        <Text
                                            style={[styles.text, {fontSize: 15}, this.state.serviceCategoriesIsFocused[index] ? {color: 'white'} : null]}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                {this.state.focusedCategory != '' ?
                    <SubCategoryService category={this.state.focusedCategory}/> : null}

                {this.state.focusedCategory != '' ?
                    <TouchableHighlight style={authStyles.btn_register} onPress={this._onRegisterPressButton}>
                        <Text style={authStyles.btn_register_txt}>ذخیره اطلاعات</Text>
                    </TouchableHighlight> : null}
            </View>
        )
    }

    _selectService(item, index) {
        this.state.serviceCategoriesIsFocused[index] = !this.state.serviceCategoriesIsFocused[index];
        this.setState({
            serviceCategoriesIsFocused: this.state.serviceCategoriesIsFocused
        })
        if (this.state.serviceCategoriesIsFocused[index]) {
            this.setState({focusedCategory: item})
        }
    }

}


const categories = [
    {
        name: 'زیبایی صورت',
        image: require('../../assets/png/hairDair.png'),
        subCategories: ['میکروبلیدینگ', 'میکرو پیگمنتیشن', 'ترمیم میکرو', 'خط جشم', 'بن مژه',]
    },
    {
        name: 'پوست، زیبایی',
        image: require('../../assets/png/hairDair.png'),
        subCategories: ['درمان تخصصی دور چشم', 'درمان پوست جرب', 'درمان آکنه', 'آبرسانی', 'حلزون تراپی',]
    },
    {
        name: 'ماساژ و اسپا',
        image: require('../../assets/png/face.png'),
        subCategories: ['ریلکسی', 'درمانی', 'لاغری', 'صورت', 'سر و گردن',]
    },
    {
        name: 'عروس',
        image: require('../../assets/png/nail.png'),
        subCategories: ['پکیج عروس', 'میکاپ و مو', 'پکیج عقد', 'عروس vip', 'عقد vip',]
    },
    {
        name: 'درمانی مو',
        image: require('../../assets/png/hairDair.png'),
        subCategories: ['ویتامینه مو', 'پروتئین تراپی', 'کراتین احیا', 'کراتین صافی', 'ریزش مو',]
    }, {
        name: ' برداشتن مو',
        image: require('../../assets/png/hairDair.png'),
        subCategories: ['خاویار تراپی', 'پروتيین تراپی', 'میراکل تراپی', 'فیلرمو', 'المنت مو',]
    }, , {
        name: 'لیزر',
        image: require('../../assets/png/hairDair.png'),
        subCategories: ['پیکیح صورت', 'پکیج زیربغل', 'تک جلسه بیکینی', 'بیکینی + خط مایو + خط باسن',]
    }, , {
        name: 'ناخن',
        image: require('../../assets/png/hairDair.png'),
        subCategories: ['زلیش دست', 'کروم', 'مانیکور و لاک', 'مانیکور روسی', 'کاژن دست',]
    },
]
const {width, height} = Dimensions.get("window");
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

    serviceCategoryTile: {
        backgroundColor: 'white',
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
