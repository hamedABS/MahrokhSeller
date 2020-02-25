import React, {Component} from "react";
import {
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import StarRating from "react-native-star-rating";

export default class Comments extends Component {
    static navigationOptions = ({navigation}) => {
        let rightBtn = <TouchableOpacity>
            <Image
                source={require('../../assets/png/settings3x.png')}
                style={{width: 26, height: 26, marginRight: 15, tintColor: '#C8992E'}}/>
        </TouchableOpacity>
        let headerTitle =
            <Image
                source={require('../../assets/png/Logo_new.png')}
                style={{width: 60, height: 60, alignSelf: 'center', marginLeft: width / 2.4}}
            />
        return {
            headerTitle: () => {
                return headerTitle
            },
            headerRight: () => {
                return rightBtn;
            }
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <View style={styles.topViewItem}>
                        <Text style={[styles.commentText, {fontSize: 26}]}>152</Text>
                        <Text style={styles.commentText}>مشتریان این ماه</Text>
                    </View>
                    <View style={styles.topViewItem}>
                        <Text style={[styles.commentText, {color: 'green', fontSize: 26}]}>120</Text>
                        <Text style={styles.commentText}>مشتریان راضی</Text>
                    </View>
                    <View style={styles.topViewItem}>
                        <Text style={[styles.commentText, {color: 'red', fontSize: 26}]}>13</Text>
                        <Text style={styles.commentText}>مشتریان کنسلی</Text>
                    </View>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    {
                        mockComments.map((item, i) => {
                            return (
                                <TouchableOpacity key={i} style={styles.commentContainer}
                                                  onPress={() => {
                                                      return this.props.navigation.navigate('Survey')
                                                  }}>
                                    <Text
                                        style={[styles.commentText, {fontSize: 16}]}>{item.firstName + item.lastName}</Text>
                                    <Text style={styles.commentText}> {item.comment} </Text>
                                    <View style={{width: width / 4, margin: 5}}>
                                        <StarRating
                                            disabled={true}
                                            starSize={23}
                                            emptyStarColor='#707070'
                                            fullStarColor='#FAC917'
                                            maxStars={5}
                                            rating={item.rate}
                                        />
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        //justifyContent: 'space-between',
        alignItems: 'center',
    },
    commentContainer: {
        width: width / 1.1,
        height: height / 6,
        padding: 5,
        borderRadius: 7,
        backgroundColor: 'white',
        margin: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    topView: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        width: width / 1.2,
        height: height / 8,
        borderRadius: 7,
        backgroundColor: 'white',
        margin: 3,
        borderColor: "#B08C3E",
        borderWidth: 1
    },
    topViewItem: {
        alignItems: 'center',
        alignContent: 'center'
    },
    star: {
        width: 16,
        height: 16,
    },
    commentText: {
        fontSize: 14,
        fontFamily: 'IRANSansFaNum',
    }
})

const mockComments = [
    {
        id: 1,
        firstName: 'سارا',
        lastName: 'احمدی',
        comment: 'خیلی ممنون از سالن آرایشی و حرفه ای کایزن بابت کار تست تست تست حرفه ای و خوب',
        rate: 2
    },
    {
        id: 2,
        firstName: 'سارا',
        lastName: 'احمدی',
        comment: 'خیلی ممنون از سالن آرایشی و حرفه ای کایزن بابت کار تست تست تست حرفه ای و خوب',
        rate: 3
    },
    {
        id: 3,
        firstName: 'سارا',
        lastName: 'احمدی',
        comment: 'خیلی ممنون از سالن آرایشی و حرفه ای کایزن بابت کار تست تست تست حرفه ای و خوب',
        rate: 5
    },
    {
        id: 4,
        firstName: 'سارا',
        lastName: 'احمدی',
        comment: 'خیلی ممنون از سالن آرایشی و حرفه ای کایزن بابت کار تست تست تست حرفه ای و خوب',
        rate: 4
    }, {
        id: 5,
        firstName: 'سارا',
        lastName: 'احمدی',
        comment: 'خیلی ممنون از سالن آرایشی و حرفه ای کایزن بابت کار تست تست تست حرفه ای و خوب',
        rate: 4
    }, {
        id: 6,
        firstName: 'سارا',
        lastName: 'احمدی',
        comment: 'خیلی ممنون از سالن آرایشی و حرفه ای کایزن بابت کار تست تست تست حرفه ای و خوب',
        rate: 4
    },
]
