import {Dimensions, StyleSheet} from "react-native";


const {width, height} = Dimensions.get("window");
const authStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    content: {
        height: height / 3,
        justifyContent: 'space-around',
    },
    txt_input_container: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
    },

    txt_input: {
        fontFamily: 'IRANSansFaNum',
        height: 40,
        width: width,
        textAlign: 'right',
        writingDirection: 'rtl',
        paddingRight: 10
    },

    txt_input_img: {
        height: 35,
        width: 35,
        marginRight: width / 45,
        tintColor: '#B08C3E',
    },
    header: {
        height: height / 14,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#E4DFE6',
        justifyContent: 'center',
        marginTop: 24
    },
    footer: {
        borderColor: 'grey',
        justifyContent:'center',
        backgroundColor: '#E4DFE6',
        borderTopWidth: 1,
        height: height / 4.5,
        alignItems: 'center',
    },
    btn_register_txt: {
        fontFamily: 'IRANSansWeb',
        fontSize: 18,
        textAlign: 'center',
        padding: 8,
        color: 'white'
    },
    btn_register: {
        margin: 10,
        width: width / 2,
        height: height / 13,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#B08C3E',
        borderRadius: 50,
    },
    rules_chk: {
        flexDirection: 'row-reverse',
        width: width / 2,
        height: height / 13,
        justifyContent: 'center'
    },
    rules_txt: {
        fontFamily: 'IRANSansWeb',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 3
    }
});
export {width,height}
export default authStyles;



