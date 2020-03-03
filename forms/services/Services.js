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
            focusedCategory: ''
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
            <View style={{flex: 1, alignItems: 'center',justifyContent:'space-between'}}>
                <View style={[styles.viewItemContainer, {
                    height: height / 6,
                }]}>
                    <SalonCategoryService setCategoryName={this.setFocusedCategory}/>
                </View>
                {this.state.focusedCategory != '' ?
                    <SubCategoryService categoryName={this.state.focusedCategory}/> : null}

                {this.state.focusedCategory != '' ?
                    <TouchableHighlight style={authStyles.btn_register} onPress={this._onRegisterPressButton}>
                        <Text style={authStyles.btn_register_txt}>ذخیره اطلاعات</Text>
                    </TouchableHighlight> : null}
            </View>
        )
    }

}

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
    timeTile: {
        width: width / 3 - 10,
        height: height / 22,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        margin: 5
    }
})
